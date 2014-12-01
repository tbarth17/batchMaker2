BatchMaker.SignupController = Ember.Controller.extend(Ember.Validations.Mixin, {
  needs: ['session'],
  validations: BatchMaker.User.Validations,
  flash: {},

  actions: {
  createUser: function(){
    var self = this;
    this.validate().then(function(){
      var credentials = self.getProperties('email', 'password');
      BatchMaker.ref.createUser(credentials, function(error){
        if (! error){
          self.get('controllers.session').authenticate(credentials).then(function(user){
            user.setProperties({
              email: credentials.email,
              username: self.get('username')
            });
            user.save().then(function(){
              self.transitionToRoute('user');
            })
            .catch(function(error){
              console.error(error);
            });
          });
        }
      });
    })
    // validation was not successful
    .catch(function(){
      var errors = self.get('errors');
      var messages = [];
      Object.keys(errors).forEach(function(prop){
        if (errors[prop].length) {
          messages.push(errors[prop][0]);
        }
      });
      self.set('flash.errors', messages);

    });

  }
}
});
