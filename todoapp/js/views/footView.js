define(['backbone', 'text!templates/footer-template.html', 'underscore'], function (Backbone, FootTemplate, _) {
    return Backbone.View.extend({

        template: _.template(FootTemplate, {}),

        initialize: function () {
            this.render();
        },

        render: function () {
            
            this.$el.html(this.template);
        }
    });
});