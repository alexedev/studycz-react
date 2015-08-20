var {Sticky} = Semantify;

mainLayout = React.createClass({
  getMenu() {
    return <div>{this.props.menu}</div>
  },
  render() {
    var gaScript = 'https://www.google-analytics.com/analytics.js';
    DocHead.loadScript(gaScript, function() {
      // Google Analytics loaded
      ga('create', 'UA-32178434-1', 'auto');
      ga('send', 'pageview');
    });
    var yaScript = 'https://mc.yandex.ru/metrika/watch.js';
    DocHead.loadScript(yaScript, function () {
      try {
        var yaCounter31838671 = new Ya.Metrika({
          id:31838671,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        });
      } catch(e) { }
    });
    return (
      <div>
        {this.props.vk?this.props.vk:console.log(this.props.vk)}
      <div className="ui grid container main">
        <div className="sixteen wide column">
          <MainMenu/>
        </div>
        {this.props.menu?<div className="three wide column">{this.getMenu()}</div>:<div></div>}
        <div id="content" className={this.props.menu?"thirteen wide column":"sixteen wide column"}>
          <div  className="ui basic segment">
            {this.props.content}
          </div>
        </div>

      </div>
      </div>
    )
  }
});

Reaktor.init(
  <Router>
    <Route name="home" path="/" layout={mainLayout} content={HomePage} menu={CatMenu} vk={VKinit}/>
    <Route name="articles" path="/articles" layout={mainLayout} content={ArticleList} menu={CatMenu} />
    <Route name="articlesByCat" path="/category/:slug/" layout={mainLayout} content={CategoryList} menu={CatMenu}/>
      <Route name="articlesByCat" path="/category/:slug/:sub/" layout={mainLayout} content={CategoryList} menu={CatMenu}/>

    <Route name="contact" path="/contact/" layout={mainLayout} content = {Contact} menu={CatMenu}/>
    <Route name="article" path="/:slug/" layout={mainLayout} content={ArticlePage} menu={CatMenu} vk={VKinit} />
      <Route name="article" path="/:slug/edit" layout={mainLayout} content={ArticleEditPage} />


  </Router>
);


/*
FlowRouter.route('/articles/:slug', {
  name: 'articleNew',
  subscriptions: function(params) {
    this.register('singleArticle', Meteor.subscribe('singleArticle', params.slug));
  },
  action: function(params) {
    ReactLayout.render(mainLayout, {
      content: <ArticlePage slug={params.slug} />
    });
  }
});
 */
