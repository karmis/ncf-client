define(
[
	'../entities/sessionEntity',
	'text!../templates/sessionForm.tpl',
],
function(sessionForm, sessionFormTpl)
{
	var form = App.Components.Forms.BackboneForm.extend({
		
	    events: {
	    	'click #do': 'doAction'
	    },
	    onRender: function(){
	    	lg('onRender');
	    	debugger;
	    },
	    doAction: function(){
	    	debugger
	    	this.push();
	    	event.preventDefault();
	    	return false;
	    },
	});
	form = new form({model: new sessionForm.model(), template: doT.template(sessionFormTpl),});
	// var form = new App.Components.Forms.BackboneForm({
	//     template: doT.template(sessionFormTpl),
	//     model: new sessionForm.model(),

	//     events: {
	//     	'click #do': 'doAction'
	//     },
	//     onRender: function(){
	//     	lg('onRender');
	//     	debugger;
	//     },
	//     doAction: function(){
	//     	debugger
	//     	this.push();
	//     	event.preventDefault();
	//     	return false;
	//     },

	//     pushed: function(data){
	//     	debugger;
	//     },
	//     blur: function(){
	//     	debugger;
	//     },
	//     change: function(){
	//     	debugger;
	//     }
	// });


	// var form = new Backbone.Form({
	// 	template: doT.template(sessionFormTpl),
	//     model: new sessionForm.model(),
	//     // fields: ['title', 'author.id', 'author.name.last']
	// });

	// debugger;
	return form;
});