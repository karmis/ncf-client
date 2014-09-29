define(
[
	'../../recursion',
	'./views/view',
],
function(recurion, view)
{
	App.Modules.recursion_4 = App.module("recursion.recursion.recursion.recursion", function(){
		debugger;
		this.views.anyView = view;
		App.appContentRegion.show(view);

	});
	return App.Modules.recursion_4;
});