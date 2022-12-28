module.exports = async (req,res) => {
    try {
        res.status(200).send({email:req.user.email, username:req.user.username});
    } catch (err) {
        res.status(500).send("Server error");
    }
}