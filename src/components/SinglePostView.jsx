var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var PostStore = require('../stores/PostStore');

var SinglePostView = React.createClass({
   
   contextTypes: {
      router: React.PropTypes.func
   },

   getInitialState: function(){
      return PostStore.getState();
   },

   componentDidMount: function(){
      PostStore.listen(this.onChange);
   },

   componentWillUnmount: function(){
      PostStore.unlisten(this.onChange);
   },

   onChange: function(state){
      this.setState(state);
   },

   render: function(){
      return (
            <div className="full-post">
                <h1 className="post-title">{this.state.currentPost.title}</h1>
                <div className="author-details">
                    <img src={this.state.currentPost.author.photo} className="author-photo"/>
                    <span className="author-name">{this.state.currentPost.author.name}</span>
                </div>
                <div className="post-content">
                    {this.state.currentPost.description}
                </div>
            </div>            
       );
   }

});

module.exports = SinglePostView;