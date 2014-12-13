BatchMaker.PublicRecipePreviewController = Ember.ObjectController.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),

  imgStyle: function (){
    return new Ember.Handlebars.SafeString("background-image: url('"+this.get('imgUrl')+"')").toString();
  }.property('imgUrl')

});
