define(['backbone', 'underscore', 'todocollection', 'text!templates/todo-template.html'], function (Backbone, _, TodoCollection, TodoTemplate) {
    return Backbone.View.extend({

        template: _.template(TodoTemplate),
        Todos: new TodoCollection(),

        events: {
            "click #button": "create",
            "click .done": "remove",
            "click .edit": "renderEdit",
            "click .confirmEdit": "edit"
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
                //Fixa s� man inte kan skriva > <
                this.Todos.create({ title: str, status: this.$el.find("#select").val() });
                this.messages(3);
            }
            else {
                this.messages(1);
            }

            //Renderar ut p� nytt efter att man lagt till ett nytt objekt.
            this.render();

        },

        renderEdit: function (o) {

            var addedToButtonId = "edit";

            var that = this;

            //loopar igenom collection och tar bort en modell.
            this.Todos.each(function (model) {
                if (model.id + addedToButtonId == o.target.id) {
                    var parentElement = o.target.parentElement;
                    $(parentElement).empty();
                    //Har in hunnit g�ra ett template f�r detta.
                    $(parentElement).append("<input type='text' value='" + model.attributes.title + "'id='" + model.id + "'/>");
                    $(parentElement).append("<input type='button' class='confirmEdit' value='Confirm Edit' id=" + model.id + " />");
                }
            })
        },

        //Funktion som s�tter det nya v�rdet till en todo vid edit.
        edit: function (o) {
            this.Todos.get({ id: o.target.id }).set({ title: $(o.target).parent().find("input[type=text]").val() });
            this.Todos.get({ id: o.target.id }).save();
            this.render();
            this.messages(4);
        },

        remove: function (o) {

            var that = this;

            //loopar igenom collection och tar bort en modell.
            this.Todos.each(function (model) {
                if (model.id == o.target.id) {

                    var title = model.attributes.title;
                    model.destroy();
                    that.messages(2, title);
                }
            })

            this.render();
        },

        //Metod som skriver ut meddelanden.
        messages: function (index, data) {

            switch (index) {
                case 1:
                    $('#msg').attr("class", "error");
                    $('#msg').html("You must specify a Todo.");
                    break;
                case 2:
                    $('#msg').attr("class", "message");
                    $('#msg').html(data + " was removed.");
                    break;
                case 3:
                    $('#msg').attr("class", "message");
                    $('#msg').html("New Todo added.");
                    break;
                case 4:
                    $('#msg').attr("class", "message");
                    $('#msg').html("Todo was edited.");
                    break;
                default:
                    break;

            }
        }
    });
});