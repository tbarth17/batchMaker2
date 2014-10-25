BatchMaker.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  recipes: DS.hasMany('recipe', {async: true}),
});
