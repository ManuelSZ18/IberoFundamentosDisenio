/* 

PRINCIPIO DE ABIERTO/CERRADO
    
Es la capacidad de extender el comportamiento de una clase 
o funcion sin modificar.

*/

class sizeFramesOnStock{

    sizeFrames: String[] =["S", "M", "L"];

/*
    El indexOf devuelve la posicion del elemento en el array
    
    Si retorna -1 es por que el elemento no existe y por tanto no tiene indice
*/

    OnStock(sizeFrame: String){
        return this.sizeFrames.indexOf(sizeFrame) !== -1;
    }

/* 
    Hasta aqui la clase contiene los tamaños disponibles
    y a su vez, tiene una funcion que realiza una busqueda dentro
    del array y retorna una información de acuerdo a lo busqueda realizada
*/

    pushSizeFrame(sizeFrame: String){
        this.sizeFrames.push(sizeFrame);
    }
/*
    Con esta ultima funcion, se logra realizar una modificacion 
    a la clase, sin cambiar la funcionalidad que realizaba
    anteriormente.
*/

}
