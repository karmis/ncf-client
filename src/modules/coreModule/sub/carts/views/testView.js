define(
[
	'text!../templates/testTemplate_2.tpl'
],
function(testTemplate_2)
{
	var testView_2 = Marionette.ItemView.extend({
		template: testTemplate_2
	});
	return testView_2;
})