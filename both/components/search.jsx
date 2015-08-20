var subsPosts = new SubsManager();

SearchExample = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var selector = {};
    var handle = subsPosts.subscribe('articles', selector);
    var data = {};
    if(handle.ready()) {
      data.articles = Articles.find({}, {sort: {created_at: -1}}).fetch();

    }
    DocHead.setTitle("Высшее образование в Чехии");
    return data;
  },
  getList(items) {
    return <div className="ui divided items">
      {items.map(function(article) {
        /*var path = FlowRouter.path('article', {slug: article.slug})*/
        var slug= `/${article.slug}/`;
        return <a className="item" key={article._id} href={slug}>{article.name}</a>
      })}
    </div>
  },
  getInitialState: function(){
    return { searchString: '' };
  },

  handleChange: function(e){

    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.

    this.setState({searchString:e.target.value});
  },

  render: function() {
    var items = this.data.articles;
    var searchString = this.state.searchString.trim().toLowerCase();


    if(searchString.length > 0){

      // We are searching. Filter the results.

      items = items.filter(function(l){
        return l.name.toLowerCase().match( searchString );
      });

    }

    return <div className="ui grid">
      <div className="thirteen wide column">
      <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Поиск" />
        Все статьи
        {(this.data.articles)? this.getList(items) : <div>Загрузка...</div>}
      </div>
      <div className="three wide column">
        <div className="ui sticky fixed top">
          <CatMenu />

        </div>
      </div>
    </div>;

  }
});