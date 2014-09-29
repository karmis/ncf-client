define(['App'], function(App){
	App.Regions = {
		appHeadRegion:                  '#appHeadRegion', 
		appContentRegion:               '#appContentRegion',
		appFooterRegion:                '#appFooterRegion',	
	}

	App.addRegions(App.Regions);
	
	return App.Regions;
});