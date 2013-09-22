define([
  'jquery',
  'lodash',
  'backbone',
  'models/links',
  'text!templates/index/index.html'
], function( $, _, Backbone, LinksModel, indexTemplate ){
	
  var IndexView = Backbone.View.extend({
    
	el: '.content',
    
    model: new LinksModel(),
	
    initialize: function() {
    	console.log( "controllers/IndexView::initialize()" );
    	
    	var context = this;
    	
    	this.model.fetch({
	        success: function () {
	        	context.render();
	        }
	    });
    	
    },
    
    render: function () {
    	console.log( "controllers/IndexController::render()" );
    	console.log( indexTemplate );
    	console.log( this.model.toJSON() );
    	
    	this.$el.html ( _.template( indexTemplate, this.model.toJSON() ) );
    }
    
  });
  
  return IndexView;
  
});
