BatchMaker.User = DS.Model.extend({
  username: DS.attr('string'),
  recipes: DS.hasMany('recipe'),
  pantry: DS.hasMany('pantry_food')
});
