define(
[
	'text!../templates/content.tpl',
],
function(contentTpl)
{
	var contentView = App.Components.Views.ItemView.extend({
		template: doT.template(contentTpl),
		onRender: function(){
			lg('is render');
		}
	});

	return contentView;
});