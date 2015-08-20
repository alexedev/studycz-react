var {Icon, Section, Breadcrumb} = Semantify;

CategoryList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {

    var sub = this.props.params.sub;
    var slug = this.props.params.slug;

    var selector = (sub ?{categories:{$elemMatch:{cat_slug:sub}}} :{categories:{$elemMatch:{cat_slug:slug}}});
    var handle = Meteor.subscribe('articles', selector);
    var data = {};
    if(handle.ready()) {
      data.articles = Articles.find(selector, {sort: {created_at: -1}}).fetch();
      data.categories = Articles.findOne(selector).categories;

      data.main_cat = _.find(data.categories, function(cat){ return cat.cat_slug === slug });
      data.main_cat_name = data.main_cat.cat;
      data.main_cat_slug = slug;

      if (sub) {
        data.sub_cat_name= _.find(data.categories, function(cat){ return cat.cat_slug === sub }).cat;
        data.sub_cat_slug = sub;
      }
      DocHead.setTitle(`${data.main_cat_name} | Высшее образование в Чехии`);
    }
    return data;
  },
  getBread() {
    var all = <a href="/articles">Все статьи</a>;
    if (this.data.sub_cat_name) {
      var mainUrl = `/category/${this.data.main_cat_slug}/`;
      return (
        <Breadcrumb className="padded-top">
          <Section>{all}</Section>
          <Icon className="right chevron divider"></Icon>
          <Section><a href={mainUrl}>{this.data.main_cat_name}</a></Section>
          <Icon className="right chevron divider"></Icon>
          <Section>{this.data.sub_cat_name}</Section>
        </Breadcrumb>
      );
      } else {
        return (
          <Breadcrumb className="padded-top">
            <Section>{all}</Section>
            <Icon className="right chevron divider"></Icon>
            <Section>{this.data.main_cat_name}</Section>
          </Breadcrumb>
        );
    }
  },
  getList() {
    return <div className="ui divided items">
      {this.data.articles.map(function(article) {
        var path = `/${article.slug}/`;
        return <a className="item" key={article._id} href={path}>{article.name}</a>
      })}
</div>
  },
  render() {
    return (
      <div>
         {this.getBread()}
          {(this.data.articles)? this.getList() : <div></div>}
      </div>
    );
  }
});

