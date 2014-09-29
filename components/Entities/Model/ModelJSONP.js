define(
[
    'jquery',
    'underscore',
    'backbone'
],
function($, _, Backbone){
	var ModelJSONP=Backbone.Model.extend({
		sync: function(method, model, options) {
			
			// Default JSON-request options.
			var params = _.extend({
			  type:         'GET',
			  dataType:     'jsonp',
			  url:			model.url(),
			  jsonp: 		"books",   // the api requires the jsonp callback name to be this exact name
			  processData:  false
			}, options);
	 
			// Make the request.
			return $.ajax(params);
		},
	});

	return ModelJSONP;
});