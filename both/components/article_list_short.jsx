var subsPosts = new SubsManager();

ArticleListShort = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var selector = {};
    var handle = subsPosts.subscribe('5articles', selector);
    var data = {};
    if(handle.ready()) {
      data.articles = Articles.find({}, {sort: {created_at: -1}, limit:10}).fetch();
    }
    return data;
  },
  getList() {
    return this.data.articles.map(function(article) {
      /*var path = FlowRouter.path('article', {slug: article.slug})*/
      var path = "/"+article.slug+"/"
      return (
        <div className="item" key={article._id} >
          <i className="right triangle icon"></i>
          <div className="content">
            <a className="header" href={path}>{article.name}</a>
          </div>
        </div>
      );
    })
  },
  render() {
    return (
      <div className="ui list">
        {(this.data.articles) ? this.getList() : "Загрузка..."}
        <a className="ui label" href="/articles">
          Показать все
        </a>
      </div>
    );
  }
});
