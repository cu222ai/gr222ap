require.config({
    paths: {
        'jquery': '../lib/jquery',
        'backbone': '../lib/backbone',
        'underscore': '../lib/underscore',
        'app': 'app',
        'text': '../lib/text',
        
        //Models
        'appModel': 'appModel',
        
        //Views
        'appView': 'appView',

        'templates': 'templates'
    },
    shim: {
       "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require(['app'], function(App){

});