define(
[
    'jquery',
    'underscore',
    'backbone',
    'marionette',
	'bbGrid'
],
function($, _, Backbone, Marionette, bbGrid)
{
	var bbGridTable = bbGrid.View.extend({
        onRowExpanded: function($el, rowid) {
            var subgridCollection = new App.Components.Entities.Collections.BaseCollection();
            subgridCollection.reset(this.collection.models);
            var defSubConfig = {
                container: $el,
                autofetch: false,
                collection: subgridCollection,
            };
            var subConfig = $.extend( true, defSubConfig , this.subconfig );
            var subgrid = bbGrid.View.extend(subConfig);
            
            var subgrid = new subgrid();
            
            this.rowExpanded(subgrid, $el, rowid);
            // subgridCollection.reset(collection.where({'carts' : App.companies.at(rowid).get('carts')}));
        },
        rowExpanded: function(subgrid, $el, rowid) {
        	// overwrites
        }
	});

	return bbGridTable;
});