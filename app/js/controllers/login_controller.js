BatchMaker.LoginController = Ember.Controller.extend({
  needs: ['session'],
  username: '',

  actions: {
    logIn: function() {
      var self = this;
      var credentials = this.getProperties('email', 'password');
      this.get('controllers.session').authenticate(credentials).then(function(user){
        self.transitionToRoute('user');
      })
      .catch(function(error) {
        alert(error);
      });
    }
  }
});
