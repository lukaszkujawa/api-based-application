define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'events',
  'text!templates/layout.html'
], function($, _, Backbone, Vm, Events, layoutTemplate){
  
	var AppView = Backbone.View.extend({
    
		el: '.container',
	
	    initialize: function () {
	    },
	    
	    render: function () {
	    
	    	console.log( "app::render()" );
	    	console.log( layoutTemplate );
	      
	    	var that = this;
	      
	    	$(this.el).html( layoutTemplate );
	      
	    	require(['controllers/NavController'], function (NavController) {
	    		var navController = Vm.create(that, 'NavController', NavController);
	    		navController.render();
	    	});
	    }
    
	});
  
	return AppView;
  
});
