define(
	[],
	function(){


		// var a = Backbone.DeepModel.extend({

		// });


		var cartModel = App.Components.Entities.Models.BaseModel.extend({
			restModule: 'core',
			restResource: 'clients',
		    schema: {
		        'name':       		{type: 'Text', title: 'Имя'},
		        'sname': 	  		{type: 'Text', title: 'Фамилия'},
		        'carts': { type: 'List', itemType: 'Object', title: 'Карты', itemToString: function(cart){ return cart.type + ' карта с кодом ' + cart.code; }, subSchema: {
		            // company: {type: "Number", title: 'Компания'},
		            code: {type: "Number", title: 'Код'},
		            type: { type: 'Select', options: [{label: 'Одиночная', val:'single'}, {label: 'Групповая', val: 'group'}] }
		        }}
		    },
		});

		// var model = App.Components.Entities.Models.BaseModel.extend({
		// 	restModule: 'core',
		// 	restResource: 'clients',
		//     schema: {

		//         'carts': 			{type: 'List', itemType: 'NestedModel', model: cartModel},

		//     },

		// });



		// var collection = App.Components.Entities.Collections.BaseCollection.extend({
		// 	restModule: 'core',
		// 	model: model,
		// 	restResource: 'clients'
		// });

		return {
			model: cartModel,
			// model: model,
			// cartModel: cartModel,
			// collection: collection,
		};
	}
);
