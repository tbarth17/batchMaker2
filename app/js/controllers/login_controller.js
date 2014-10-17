BatchMaker.LoginController = Ember.Controller.extend({
  needs: ['application'],
  username: '',

  actions: {
    logIn: function() {
      var user = this.get('controllers.application.currentUser');
      this.transitionToRoute('user');
      console.log(user.get('username'));
    }
  }
});
