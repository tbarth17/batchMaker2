BatchMaker.Router.map(function() {
  this.route('user', {path: ':user_name'});

  this.resource('recipes', function() {
    this.route('create');
    this.route('show', {path: ':recipe_id'});
    this.route('edit', {path: ':recipe_id/edit'});
  });

  this.route('login');
  this.route('logout');
  this.route('signup');
  this.route('settings');
  this.route('pantry');
});

BatchMaker.UserRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});
//
// BatchMaker.RecipesRoute = Ember.Route.extend({
//
// });
