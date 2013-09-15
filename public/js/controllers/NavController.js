define([
  'jquery',
  'backbone',
  'text!templates/nav.html'
], function($, Backbone, navTemplate){
	
  var NavController = Backbone.View.extend({
    
	el: '#navigation',
    
    
    initialize: function() {
    	console.log( "controllers/NavController::initialize()" );
    },
    
    render: function () {
    	console.log( "controllers/NavController::render()" );
    	console.log( navTemplate );
    	
    	this.$el.html ( navTemplate );
    	
    	$('a[href="' + window.location.hash + '"]').addClass('active');
    },
    
    events: {
    	'click a': 'highlightMenuItem'
    },

    highlightMenuItem: function (ev) {
    	$('.active').removeClass('active');
    	$(ev.currentTarget).addClass('active');
    }
    
  });
  
  return NavController;
  
});
