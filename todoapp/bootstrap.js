require.config({
    paths: {
        //Bibliotek
        'jquery': 'js/lib/jquery',
        'backbone': 'js/lib/backbone',
        'underscore': 'js/lib/underscore',
        'text' : 'js/lib/text',
        'localstorage': 'js/lib/backboneLocalStorage',

        //Router
        "router": 'js/router',

        //Vyer
        'mainview': 'js/views/mainView',
        'todoview': 'js/views/todoView',
        'navview': 'js/views/navView',
        'footview': 'js/views/footView',
        'headerview': 'js/views/headView',
        'aboutview': 'js/views/aboutView',

        //Modeller
        'todo': 'js/models/todo',

        //Collections
        'todocollection': 'js/models/todoCollection',
        
        //Template sökväg
        'templates:' : 'templates'
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "localstorage": {
            deps: ["backbone"]
        }
    }
});

require(['js/main'], function(Main) { Main.start(); });
