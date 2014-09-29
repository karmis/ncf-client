define(
[
    'jquery',
    'underscore',
    'backbone',
    'marionette'
],
function($, _, Backbone, Marionette){
	var CollectionView = Backbone.Marionette.CollectionView.extend();
	
	return CollectionView;
});