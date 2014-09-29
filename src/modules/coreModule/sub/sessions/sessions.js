define(
[
	'../../core',
	'./views/mainView'
],
function(core, mainView)
{
	App.Modules.core.index = App.module("core.index", function(){

		App.appContentRegion.show(new mainView.views.sessionTable);

	});
	return App.Modules.core.index;
});