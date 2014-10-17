BatchMaker.RecipesShowController = Ember.Controller.extend({
  needs: ['application'],
  currentRecipe: Ember.computed.alias('model')
});
