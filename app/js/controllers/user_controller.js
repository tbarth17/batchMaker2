BatchMaker.UserController = Ember.Controller.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser')
});
