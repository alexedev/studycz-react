HomePage = React.createClass({
  render() {
    DocHead.setTitle(`Высшее образование в Чехии`);
    DocHead.addMeta({name: "yandex-verification", content: "52a32cb8301ff971"});
    return <div>
      <h2>Помощь в поступлении в чешские ВУЗы</h2>
      <MainText />
      <div className="ui floating compact message">
        <div className="header">
          Эту статью должен прочитать каждый:
        </div>
        <a href="/aktualnyiy-poryadok-postupleniya-v-cheshskie-vuzyi-v-2014-godu/">
          Актуальный порядок поступления в чешские ВУЗы в 2015 году</a>
      </div>
      <h2>Последние статьи</h2>
      <ArticleListShort/>
      <VKgroup group={40556543} mode={2}/>
    </div>;
  }
});
