var React = require('react/addons');
var PostActions = require('../actions/PostActions');
var Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    loadAllPosts: function(e){
        e.preventDefault();
        var self = this;
        PostActions.loadAllPosts(function(){
        	self.context.router.transitionTo('postListView');
        });
    },
	render: function(){
	  return (
	  	<div className="header" onClick={this.loadAllPosts}>
	       <h1> Hello Javascript Frameworks and Libraries</h1>
	    </div>
	  );
	}
});

module.exports = Header;