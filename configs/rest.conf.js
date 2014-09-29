define(['App'], function(App){
	App.Rest = {
		// restApp:"emap",
		//restURL: 'http://whitecherry.embryonis.com/api',
		// restURL:"http://ncf.apps.brainstrap.ru/app_dev.php/api/",
		restURL: "http://api.ncf.apps.brainstrap.ru/app_dev.php/api/",
		//restURL:"http://192.168.137.101:8080/epnp-rest/v1/",
		//restURL: "http://" + document.URL.split("/")[2] +"/epnp-rest-new/v1/", // раскоментить на случай войны
		//reportsURL:"http://192.168.137.212:8080/epnp-reports",
		//reportsURL:"http://localhost:8081/epnp-reports",
		//reportsURL:"http://" + document.URL.split("/")[2] +"/epnp-reports",	
	}

	return App.Rest;
});