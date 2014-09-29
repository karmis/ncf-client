define(
[
	'../../core',
	'./views/mainView'
],
function(core, views)
{
	App.Modules.core.index = App.module("core.index", function(){

		App.appContentRegion.show(new views);

	});
	return App.Modules.core.index;
});