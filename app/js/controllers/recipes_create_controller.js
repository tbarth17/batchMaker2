BatchMaker.RecipesCreateController = Ember.Controller.extend({
  needs: ['application'],

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

  actions: {
    createRecipe: function() {
      var user = this.get('controllers.application.currentUser');
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
      var food = this.store.createRecord('food', {
        name: this.get('ingredientName')
      });
      var ingredientFood = this.store.createRecord('ingredientFood', {
        quantity: this.get('ingredientAmount'),
        measurementUnit: this.get('selectedMeasurementUnit')
      });
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
    }
  }
});
