define([
  'lodash',
  'backbone'
], function(_, Backbone) {
  
	var linksModel = Backbone.Model.extend({
    
		defaults: {
	      links: []
	    },
	    
	    url: "link/latest",
	    
	    initialize: function(){
	    	console.log("Links model init...");
	    }

	});
  
	return linksModel;

});
