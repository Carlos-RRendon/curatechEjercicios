
const stringController = {}

stringController.invertString = async (req,res,next) =>{

    const normalString = req.body

    res.send(normalString);

        
}

module.exports = stringController;