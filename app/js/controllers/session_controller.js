BatchMaker.SessionController = Ember.Controller.extend({
  needs: ['application'],
  currentUser: null,
  authenticate: function(credentials){
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      BatchMaker.ref.authWithPassword(credentials, function(error, authData) {
        self.store.find('user', authData.uid).then(function(user){
          self.set('currentUser', user);
          resolve(user);
        });
      });
    });
  }
});
