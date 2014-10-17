BatchMaker.Recipe = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('user'),
  isPrivate: DS.attr('boolean'),
  recipeType: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  cookTemp: DS.attr('number'),
  tempUnit: DS.attr('string'),
  recipeYield: DS.attr('number'),
  yieldValue: DS.attr('string'),
  ingredients: DS.hasMany('ingredientFood')
});
