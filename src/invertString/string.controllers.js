
//Objeto que contiene nuestra funcion
const stringController = {}

stringController.invertString = async (req,res,next) =>{

    const normalString = req.body.string;
    let reversedString = normalString.split('').reverse().join('');

    res.send(reversedString)
        
}


//Exportamos el modulo
module.exports = stringController;