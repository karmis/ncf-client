define(
[
	'../forms/sessionForm',
	'text!../templates/sessionForm.tpl',
],
function(sessionForm, sessionFormTpl)
{
	debugger;
	var view = App.Components.Views.ItemView.extend({
		template: doT.template(sessionForm.testForm.el),
		onShow: function(){
			debugger;
		}
	});

	return view;
});