VKinit = React.createClass({
  componentDidMount() {
    window.vkAsyncInit = function() {
      VK.init({
        apiId: 3249181
      });
    };
    setTimeout(function() {
      var el = document.createElement("script");
      el.type = "text/javascript";
      el.src = "//vk.com/js/api/openapi.js";
      el.async = true;
      document.getElementById("vk_api_transport").appendChild(el);
    }, 1);
  },
  render() {
    return <div id="vk_api_transport"></div>
  }
});

VKbutton = React.createClass({
  componentDidMount() {
    setTimeout(function() {
      VK.Widgets.Like("vk_like", {type: "button", height: 24});
    },2500);
  },
  render() {
    return <div id="vk_like"></div>;
  }
});

VKgroup = React.createClass({
  componentDidMount() {
    var mode = this.props.mode;
    var number = this.props.group;
    setTimeout(function() {
    VK.Widgets.Group("vk_groups_"+number, {mode: mode, width:"700", height: "300", color1: 'FFFFFF', color2: '#1e70bf', color3: '#4183c4'}, number);
    },2500);
  },
  render() {
    var id = "vk_groups_"+this.props.group;
    return <div id={id}></div>
  }
});