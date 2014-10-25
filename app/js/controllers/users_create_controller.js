BatchMaker.UsersCreateController = Ember.Controller.extend({
  needs: ['session'],
  actions: {
    createUser: function(){
      var credentials = this.get('email', 'password');
      var self = this;
      BatchMaker.ref.createUser(credentials, function(error){
        if (! error){
          self.get('controllers.session').authenticate(credentials).then(function(authData){
            var user = self.store.createRecord(user, {
              id: authData.uid,
              email: credentials.email,
              username: username,
            });
            user.save();
          });
        }
      });
    }
  }
});
