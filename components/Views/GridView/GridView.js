define(
[
    'jquery',
    'underscore',
    'backbone',
    'marionette'
],
function($, _, Backbone, Marionette){
    var GridView = Backbone.Marionette.Layout.extend({
        id: "GridView_uid_" + $.now(),
        viewTypes: [],
        templateHelpers: function() {
            return this.templateHelperViews;
        },
        initialize: function() {
            this.beforeInitialize();
            if (this.model){
                this.model.view = this;
            };
            this.templateHelperViews = {
                views: {}
            };
            if (this.model){
                _.bindAll(this, "render");
                this.model.bind('change', this.render);
            };
            //создаем контейнеры для регионов
            //добавляем сами регионы к лэйауту
            var _this = this;
            _.each(this.views, function(comp, name) {
                _this.viewTypes[name] = comp;
                var regionId = (_this.id != '') ? _this.id + "-" + name : name;
                var regionDiv = "<div id='" + regionId + "'></div>";
                _this.templateHelperViews.views[name] = regionDiv;
                _this.addRegion(name, "#" + regionId);
            });
            this.afterInitialize();
        },
        onRender: function() {
            this.beforeRender();
            var _this = this;
            //засовываем все вьюхи в их регионы
            _.each(this.regionManager._regions, function(region, name) {
                if (_this.viewTypes[name])
                {
                    if(_.isFunction(_this.viewTypes[name]))
                    {
                        _this.views[name] = new _this.viewTypes[name]();
                    }
                    
                    _this.views[name].parentView = _this;
                }
                ;

                if(_this.views[name].delegateEvents){
                    _this.views[name].delegateEvents();
                }
                region.show(_this.views[name]);
            });
            this.afterRender();
        },
        onBeforeClose: function() {
            _.each(this.regionManager._regions, function(region, name) {
                region.close();
            });
            this.beforeClose();
        },
        beforeClose: function() {
        },
        afterRender: function() {
        },
        beforeRender: function() {
        },
        onShow: function() {
        },
        beforeInitialize: function() {
        },
        afterInitialize: function() {
        },
        
    });

    return GridView;
});


