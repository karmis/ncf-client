define(['App'], function(App){
	/*Запускает алгоритм старта модуля*/
	App.reqres.setHandler('moduleStart', function(src, moduleName) {
		if(!src && !moduleName){
			alert('Не указан путь до модуля');
			debugger;
		}

		if(!moduleName){
			var moduleName = src;
		}
		requirejs([App.Configs.Settings.default.moduleDir + '/' + src + '/' + moduleName], function (module) {
			// debugger;
			//var module = App.request("moduleSetConfigs", module);
		    

		    module.start();
		});
	});

	/* Парсит адресную строку */
	//App.reqres.setHandler('moduleParseQueryString', function(src, {queryString}) {


	/* Применяет настройки конфигов к модулям */
	App.reqres.setHandler('moduleSetConfigs', function(module){
		var mc = App.Configs.Module;
		debugger;
		_.each(mc, function(val, key){
			debugger;
			if(typeof(module[key]) == "undefined")
			{
				debugger
				module[key] = val;
			}
		});

		return module;
	});
});