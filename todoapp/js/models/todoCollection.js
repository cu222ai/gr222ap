define(['backbone', 'localstorage', 'todo'], function (Backbone, LocalStorage, Todo) {

    return Backbone.Collection.extend({

        localStorage: new LocalStorage("todos"),

        model: Todo

    });
});