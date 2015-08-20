var {Icon, Section, Breadcrumb} = Semantify;

ArticlePage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe('singleOldArticle', this.props.params.slug);
    var data = {};
    if(handle.ready()) {
      data.article = Articles.findOne({slug:this.props.params.slug});
      data.categories = data.article.categories;
      DocHead.setTitle(`${data.article.name} | Высшее образование в Чехии`);
    }
    return data;
  },
  getContent() {
    var cats = this.data.categories.map(function(cat,index,list) {
      var slug;
      if (cat.cat_parent_slug) {
        slug = `/category/${cat.cat_parent_slug}/${cat.cat_slug}/`
      } else {
        slug = `/category/${cat.cat_slug}/`
      }
      if (list.length-2 >= index) {
        return  <span key={index}><a href={slug}>{cat.cat}</a>, </span>
      } else {
        return  <span key={index}><a href={slug}>{cat.cat}</a></span>
      }

    });
    var title= this.data.article.name;
    var url = "http://studycz.com/" + this.data.article.slug + "/";
    return <div>
        <h4>Категории: {cats}</h4>
        <h1>{this.data.article.name}</h1>
        <div dangerouslySetInnerHTML={{__html: marked(this.data.article.fulltext.toString(),
      {/*{sanitize:true} раскомментировать когда переведу все в markdown*/})}} />
        <VKbutton />
        <h3>Комментарии</h3>
        <DisqusThread shortname="studyczcom" url={url} title={title}/>
    </div>;
  },
  render() {
    return (
      <div>
          <Breadcrumb className="padded-top">
            <Section><a href="/articles">Все статьи</a></Section>
          </Breadcrumb>
          {(this.data.article)? this.getContent() : <div></div>}

      </div>
    );
    }
});