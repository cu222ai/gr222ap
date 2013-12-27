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

            //H�mtar str�ngen fr�n textf�ltet.
            var str = this.$el.find("#newTodo").val();

            //Ser till att str�ngen inte �r tom.
            if (str != "") {
                //L�gger till ny todo.
                this.Todos.create({ title: str, status: this.$el.find("#select").val() });
                $('#msg').attr("class", "message");
                $('#msg').html("New Todo added.");
            }
            else {
                $('#msg').attr("class", "error");
                $('#msg').html("You must specify a Todo.");
            }

            //Renderar ut p� nytt efter att man lagt till ett nytt objekt.
            this.render();

        },

        remove: function (o) {

            var buttonId = o.currentTarget.id;

            var that = this;

            //loopar igenom collection och tar bort en modell.
            this.Todos.each(function (model) {
                if (model.id == buttonId) {

                   var todo = model.attributes.title;
                   model.destroy();
                   $('#msg').attr("class", "message");
                   $('#msg').html(todo + " was removed.");
                }
            })

            this.render();
        }
    });
});