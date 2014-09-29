define(['App'], function(App){

/**
 * Роутер/Контроллер
 */
 'use strict';
	/**
	 * Controllers
	 */

	App.Controller = Marionette.Controller.extend({
		core_test: function(){
			App.request("moduleStart", 'coreModule/sub/test', 'test');
		},
		core_index: function(){
			App.request("moduleStart", 'coreModule/sub/index', 'index');
		},
		core_carts: function(){
			App.request("moduleStart", 'coreModule/sub/carts', 'carts');
		},
		core_sessions: function(){
			App.request("moduleStart", 'coreModule/sub/sessions', 'sessions');
		}
		// home: function(){
		// 	App.request("moduleStart", 'homeModule');
		// },
		// recursion: function(){
		// 	App.request("moduleStart", 'recursion_1/sub/recursion_2/sub/recursion_3/sub/recursion_4', 'recursion');
		// },
	});

	/**
	 * Routers
	 */
	App.RouterClass = Marionette.AppRouter.extend({

		controller: new App.Controller(),

		appRoutes: {
			""                          		: "core_test",
			"core/desktop"                      : "core_index",
			"core/carts"                    	: "core_carts",
			"core/sessions"						: "core_sessions",
			// "recursion"							: "recursion"
		}
    });

    App.Router = new App.RouterClass();

    return App.Router;
});

