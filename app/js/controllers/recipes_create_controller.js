BatchMaker.RecipesCreateController = Ember.Controller.extend({
  needs: ['application'],

  measureUnit: [
    {label: 'Cups', value: 'cups'},
    {label: 'Tbsp.', value: 'tbsp'},
    {label: 'Tsp', value: 'tsp'},
    {label: 'Fl oz.', value: 'floz'},
    {label: 'Pints', value: 'pints'},
    {label: 'Quarts', value: 'qts'},
    {label: 'Pounds', value: 'lbs'},
    {label: 'Ounces', value: 'oz'},
    {label: 'Grams', value: 'g'}
  ],


  recipeType: [
    {label: 'Breakfast', value: 'Breakfast'},
    {label: 'Lunch', value: 'Lunch'},
    {label: 'Dinner', value: 'Dinner'},
    {label: 'Dessert', value: 'Dessert'}
  ],

  tempUnit: [
    {label: 'ºF', value: 'ºF'},
    {label: 'ºC', value: 'ºC'}
  ],

  actions: {
    addStep: function() {
      var ingredient = this.store.createRecord('ingredientFood', {});
      var step = this.store.createRecord('step', {});
      step.get('ingredients').addObject(ingredient);
      this.get('steps').addObject(step);
    },

    createRecipe: function() {
      console.log(this.get('steps'));
      var user = this.get('controllers.application.currentUser');
      var self = this;
      this.get('steps').forEach(function(step){
        step.get('ingredients').forEach(function(ingredient){
          if(ingredient.get('foodName') && ! ingredient.get('selectedFood')) {
            var name = ingredient.get('foodName');
            var food = self.store.createRecord('food', {name: name});
            ingredient.set('food', food);
            food.save();
          } else {
            ingredient.set('food', ingredient.get('selectedFood'));
          }
        });
      });
      // var ingredientFood = this.store.createRecord('ingredientFood', {
      //   quantity: this.get('ingredientAmount'),
      //   measurementUnit: this.get('selectedMeasurementUnit')
      // });
      var recipe = this.store.createRecord('recipe', {
        title: this.get('title'),
        author: user,
        isPrivate: this.get('isPrivate'),
        recipeType: this.get('selectedType'),
        prepTime: this.get('prepTime'),
        cookTime: this.get('cookTime'),
        cookTemp: this.get('temperature'),
        tempUnit: this.get('selectedTempUnit'),
        recipeYield: this.get('recipeYield'),
        yieldValue: this.get('yieldValue')
      });
      // food.save();
      recipe.get('steps').addObjects(this.get('steps'));
      recipe.save();
      user.get('recipes').addObject(recipe);
      user.save();
      this.set('title', '');
      this.set('selectedType', '');
      this.set('isPrivate', false);
      this.set('prepTime', '');
      this.set('cookTime', '');
      this.set('temperature', '');
      this.set('recipeYield', '');
      this.set('yieldValue', '');
      this.set('ingredientName', '');
      this.set('selectedMeasurementUnit', '');
      this.set('ingredientAmount', '');

    }
  }
});
