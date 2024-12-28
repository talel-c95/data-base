//Controller related to posts ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const post = require("../database/models/posts")
module.exports = {
    //method to fetch all posts from the blog database.
    getAllPosts: function(req, res) {
        post.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    //method to get one post by id.
    getOnePost: function(req, res) {
        const postId = req.params.idpost;
        
        post.getOne(postId, function(err, result) {
            console.log(postId);
            
            if (err) {
                return res.status(500).send(err);
            }
            if (!result) {
                return res.status(404).json({ error: 'Post not found' });
            }
            res.json(result);
        });
    },
    //method to add a post to the database via the respective model function.
    addPost: function(req, res) {
        post.add(function(err, results) {
            if(err) res.status(500).send(err)
            else res.json(results)
        }, req.body)
    }
}