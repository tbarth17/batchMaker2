BatchMaker.UserController = Ember.ArrayController.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),
  recipeList: function(){
    return this.get('content').slice(0, 4);
  }.property('content.[]')
});

BatchMaker.RecipePreviewController = Ember.ObjectController.extend({
  imgStyle: function(){
    console.log(this);
    return new Ember.Handlebars.SafeString("background-image: url('"+this.get('imgUrl')+"')").toString();
  }.property('imgUrl')
});