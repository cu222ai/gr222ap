define(['backbone', 'underscore', 'todocollection', 'text!templates/todo-template.html'], function (Backbone, _, TodoCollection, TodoTemplate) {
    return Backbone.View.extend({

        template: _.template(TodoTemplate),
        Todos: new TodoCollection(),

        events: {
            "click #button": "create",
            "click .done": "remove"
        },

        initialize: function () {

            //H�mtar allt fr�n localstorage.
            this.Todos.fetch();

            //Renderar ut vyn vid start.
            this.render();
        },

        render: function () {

            //T�mmer listDiven.
            this.$el.empty();

            //L�gger till templatet till todoDiven.
            this.$el.append(this.template({ collection: this.Todos }));
        },

        create: function () {

            this.Todos.create({ title: this.$el.find("#newTodo").val(), status: this.$el.find("#select").val() });
            console.log(this.Todos.models);

            //Renderar ut p� nytt efter att man lagt till ett nytt objekt.
            this.render();

        },

        remove: function (o) {

            var buttonId = o.currentTarget.id;

            var that = this;

            //loopar igenom collection och tar bort en modell.
            this.Todos.each(function (model) {
                if (model.id == buttonId) {
                    model.destroy();
                }
            })

            this.render();
        }
    });
});