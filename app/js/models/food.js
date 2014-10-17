BatchMaker.Food = DS.Model.extend({
  name: DS.attr('string'),
  ingredientFood: DS.belongsTo('ingredientFood')
});
