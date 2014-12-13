BatchMaker.Recipe = DS.Model.extend({
  imgUrl: DS.attr('string'),
  title: DS.attr('string'),
  author: DS.belongsTo('user', {async: true}),
  isPrivate: DS.attr('boolean'),
  recipeType: DS.attr('string'),
  prepTime: DS.attr('number'),
  cookTime: DS.attr('number'),
  cookTemp: DS.attr('number'),
  tempUnit: DS.attr('string'),
  recipeYield: DS.attr('number'),
  yieldValue: DS.attr('string'),
  steps: DS.hasMany('step', {embedded: true}),
});
