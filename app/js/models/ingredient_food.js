BatchMaker.IngredientFood = DS.Model.extend({
  quantity: DS.attr('number'),
  measurementUnit: DS.attr('string'),
  foods: DS.hasMany('food'),
  recipe: DS.belongsTo('recipe')
});
