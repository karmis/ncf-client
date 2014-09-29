define(
[
    'jquery',
    'underscore',
    'backbone'
],
function($, _, Backbone){
	// Throw an error when a URL is needed, and none is supplied.
	var urlError = function() {
		throw new Error('A "url" property or function must be specified');
	};

	// Wrap an optional error callback with a fallback error event.
	var wrapError = function(model, options) {
		var error = options.error;
		options.error = function(resp) {
				if (error) error(model, resp, options);
					model.trigger('error', model, resp, options);
			};
	};

	var noXhrPatch =
		typeof window !== 'undefined' && !!window.ActiveXObject &&
		!(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	// Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	var methodMap = {
		'create': 'POST',
		'update': 'PUT',
		'patch':  'PATCH',
		'delete': 'DELETE',
		'read':   'GET'
	};

	// Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	// Override this if you'd like to use a different library.
	Backbone.ajax = function() {
		return Backbone.$.ajax.apply(Backbone.$, arguments);
	};


	var BaseCollection = Backbone.Collection.extend({
		restResource: null,
		restParameters: {},
		dataType: 'json', // json/jsonp
		responseName:'entities',
		 // cheap : function() {
		 //    return this.filter(function(book) { 
		 //      return book.get('price') < 10.0; 
		 //    });
		request: function(){
			var self = this;
			// if(_.isFunction(this.model)){
			// 	// this.model =  this.model();
			// }
			return {
				post: function(options){
					return self.sync("POST", self.model, options)
				},
				get: function(options){
					return self.sync("GET", self.model, options)
				},
				put: function(options){
					return self.sync("PUT", self.model, options)
				},
				delete: function(options){
					return self.sync("DELETE", self.model, options)
				},
			}
		},
		url: function()
		{
			var parameters = null;
			_.each(this.restParameters,function(val, key){
				parameters+=key+'='+val+'&';
			});

		    var access_token=null;
		    return App.Rest.restURL +
	                this.restModule + "/" +
		            ((this.restResource) ? this.restResource : '') + 
		            (parameters ? ("?"+parameters+'&access_token='+access_token) : '?access_token='+access_token);
		},
		sync: function(method, model, options) {
		    var type = methodMap[method];

		    // Default options, unless specified.
		    _.defaults(options || (options = {}), {
		      emulateHTTP: Backbone.emulateHTTP,
		      emulateJSON: Backbone.emulateJSON
		    });

		    // Default JSON-request options.
		    var params = {type: type, dataType: 'json'};

		    // Ensure that we have a URL.
		    if (!options.url) {
		      params.url = _.result(model, 'url') || urlError();
		    }

		    // Ensure that we have the appropriate request data.
		    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
		      params.contentType = 'application/json';
		      params.data = JSON.stringify(options.attrs || model.toJSON(options));
		    }

		    // For older servers, emulate JSON by encoding the request into an HTML-form.
		    if (options.emulateJSON) {
		      params.contentType = 'application/x-www-form-urlencoded';
		      params.data = params.data ? {model: params.data} : {};
		    }

		    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
		    // And an `X-HTTP-Method-Override` header.
		    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
		      params.type = 'POST';
		      if (options.emulateJSON) params.data._method = type;
		      var beforeSend = options.beforeSend;
		      options.beforeSend = function(xhr) {
		        xhr.setRequestHeader('X-HTTP-Method-Override', type);
		        if (beforeSend) return beforeSend.apply(this, arguments);
		      };
		    }

		    // Don't process data on a non-GET request.
		    if (params.type !== 'GET' && !options.emulateJSON) {
		      params.processData = false;
		    }

		    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
		    // that still has ActiveX enabled by default, override jQuery to use that
		    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
		    if (params.type === 'PATCH' && noXhrPatch) {
		      params.xhr = function() {
		        return new ActiveXObject("Microsoft.XMLHTTP");
		      };
		    }

		    // Make the request, allowing the user to override any Ajax options.
		    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
		    model.trigger('request', model, xhr, options);
		    return xhr;
		},

	    // fetch: function(options) {
	    // 	var self = this;
	    // 	debugger;
	    // 	return this.request().get().success(function(data){
	    // 		if(data && data.length){
	    // 			var models = [];
	    // 			_.each(data, function(obj, id) {
	    // 				var model = _.clone(self.model);
	    // 				debugger;
	    // 				model.set(obj);
	    // 				self.add(model);
	    // 				// models.push(model);
	    // 			});
	    			
	    // 			// debugger;
	    // 			// self.add(models);
	    // 		}

	    // 		options.success(self);
	    		
	    // 	});
	    // },
	    // fetched: function(c, data){
	    // 	debugger
	    // },
	      // options = options ? _.clone(options) : {};
	      // if (options.parse === void 0) options.parse = true;
	      // var model = this;
	      // var success = options.success;
	      // options.success = function(resp) {
	      //   if (!model.set(model.parse(resp, options), options)) return false;
	      //   if (success) success(model, resp, options);
	      //   model.trigger('sync', model, resp, options);
	      // };
	      // wrapError(this, options);
	      // return this.sync('get', this, options);
	    // },
		parse: function(response) {
			if(response){
				if(this.responseName){
					return response[this.responseName]; 
				} else {
					return response; 
				}	
			}
		}
	});

	return BaseCollection;

});









