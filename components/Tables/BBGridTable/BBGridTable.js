define(
[
	'doT',
	'../../Views/GridView/GridView',
	'./views/bbGridTableView',
	'text!./templates/bbGridTable.tpl',
],
function(doT, GridView, bbGridTableView, bbGridTableTpl)
{
	// debugger;
	var self = this;
	var BBGridTable = GridView.extend({

		id: "BBGridTable_uid_" + $.now(),
		template: doT.template(bbGridTableTpl),
		config: {},
		views: {
			table: bbGridTableView
		},
		beforeInitialize: function() {
			var defConfig = $.extend( true, this._getDefaultConfig() , this.views.table.prototype);
			this.views.table.prototype = $.extend( true, defConfig , this.config );
		},
		beforeRender: function() {
			this.views.table.prototype.collection = new this.config.collection();
		},
		_getDefaultConfig: function() {
			return {
				autofetch: true,
				loadDynamic: false,
				rowList: [5, 25, 50, 100],
				rows: 20,
				container: this.$el,
				collection: undefined,
				subconfig: {
                	rows: 10,
	                colModel: [],

				}
			}
		}
	});

	return BBGridTable;
});