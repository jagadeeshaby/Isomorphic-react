var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./Header.jsx');

var App = React.createClass({
	render: function(){
		return (
            <div className="body-container">
              <Header />
              <RouteHandler />
            </div>
			);
	}
})

module.exports = App;