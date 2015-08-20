Meteor.publish('articles', function(selector) {
  return Articles.find(selector);
});

Meteor.publish('singleOldArticle', function(slug) {
  return Articles.find({slug: slug});
});

Meteor.publish('5articles', function(selector) {
  return Articles.find(selector,{sort: {created_at: -1},limit:10, fields:{name:1,slug:1}});
});