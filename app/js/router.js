BatchMaker.Router.map(function() {
  this.route('user', {path: ':user_name'});

  this.resource('recipes', function() {
    this.route('create');
    this.route('show', {path: ':recipe_id'});
    this.route('edit', {path: ':recipe_id/edit'});
  });

  
});
