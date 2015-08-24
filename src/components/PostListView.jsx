var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var PostStore = require('../stores/PostStore');
var PostPreview = require('./PostPreview.jsx');

var PostListView = React.createClass({
   
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
      var posts = this.state.posts.map(function(post){
        return (
                <PostPreview key={post.id} post={post} />           
            );
      });
      return (
            <div>
                {posts}
            </div>
       );
   }

});

module.exports = PostListView;