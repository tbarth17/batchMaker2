BatchMaker.SignupController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    createUser: function(){
      var credentials = this.getProperties('email', 'password');
      var self = this;
      BatchMaker.ref.createUser(credentials, function(error){
        if (! error){
          self.get('controllers.session').authenticate(credentials).then(function(authData){
            var user = self.store.createRecord('user', {
              id: authData.uid,
              email: credentials.email,
              username: self.get('username')
            });
            user.save().catch(function(error){
              console.error(error);
            });
          });
        }
      });
    }
  }
});