// Components.CollectionWithFilter = Backbone.Collection.extend({
//     pager: null,
//     // имя REST-ресурса, источника данных коллекции
//     restResource: null,
//     restApp:App.Resource.restApp,
//     //строка с прараметрами которые необходимо передать
//     //ex:'par_name=par_value&pr_name=pr_value'
//     restParameters: null,
//     restPath:null,
//     disablePager:false,
//     url: function()
//     {
//         var access_token=(App.Data.User.accessToken)?App.Data.User.accessToken:'';
//         return App.Resource.restURL +
//                 this.restApp + '/' +
//                 ((this.restResource) ? this.restResource : '') + 
//                 ((this.restPath) ? this.restPath : '') + '/' +
//                 ((this.restParameters) ? ("?"+this.restParameters+'&access_token='+access_token) : '?access_token='+access_token);
//     },
//     //функция добаления фильтра
//     //fieldName - имя поля к которому применяется фильтр
//     //comparisonType - тип сравнения
//     //value - значение сравнения. При comparisonType=between и in
//     //необходимо передавать массив значений, при чем в случае between
//     //левое значение будет первым элементом массива а правое - вторым.
//     addFilter: function(fieldName, comparisonType, value)
//     {
//         if (!this.filter.filters)
//         {
//             this.filter.filters = [];
//         }
//         ;
//         filterValue = {
//             name: fieldName,
//             comparisonType: comparisonType,
//             value: value,
//             use: true
//         };
//         // this.pager.setCurrentPage(1);
//         this.filter.filters.push(filterValue);
//     },
//     //функция добавления порядка сортировки
//     //fieldName - имя поля к которому применяется фильтр
//     //orderType - тип сортировки   
//     addOrder: function(fieldName, orderType)
//     {
//         if (!this.filter.order)
//         {
//             this.filter.order = [];
//         }
//         orderValue = {
//             name: fieldName,
//             sort: orderType,
//             use: true
//         };
//         this.filter.order.push(orderValue);
//     },
//     //сбросить все фильтры
//     clearFilter: function()
//     {
//         delete this.filter.filters;
//     },
//     //сбросить все сортировки
//     clearOrder: function()
//     {
//         delete this.filter.order;
//     },
//     initializeExtended:function()
//     {
        
//     },
//     initialize: function()
//     {
//         this.pager = new Pager();
//         this.filter = {};
//         if (!this.model)
//         {
//             this.model = new Backbone.Model.extend({});
//         };
//         if(this.disablePager)
//         {
//             this.pager.disable();
//         }
//         this.initializeExtended();
//     },
//     parse: function(response)
//     {
//         this.pager.setTotalCount(response.totalCount);
//         var res = response.list;
//         var rowIndex=0;
//         var _this=this;
//         _.each(res,function(obj){
//             obj.rowNumber=(_this.pager.getCurrentPage() - 1) * _this.pager.getRowsOnPage() + rowIndex + 1;
//             rowIndex++;
//         });
//         return res;
//     },
//     fetchWithFilter: function(options)
//     {
//         this.filter.page = this.pager.getCurrentPage();
//         this.filter.count = this.pager.getRowsOnPage();
//         if (!options)
//         {
//             options = {};
//         }
//         options.method = "getByPOST";
//         return this.fetch(options);
//     },
//     //


// });

// Components.Collection = Backbone.Collection.extend({
//     //имя ресурса рест
//     restResource: null,
//     restApp:App.Resource.restApp,
//     //строка с прараметрами которые необходимо передать
//     //ex:'par_name=par_value&pr_name=pr_value'
//     restParameters: null,
//     restPath:null,
//     url: function()
//     {
//         var access_token=(App.Data.User.accessToken)?App.Data.User.accessToken:'';
//         return App.Resource.restURL +
//                 this.restApp + '/' +
//                 ((this.restResource) ? this.restResource : '') + 
//                 ((this.restPath) ? this.restPath : '') + '/' +
//                 ((this.restParameters) ? ("?"+this.restParameters+'&access_token='+access_token) : '?access_token='+access_token);
//     },
//     initialize: function()
//     {
//         this.model.idAttribute = this.idAttribute;
//     },
//     parse: function(response)
//     {
//         var res = response;
//         var rowIndex=1;
//         _.each(res,function(obj){
//             obj.rowNumber=rowIndex;
//             rowIndex++;
//         });
//         return res;
//     }

// });