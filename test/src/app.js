define(['appView', 'appModel'], function (AppView, AppModel) {

    this.appModel = new AppModel();
    this.appView = new AppView({ el: '#content', model: appModel });;
});