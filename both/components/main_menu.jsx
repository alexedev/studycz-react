MainMenu = React.createClass({
  render() {
    return (
      <div className="ui grid">
        <div className="four wide column"><a href="/"><Logo/></a></div>
        <div className="twelve wide column">
          <div className="row">
            <div className="ui grid">
            <div className="sixteen wide column">
            <div className="ui basic horizontal segments">
              <div className="ui segment">
                <i className="phone icon"></i> Чехия: +420-608891556
              </div>
              <div className="ui segment">
                <i className="phone icon"></i> РБ: +375-296969631
              </div>
              <div className="ui segment">
                <i className="mail icon"></i> info@studycz.com
              </div>
            </div>
              </div>
              </div>
          </div>
          <div className="row">
            <div className="eight wide column">
              <div className="ui menu">
                <a className="item" href="/">
                  Главная
                </a>
                <a className="item" href="/uslugi/">
                  Услуги
                </a>
                <a className="item" href="/contact/">
                  Контакты
                </a>
                <div className="item">
                  <a className="ui primary button" href="/contact/">Задать вопрос</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});