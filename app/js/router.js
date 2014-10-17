BatchMaker.Router.map(function() {
  this.route('user', {path: '/user'});

  this.resource('recipes', function() {
    this.route('create');
    this.route('show', {path: '/show'});
    this.route('edit', {path: ':recipe_id/edit'});
  });

  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('settings');
  this.route('pantry');
});

BatchMaker.ApplicationRoute = Ember.Route.extend({
  // beforeModel: function() {
  //   var user = this.controllerFor('application').get('currentUser');
  //     if (! user) {
  //     this.transitionTo('login');
  //   }
  // },
  model: function(){
    return this.store.find('user', 'user_id_1');
  }

});

// BatchMaker.UserRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('recipe');
//   }
// });

BatchMaker.RecipesShowRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe', '-JZR8L8UgLkRfYvxx35-');
  }
});
