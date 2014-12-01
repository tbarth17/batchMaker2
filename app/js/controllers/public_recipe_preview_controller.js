BatchMaker.PublicRecipePreviewController = Ember.ObjectController.extend({
  needs: ['application'],
  user: Ember.computed.alias('controllers.application.currentUser'),

  private: function () {
    if (isPrivate === true) {
      return(true);
    }
  }.property('isPrivate'),

  imgStyle: function (){
    return new Ember.Handlebars.SafeString("background-image: url('"+this.get('imgUrl')+"')").toString();
  }.property('imgUrl')

});
