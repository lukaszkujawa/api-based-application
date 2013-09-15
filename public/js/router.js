// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      'add': 'add',
      'create': 'create',
      
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function ( options ) {
	  
    var appView = options.appView;
    var router = new AppRouter(options);
    
    router.on('route:create', function () {
        require(['controllers/CreateController'], function (CreateController) {
          console.log( "router::create" );
        	
          var createController = Vm.create(appView, 'CreateController', CreateController);
          createController.render();
        });
    });
    
    router.on('route:defaultAction', function (actions) {
      require(['controllers/IndexController'], function (IndexController) {
        console.log( "router::defaultAction" );
        
        var indexController = Vm.create(appView, 'IndexController', IndexController);
        //indexController.render();
      });
    });
    
    Backbone.history.start();
    
  };
  return {
    initialize: initialize
  };
});
