Template.team.events({
  'click a.remove': function(e, tpl) {
    e.preventDefault();
    Teams.remove(this._id);
  }
});
