define(
[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'backbone-forms'

],
function($, _, Backbone, Marionette, Form){
	debugger;
	var BackboneForm = Backbone.Form.extend({
		id: "BackboneForm_uid_" + $.now(),
		// idPrefix: '',
		push: function(options){
			debugger;
			if(this.commit({ validate: true }) === undefined){
				// push
				if(this.model.isNew()) {
					var options = {type: 'create'};
				} else {
					var options = {type: 'update'};
				}
				this._pushModel(options);
			}

			event.preventDefault();
		},
		remove: function(options){
			var options = {type: 'create'};
			this._pushModel(options);
		},
		pushed: function(data, options) {
			// overwrites
		},
		failed: function(data, options) {
			// overwrites
		},
		// rendered: function(){
		// 	debugger;
		// },
		// TODO парсер ответа с сервера для ошибки валидации
		// TODO вывод содержимого ошибки
		// _showErrors: function(){

		// },
		_pushModel: function(options) {
			debugger
			var self = this;
			if(options.type == 'create') {
				var def = this.model.request().post();
			} else if(options.type == 'update') {
				var def = this.model.request().put();
			} else if(options.type == 'delete') {
				var def = this.model.request().delete();
			}

			debugger;
			// TODO Научить определять ошибку по содержимому ответа
			def.success(function(data) {
				self.pushed(data, options);
			}).error(function(data) {
				self.failed(data, options);
			});
		},
  // render: function() {
  //   var self = this,
  //       fields = this.fields;

  //   //Render form
  //   var $form = $($.trim(this.template(_.result(this, 'templateData'))));

  //   //Render standalone editors
  //   $form.find('[data-editors]').add($form).each(function(i, el) {
  //     var $container = $(el),
  //         selection = $container.attr('data-editors');

  //     if (_.isUndefined(selection)) return;

  //     //Work out which fields to include
  //     var keys = (selection == '*')
  //       ? self.selectedFields || _.keys(fields)
  //       : selection.split(',');

  //     //Add them
  //     _.each(keys, function(key) {
  //       var field = fields[key];
  //       $container.append(field.editor.render().el);
  //     });
  //   });

  //   //Render standalone fields
  //   $form.find('[data-fields]').add($form).each(function(i, el) {
  //     var $container = $(el),
  //         selection = $container.attr('data-fields');

  //     if (_.isUndefined(selection)) return;

  //     //Work out which fields to include
  //     var keys = (selection == '*')
  //       ? self.selectedFields || _.keys(fields)
  //       : selection.split(',');

  //     //Add them
  //     debugger;
  //     _.each(keys, function(key) {
  //     	debugger;
  //       var field = fields[key];
  //       $container.append(field.render().el);
  //     });

  //     $('form').on('submit', function(){self.submit()});
  //   });

  //   //Render fieldsets
  //   $form.find('[data-fieldsets]').add($form).each(function(i, el) {
  //     var $container = $(el),
  //         selection = $container.attr('data-fieldsets');

  //     if (_.isUndefined(selection)) return;

  //     _.each(self.fieldsets, function(fieldset) {
  //       $container.append(fieldset.render().el);
  //     });
  //   });

  //   //Set the main element
  //   this.setElement($form);
    
  //   //Set class
  //   $form.addClass(this.className);
  //   this.rendered();
  //   return this;
  // },
	});


	return BackboneForm;
});