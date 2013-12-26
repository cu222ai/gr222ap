define(['backbone', 'mainview', 'todoview', 'aboutview'], function (Backbone, MainView, TodoView, AboutView) {

    return Backbone.Router.extend({

        routes: {
            "Todo": "todoRoute",
            "About": "aboutRoute",
            "*actions": "todoRoute",
            "": "todoRoute"
        },

        initialize: function () {
            new MainView({ el: $('body')});
        },

        todoRoute: function () {
            new TodoView({ el: $('#content') });
        },

        aboutRoute: function () {
            new AboutView({ el: $('#content') });
        },

    });
});