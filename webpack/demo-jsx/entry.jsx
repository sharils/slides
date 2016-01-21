var HelloMessage,
    React,
    ReactDOM;

React = require("react"),
ReactDOM = require("react-dom");

HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="Webpack" />, document.getElementsByTagName("h1")[0]);
