define(
	[],
	function(){
		var model = App.Components.Entities.Models.BaseModel.extend({
			restModule: 'core',
			restResource: 'clients'
		});

		var collection = App.Components.Entities.Collections.BaseCollection.extend({
			restModule: 'core',
			model: model,
			restResource: 'clients'
		});
		
		return {
			model: model,
			collection: collection,
		};
	}
);
