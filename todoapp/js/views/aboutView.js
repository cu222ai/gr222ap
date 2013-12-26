define(['backbone', 'text!templates/about-template.html', 'underscore'], function (Backbone, AboutTemplate, _) {
    return Backbone.View.extend({

        template: _.template(AboutTemplate, {}),

        initialize: function () {
            this.render();
        },

        render: function () {

            this.$el.empty();
            this.$el.html(this.template);
        }
    });
});