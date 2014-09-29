define(
[
	'text!../templates/main.tpl',
	'./headView',
	'./contentView',
	'./footerView'

],
function(gridTpl, headView, contentView, footerView)
{
	var mainView = App.Components.Views.GridView.extend({
		template: doT.template(gridTpl),
		views: {
			head: headView,
			content: contentView,
			footer: footerView
		},
		onShow: function(){
			debugger;
		}
	});

	return new mainView();
});