var React = require('react');

class App extends React.Component {
   render() {
      return React.createElement("div", null, "Hello World!!!", React.createElement("br", null), "欢迎来到菜鸟教程学习！！！");
   }
}

module.export = App;