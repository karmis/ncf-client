define(
[
    'jquery',
    'underscore',
    'backbone',
],
function($, _, Backbone){
	 Backbone.View = Backbone.View.extend({
		id: "BackboneView_uid_" + $.now(),
		//  modelEvents: {
		//         'change': '_modelChanged',
		//         'remove': '_modelRemoved'
		// },
		_modelChanged: function() {
		    this.render();
		},
		_modelRemoved:function() {
			this.render();
		},
		initialize: function () {
			_.bindAll(this, 'render'); //??
		},
		submit: function(){
			lg('submit');
			debugger;
		},
		render: function(){
			var self = this;
			if(this.model){
				this.model.request().get().complete(function(data){
					self.model.set(data.responseJSON)
					self.delegateEvents();
					self.onRender();
					$(self.el).html(self.template(self.model.toJSON()));
					// $('form').on('submit', function(){self.submit()});
				});
			} else if(this.collection){
				// TODO Collection
				lg('todo collection');
				debugger;
			} else {
				$(self.el).html(self.template());
			}

			$('form').on('submit', function(){this.submit()});
		}
	});

	// return View;
});