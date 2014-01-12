define(['backbone', 'mainview', 'todoview', 'aboutview'], function (Backbone, MainView, TodoView, AboutView) {

    return Backbone.Router.extend({

        routes: {
            "Todo": "todoRoute",
            "About": "aboutRoute",
            "*actions": "todoRoute",
            "": "todoRoute"
        },

        initialize: function () {
            this.MainView = new MainView({ el: $('#container')});
            this.AboutView = new AboutView({ el: $('#content') });
            this.TodoView = new TodoView({ el: $('#content') });
        },

        todoRoute: function () {
            this.TodoView.render();
        },

        aboutRoute: function () {
            this.AboutView.render();
        },

    });
});