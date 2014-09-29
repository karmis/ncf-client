define(
[
	'text!../templates/tpl.tpl'
],
function(tpl)
{
	var view = Marionette.ItemView.extend({
		template: doT.template(tpl)
	});

	return new view;
}