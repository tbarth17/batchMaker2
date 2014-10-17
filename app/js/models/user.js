BatchMaker.User = DS.Model.extend({
  username: DS.attr('string'),
  recipes: DS.hasMany('recipe', {async: true}),
  // pantry: DS.hasMany('pantryFood')
});
