BatchMaker.StepController = Ember.ObjectController.extend({
  selectedFood: null,
  foodName: null,

  getOrCreateFood: function() {
    var selectedFood = this.get('selectedFood');
    if (selectedFood) {
      return selectedFood;
    } else {
      var food = this.store.createRecord('food', {
        name: this.get('foodName')
      });
      food.save();
      return food;
    }
  },

  actions: {
    addIngredient: function() {
        var ingredient = this.store.createRecord('ingredientFood', {});
        this.get('ingredients').addObject(ingredient);
    }
  }
});
