BatchMaker.User = DS.Model.extend({
  name: DS.attr('string'),
  recipes: DS.hasMany('recipe'),
  pantry: DS.hasMany('pantry-food')
});
