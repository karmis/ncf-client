define(
[
	'./views/mainView',
],
function(mainView)
{
	App.Modules.core = App.module("core", function(){
		App.appHeadRegion.show(new mainView.views.head());
		App.appContentRegion.show(new mainView.views.content());
		App.appFooterRegion.show(new mainView.views.footer());
	});
	
	return App.Modules.core;
});