window.BatchMaker = Ember.Application.create();

BatchMaker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://baked.firebaseio.com/")
});

filepicker.setKey("AqA4hQVEeS3qtLs2vjBRJz");
