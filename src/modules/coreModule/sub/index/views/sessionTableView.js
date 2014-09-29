define(
[
	'../entities/sessionEntity',
	'../views/sessionTableView',
	// 'text!../templates/sessionsTable.tpl',
],
function(sessionEntity, sessionTableTpl)
{
	debugger;
	var sessionTableView = App.Components.Tables.BBGridTable.extend({
		config: {
			collection: sessionEntity.collection.extend(),
			colModel: [
				// { title: 'ID', name: 'id', sorttype: 'number', width: "21px" },
				{ title: 'Имя', name: 'name', filter: true, filterType: 'input' },
				{ title: 'Фамилия', name: 'sname', filter: true, filterType: 'input' }
			],
			subgrid: true,
			subgridAccordion: true,
			multiselect: true,
			subconfig: {
				multiselect: true,
            	rows: 5,
                colModel: [ 
					{ title: 'Full Name', index: true,  name: 'code', filter: true, filterType: 'input'},
					{ title: 'Age', name: 'sname',  index: true },
					{ title: 'Address',  index: true, name: 'address' },
					{ title: 'Email',  index: true, name: 'email' }
                ],
			},
			rowExpanded: function(subgrid, $el, rowid) {
				subgrid.collection.reset(subgrid.collection.at(rowid-1).get('carts'));
			}
		},
		onShow: function(){
			// debugger;
		}
	});
	// 
	// 
	// 
	// 	template: doT.template(gridTpl),
	// 	views: {
	// 		sessionTable: sessionTableView,
	// 	},

	// });

	// App.Components.BBGridTable
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

	return sessionTableView;
});