Loader = React.createClass({
  render(){
    return (
      <div className="ui icon message">
        <i className="notched circle loading icon"></i>
        <div className="content">
          <div className="header">
            Загрузка...
          </div>
        </div>
      </div>
    );
  }
});