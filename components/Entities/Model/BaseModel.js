define(
[
    'jquery',
    'underscore',
    'backbone',
    'backboneDeepModel'
],
function($, _, Backbone){

    var BaseModel=Backbone.DeepModel.extend({
        restResource: null,
        restParameters: {},
        dataType: 'json',
        responseName:'',
        contentType: "application/json; charset=utf-8",
        clear: function() {
            this.destroy();
            this.view.remove();
        },
        request: function(){
            var self = this;
            if(_.isFunction(this.model)){
                this.model = new this.model();
            }
            return {
                post: function(options){
                    debugger;
                    return self.sync("POST", options)
                },
                get: function(options){
                    return self.sync("GET", options)
                },
                put: function(options){
                    return self.sync("PUT", options)
                },
                delete: function(options){
                    return self.sync("DELETE", options)
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
        sync: function(method, options) {
            if(!options){
                var options = {};
            }
            var data = $.extend( true, options , this.toJSON() );
            var self = this;
            var params = _.extend({
                contentType: self.contentType,
                data: JSON.stringify(data),
                dataType: self.dataType,
                url: self.url(),
                processData: false,
                type: method,
            });

            return $.ajax(params);
        },

    });

    return BaseModel;
});

