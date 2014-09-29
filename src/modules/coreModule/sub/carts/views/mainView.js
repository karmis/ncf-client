define(
[
	// './testView',
	'text!../templates/testTemplate.tpl',
],
function(testTemplate)
{
	var model = App.Components.Model.extend({
		defaults: {
			name: 'big',
			value: 'beer'
		}
	});

	var mainPageView = Marionette.ItemView.extend({
		model: new model,
		id: 'mainPageView',
		template: doT.template(testTemplate),
	});

	return mainPageView
});