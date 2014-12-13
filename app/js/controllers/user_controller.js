BatchMaker.UserController = Ember.ArrayController.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),


  publicRecipeList: function(){
  var recipes = this.get('content');
  return recipes.filterBy('isPrivate', false).slice(-5);
  }.property('content.[]'),

  privateRecipeList: function(){
    var recipes = this.get('content');
    return recipes.filterBy('isPrivate', true).slice(-5);
  }.property('content.[]'),

  recipeList: function(){
    return this.get('content').slice(-4);
  }.property('content.[]')
});

BatchMaker.RecipePreviewController = Ember.ObjectController.extend({
  imgStyle: function(){
    return new Ember.Handlebars.SafeString("background-image: url('"+this.get('imgUrl')+"')").toString();
  }.property('imgUrl')
});
