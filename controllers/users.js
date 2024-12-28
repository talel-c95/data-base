//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const user=require("../database/models/users")
module.exports = {
    //method to fetch all users from the blog database.
    getAllUsers: function(req, res) {
        user.getAll(function(err, results) {
            if(err) res.status(500).send(err);
            else res.json(results)
        })
    },
    //method to add a user to the database via the respective model function.
    addUser: function(req, res) {
    user.add(function(err,results){
        
        if(err) res.status(500).send(err)
        else res.json(results)
    },req.body)
    
    },
    //method to get one user by id.
    getOneUser: function(req, res) {
        const userId = req.params.id;
        
        user.getOne(userId, function(err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            if (!result || result.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(result[0]);
        });
    }

}