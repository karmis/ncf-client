define(
[
	'../views/sessionTableView',
	'../views/sessionFormView',
	'text!../templates/main.tpl',
],
function(sessionTableView, sessionFormView, mainTpl)
{

	var mainView = App.Components.Views.GridView.extend({
		template: doT.template(mainTpl),
		views: {
			sessionTable: sessionTableView,
			sessionForm: sessionFormView,
		},
		onShow: function(){
			debugger;
		}
	});

	// var view = App.Components.ItemView.extend({
	// 	template: doT.template(testTemplate),
	// 	model: new companyEntity.model(),
	// 	onRender: function(){
	// 		lg('is render');
	// 	}
	// });
	// var mainPageView = App.Components.CollectorViews.extend({
	// 	// model: new companyEntity.model(),
	// 	// id: 'mainPageView',
	// 	template: doT.template(testTemplate),
	// 	views: {

	// 	}
	// 	// initialize: function () {
	// 	//     _.bindAll(this, 'render');

	// 	//     this.model.on("change", this.render);
	// 	// },
	// 	// onRender: function(){
	// 	// 	debugger;
	// 	// 	var self= this;
	// 	// 	this.model.request().get().complete(function(){
	// 	// 		lg('plplp');
	// 	// 		debugger;
	// 	// 	});
	// 	// }
	// 	onShow: function(){
	// 		debugger;
	// 	}
	// });

	return new mainView();
});