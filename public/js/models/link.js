define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  
	var linkModel = Backbone.Model.extend({
    
		defaults: {
	      url: '',
	      title: ''
	    },
	    
	    url: "link/submit",
	    
	    initialize: function(){
	    	console.log("Link model init...");
	    }

	});
  
	return linkModel;

});
