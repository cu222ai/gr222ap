define(['backbone', 'text!templates/about-template.html', 'underscore'], function (Backbone, AboutTemplate, _) {
    return Backbone.View.extend({

        template: _.template(AboutTemplate, {}),

        initialize: function () {

        },

        render: function () {

            $('#msg').empty();
            this.$el.empty();
            this.$el.html(this.template);
        }
    });
});