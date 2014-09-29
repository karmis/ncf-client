define(
[
	'App',
	'components/Entities/Model/ModelJSONP',
	'components/Entities/Model/BaseModel',
	'components/Entities/Collection/BaseCollection',
	'components/Views/View/View',
	'components/Views/ItemView/ItemView',
	'components/Views/GridView/GridView',
	'components/Views/CollectionView/CollectionView',
	'components/Tables/BBGridTable/BBGridTable',
	'components/Forms/BackboneForm/BackboneForm'
], function(
		App, 
		ModelJSONP,
		BaseModel,
		BaseCollection,
		View,
		ItemView,
		GridView,
		CollectionView,
		BBGridTable,
		BackboneForm
	)
	{
		App.Components = {
			Entities: {
				Models: {
					ModelJSONP: ModelJSONP,
					BaseModel: BaseModel
				},
				Collections: {
					BaseCollection:BaseCollection
				}
			},
			Views: {
				View: View,
				ItemView: ItemView,
				GridView: GridView,
				CollectionView: CollectionView
			},
			Tables: {
				BBGridTable: BBGridTable
			},
			Forms: {
				BackboneForm: BackboneForm
			}
		};

	return App.Components;
});