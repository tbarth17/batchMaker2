BatchMaker.Pantry_Food = DS.Model.extend({
  quantity: DS.attr('number'),
  food: DS.belongsTo('food')
});
