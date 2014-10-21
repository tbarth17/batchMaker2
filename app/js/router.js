BatchMaker.Router.map(function() {
  this.route('user', {path: '/user'});

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

BatchMaker.UserRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('recipe');
  }
});

BatchMaker.RecipesCreateRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    var ingredient = this.store.createRecord('ingredientFood', {});
    var step = this.store.createRecord('step', {});
    step.get('ingredients').addObject(ingredient);
    controller.set('steps', [step]);
    controller.set('food', model);
  },

  model: function() {
    return this.store.find('food');
  }
});

// BatchMaker.UserRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('recipe');
//   }
// });

BatchMaker.RecipesShowRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('recipe', params.recipe_id);
  }
});
