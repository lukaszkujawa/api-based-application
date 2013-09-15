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
	      
	    	require(['views/nav'], function (NavView) {
	    		var nav = Vm.create(that, 'NavView', NavView);
	    		nav.render();
	    	});
	    }
    
	});
  
	return AppView;
  
});
