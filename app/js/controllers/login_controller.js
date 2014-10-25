BatchMaker.LoginController = Ember.Controller.extend({
  needs: ['session'],
  username: '',

  actions: {
    logIn: function() {
      var credentials = this.getProperties('email', 'password');
      this.get('controllers.session').authenticate(credentials);
      this.transitionToRoute('user');
    }
  }
});
