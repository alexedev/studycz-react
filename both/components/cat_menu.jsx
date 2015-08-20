CatMenu = React.createClass({
  render() {
    return (
      <div className="ui fluid vertical menu">
        <div className="item"><h3>Категории</h3></div>

        <div className="item">
          <a href="/category/postuplenie-2">Поступление</a>
          <div className="menu">
            <a className="item" href="/category/postuplenie-2/obshaya-informatsiya/">Общая информация</a>
            <a className="item" href="/category/postuplenie-2/economics/">Экономика</a>
            <a className="item" href="/category/postuplenie-2/tehnologiya/">Технология</a>
            <a className="item" href="/category/postuplenie-2/pravo/">Право</a>
            <a className="item" href="/category/postuplenie-2/arts/">Искусство</a>
            <a className="item" href="/category/postuplenie-2/architecture/">Архитектура</a>
            <a className="item" href="/category/postuplenie-2/medicine/">Медицина</a>
          </div>
        </div>
        <div className="item">
          <a href="/category/voprosyi-chitateley/">Вопросы читателей</a>
        </div>
        <div className="item">
          <a href="/category/nostrifikace/">Нострификация</a>
        </div>
        <div className="item">
          <a href="/category/byurokratiya/">Бюрократия</a>
        </div>
        <div className="item">
          <a href="/category/uslugi/">Услуги</a>
        </div>
        <div className="item">
          <a href="/category/zhizn-v-chehii/">Жизнь в Чехии</a>
        </div>
        <div className="item">
          <a href="/category/raznoje/">Разное</a>
        </div>
      </div>
    );
  }
});