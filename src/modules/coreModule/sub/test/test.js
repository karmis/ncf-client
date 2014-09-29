define(
[
	'../../core',
	'./views/mainView'
],
function(core, mainView)
{
	App.Modules.core.index = App.module("core.test", function(){
		debugger;
		App.appContentRegion.show(mainView.views.sessionForm);

	});
	return App.Modules.core.index;
});