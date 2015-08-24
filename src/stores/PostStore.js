var alt = require('../alt');
var PostActions = require('../actions/PostActions');

class PostStore{

   constructor(){
     var self = this;
     this.bindListeners({
      updatePosts: PostActions.UPDATE_POSTS,
      updateCurrentPost: PostActions.UPDATE_CURRENT_POST
     });  
     this.on('init',function(){
       self.posts = [];
       self.currentPost = null;
     })
   }

   updatePosts(posts){
     this.posts = posts;
   }

   updateCurrentPost (post){
     this.currentPost = post;
   } 
}

module.exports = alt.createStore(PostStore, 'PostStore');