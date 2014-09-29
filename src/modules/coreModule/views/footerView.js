define(
[
	'text!../templates/footer.tpl',
],
function(footerTpl)
{
	var footerView = App.Components.Views.ItemView.extend({
		template: doT.template(footerTpl),
		onRender: function(){
			lg('is render');
		}
	});

	return footerView;
});