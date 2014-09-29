/**
 * Common - держит в себе функции, используемые повсеместно и
 * не являющиеся частями приложения
 */


 function lg(val){
 	console.log(val);
 }

// Парсит адресную строку
function parseQueryString(queryString){
	var params = {};
	if(queryString){
	    _.each(
	        _.map(decodeURI(queryString).split(/&/g),function(el,i){
	            var aux = el.split('='), o = {};
	            if(aux.length >= 1){
	                var val = undefined;
	                if(aux.length == 2)
	                    val = aux[1];
	                o[aux[0]] = val;
	            }
	            return o;
	        }),
	        function(o){
	            _.extend(params,o);
	        }
	    );
	}
	return params;
}

// Проверяет наличие webStoradge и творит обертку вокруг него
function initStorage(){
	if(!App.Storage){
		if(window.localStorage != undefined){
			var storage = {
				
				_storage: null,

				_defaultStorage: window.sessionStorage,
				
				hasSpace: true,
				
				set: function(key, value)
				{
					try{
						if(!this._storage){
							this._storage = window.sessionStorage;
						}
						this._storage.setItem(key, value);
						return true;
					}
					catch (QUOTA_EXCEEDED_ERR){
						this.hasSpace = false;
						debugger;
						alert('Недостаточно свободного места для сохранения данных на локальное хранилише');
						return false;
					}
				},
				
				has: function(key)
				{
					return this._storage.getItem(key) ? true : false;
				},
				
				get: function(key)
				{
					return this._storage.getItem(key);
				},
				
				remove: function(key)
				{
					this._storage.removeItem(key);
				},
				
				clear: function(){
					this._storage.clear();
					return true;
				}	

			}

			var sessionStorage = {
				_storage: window.sessionStorage,
			}

			var localStorage = {
				_storage: window.localStorage,
			}

			// TODO Завязано на приложение жестко. не страшно, но логике не соответсвует.
			// может быть когданибуть придется поправть
			App.sessionStorage = $.extend(storage, App.sessionStorage);
			App.localStorage = $.extend(storage, App.localStorage);
			return true;

		} else {
			alert('localStorage не поддерживается.');
			return false;
		}
	}
}

// function hide() {
// 	if ($('#menu').css('margin-bottom').match('-75px')) {
// 		while(1) {
// 			if ($('#menu').css('margin-bottom').match('-75px')) {
// 				$('#warp').css('margin-top','-78px');
// 				$('#menu').css('margin-bottom','75px');
// 				$('#menu').css('bottom','-75px');
// 			}
// 			function hidemenu() {lamp=0; $('#warp').click(function () {
// 				$('#warp').css('margin-top','0px');
// 				$('#menu').css('margin-bottom','-75px');
// 				$('#menu').css('bottom','75px');
// 			});

// 			}
// 			if ($('#menu').css('margin-bottom').match('-75px')) {
// 					hidemenu();
// 					break;

// 			}
// 			break;	
// 		}

// 		}
// 	else  {
// 		$('#warp').css('margin-top','0px');
// 		$('#menu').css('margin-bottom','-75px');
// 		$('#menu').css('bottom','75px');

// 	};
// }

// Расширенные логи (может быть... когда-нибудь)
// http://log4javascript.org/docs/manual.html
// http://habrahabr.ru/sandbox/27355/
// function initLog(){

// }