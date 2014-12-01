BatchMaker.RecipesCreateController = Ember.Controller.extend({
  needs: ['session', 'application'],

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
    addPhoto: function() {
      var self = this;
      filepicker.pickAndStore({mimetype:"image/*"},{},
      function(InkBlobs){
        var url = InkBlobs[0].url;
        self.set('url', url);
      });
    },

    addStep: function() {
      var ingredient = this.store.createRecord('ingredientFood', {});
      var step = this.store.createRecord('step', {});
      step.get('ingredients').addObject(ingredient);
      this.get('steps').addObject(step);
    },

    createRecipe: function() {
      var user = this.get('controllers.session.currentUser');
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
      var recipe = this.store.createRecord('recipe', {
        imgUrl: this.get('url'),
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

      var serializer = this.store.serializerFor('recipe');
      var data = serializer.serialize(recipe);

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
      this.transitionToRoute('user');
    }
  }
});
