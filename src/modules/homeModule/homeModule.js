define(['./views/mainView'],
function(views)
{
	App.Modules.homeModule = App.module("homeModule", function(){

		App.appContentRegion.show(new views);

	});
	return App.Modules.homeModule;
});