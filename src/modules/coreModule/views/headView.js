define(
[
	'text!../templates/head.tpl',
],
function(headTpl)
{
	var headView = App.Components.Views.ItemView.extend({
		template: doT.template(headTpl),
		onShow: function(){
			
		}
	});

	return headView;
});