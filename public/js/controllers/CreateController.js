define([
  'jquery',
  'backbone',
  'text!templates/create/index.html'
], function($, Backbone, indexTemplate){
	
  var CreateController = Backbone.View.extend({
    
	el: '.content',
    
    
    initialize: function() {
    	console.log( "controllers/CreateController::initialize()" );
    },
    
    render: function () {
    	console.log( "controllers/CreateController::render()" );
    	console.log( indexTemplate );
    	
    	this.$el.html ( indexTemplate );
    }
    
  });
  
  return CreateController;
  
});
