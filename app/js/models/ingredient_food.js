BatchMaker.IngredientFood = DS.Model.extend({
  ingredientAmount: DS.attr('number'),
  measurementUnit: DS.attr('string'),
  // foodName: DS.attr('string')
  food: DS.belongsTo('food', {async: true})
});
