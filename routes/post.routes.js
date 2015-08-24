var express = require('express');
var router = express.Router();
var PostController = require('../controllers/post.controller')
/* GET users listing. */
router.route('/').get(PostController.showAllPosts);
router.route('/ajax/post/:id').get(PostController.loadSinglePostViaAjax);
router.route('/ajax/posts').get(PostController.loadPostsViaAjax);

module.exports = router;
