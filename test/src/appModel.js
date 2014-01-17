define(['backbone'], function (Backbone) {
    return Backbone.Model.extend({

        initialize: function () {
            this.number = null;
            this.newNumber();
        },

        newNumber: function () {
            this.number = Math.floor((Math.random() * 100) + 1);
        },

        getNumber: function () {
            return this.number;
        },

        //Anv�nds bara i testet.
        setNumber: function (input) {
            this.number = input;
        }
    });
});