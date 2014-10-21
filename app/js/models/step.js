BatchMaker.Step = DS.Model.extend({
  ingredients: DS.hasMany('ingredientFood', {embedded: true}),
  directions: DS.attr('string')
});
