var request = require('superagent');
var fs = require('fs');
var config = require('../config');

exports.showAllPosts = function(req,res,next){
   var obj = JSON.parse(fs.readFileSync('./static/posts.json', 'utf8'));
   obj.map(function(post){
   	  post.description = '';
   })
   res.locals.data = {
       "PostStore" : {
           "posts" : obj
       }
   }
   next();
}

exports.loadSinglePostViaAjax = function(req,res){
    var id = req.params.id;
    var obj = JSON.parse(fs.readFileSync('./static/posts.json', 'utf8'));
    obj.forEach(function(post){
        if(post.id === parseInt(id,10)){
            return res.json(post);
        }
    });
}

exports.loadPostsViaAjax = function(req,res){
    var obj = JSON.parse(fs.readFileSync('./static/posts.json', 'utf8'));
    obj.map(function(post){
   	  post.description = '';
    })
    return res.json(obj);
}