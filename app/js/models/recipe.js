BatchMaker.Recipe = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.belongsTo('user'),
  ingredients: DS.hasMany('ingredient_food')
});
