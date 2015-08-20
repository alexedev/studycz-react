var subsPosts = new SubsManager();

var {Section, Breadcrumb} = Semantify;

ArticleList = React.createClass({
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
        var slug= `/${article.slug}/`
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
      var words = searchString.split(/\s+/);
      var wordsReg = words.map((word) => {
        return `(?=.*${word})`
      });
      var wordsString =  wordsReg.join("");
      console.log(wordsString);
      var re = new RegExp(wordsString+".+","g");
      console.log(re);
      items = items.filter(function(l){
        return (l.name.toLowerCase().match( re ) || l.fulltext.toLowerCase().match( searchString )) ;
      });

    }

    return <div>
        <div className="ui input right">
          <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Поиск" />
        </div>
        <Breadcrumb>
          <Section>Все статьи</Section>
        </Breadcrumb>
        {(this.data.articles)? this.getList(items) : <Loader/>}
      </div>;

  }
});
