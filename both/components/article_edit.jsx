ArticleEditPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe('singleOldArticle', this.props.params.slug);
    var data = {};
    if(handle.ready()) {
      data.article = Articles.findOne({slug:this.props.params.slug});
      DocHead.setTitle(`Редактирование ${data.article.name} | Высшее образование в Чехии`);
    }
    return {
      currentUser: Meteor.user(),
      article: data.article
    };
  },
  handleSubmit(event) {
    event.preventDefault();
    var articleName = React.findDOMNode(this.refs.name).value.trim();
    var articleSlug = React.findDOMNode(this.refs.slug).value.trim();

    /*Meteor.call("addTask", text);*/

    // Clear form
    React.findDOMNode(this.refs.name).value = this.data.article.name;
  },
  getTags() {
    return <div class="ui blue labels">
      {this.data.article.tags.map(function(tag,index) {
        return <a class="ui label" key={index}>
          {tag} <i class="icon close"></i>
        </a>
      })}
    </div>
  },
  render() {
    var tags = this.data.article.tags;

    console.log(tags);

    return (
      <div className="container">
        <AccountsUIWrapper />
        <h2>Редактирование статьи</h2>
      {this.data.currentUser ?
        <form className="ui form" onSubmit={this.handleSubmit} >
          <div className="field">
            <label>Заголовок</label>
          <input
            type="text"
            ref="name"
            defaultValue={this.data.article.name}
            />
          </div>
          <div className="field">
            <label>url</label>
            <input
              type="text"
              ref="slug"
              defaultValue={this.data.article.slug}
              />
          </div>
          <div className="field">
            <label>Вступление</label>
            <textarea ref="excerpt" defaultValue={this.data.article.excerpt}/>
          </div>
          <div className="field">
            <label>Текст</label>
            <textarea ref="fulltext" defaultValue={this.data.article.fulltext}/>
          </div>
          <div className="field">
            <label>теги</label>
            <input
              type="text"
              ref="tags"
              defaultValue={this.getTags()}
              />
          </div>
          <div className="field">
            <label>Категории</label>
            <input
              type="text"
              ref="cats"
              defaultValue={this.data.article.categories}
              />
          </div>
          <button className="ui button" type="submit">Сохранить</button>
        </form> : ''
      }
      </div>
    );
  }
});