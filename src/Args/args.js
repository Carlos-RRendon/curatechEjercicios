
//Funcion que recibe 4 argumentos y regresa un objeto conteniendo solo los thruthly args

function trueArgs (a,b,c,d) {

    const trueObject = {}

    if (a){
        trueObject.a= a
    }

    if (b){
        trueObject.b= b
    }
    if (c){
        trueObject.c= c
    }
    if (d){
        trueObject.d= d
    }

    return trueObject;


}

let response = trueArgs(true,0, '',false)
console.log(response)

