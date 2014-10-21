BatchMaker.RecipesShowController = Ember.ObjectController.extend({
  needs: ['application'],
  currentRecipe: Ember.computed.alias('model'),
  imgStyle: function(){
    console.log(this);
    return new Ember.Handlebars.SafeString("background-image: url('"+this.get('imgUrl')+"')").toString();
  }.property('imgUrl')
});
