window.BatchMaker = Ember.Application.create();

BatchMaker.ref = new Firebase("https://baked.firebaseio.com/");

BatchMaker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: BatchMaker.ref
});

filepicker.setKey("AqA4hQVEeS3qtLs2vjBRJz");

Ember.Application.initializer({
  name: 'firebase-session',

  initialize: function(container, application){
    application.deferReadiness();
    var token = localStorage.getItem('batchmaker-firebase-token');
    if (token) {
      var session = container.lookup('controller:session');
      session.authWithToken(token).then(function(){
        application.advanceReadiness();
      });
    } else {application.advanceReadiness();}
    }
  });
