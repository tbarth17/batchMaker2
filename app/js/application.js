window.BatchMaker = Ember.Application.create();

BatchMaker.ref = new Firebase("https://baked.firebaseio.com/");

BatchMaker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: BatchMaker.ref
});

filepicker.setKey("AqA4hQVEeS3qtLs2vjBRJz");
