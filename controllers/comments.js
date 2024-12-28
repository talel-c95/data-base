//Controller related to comments ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const comment=require("../database/models/comments")
module.exports = {
    //method to fetch all comments for a given post from the blog database.
    getAllComments: function(req, res) {
       comment.getAll(function(err, results) {
                   if(err) res.status(500).send(err);
                   else res.json(results)
               })
    },
    //method to add a comment to the database via the respective model function.
    addComment: function(req, res) {
        comment.add(function(err, results) {
            console.log(req.body , "body");
            
                    if(err) res.status(500).send(err)
                    else res.json(results)
                }, req.body)
    }

}