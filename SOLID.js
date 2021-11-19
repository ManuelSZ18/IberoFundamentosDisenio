/* PRINCIPIO DE RESPONSABILIDAD UNICA
    Este principio nos recomienda que una clase o funcion debe centrarse
    especificamente en cumplir con una funcion y por tanto debe existir
    una unica razon para cambiar.

    Este principio exige que todos los metodos o subfunciones tengan alta cohesion.
*/

class bike {
    constructor(brand, sizeFrame){
    this.brand = brand;
    this.sizeFrame = sizeFrame;
    }

    getBrand(){
        return this.brand;
    }

    getSizeBrand(){
        return this.sizeFrame;
    }

    saveBrand(){
        this.brand;
    }

    saveSizeBrand(){
        this.sizeFrame;
    }
}


/* 

PRINCIPIO DE ABIERTO/CERRADO
    
Es la capacidad de extender el comportamiento de una clase 
o funcion sin modificar.

*/

class sizeFramesOnStock{

    sizeFrames = ["S", "M", "L"];

/*
El indexOf devuelve la posicion del elemento en el array
    
Si retorna -1 es por que el elemento no existe y por tanto no tiene indice
*/

    OnStock(sizeFrame){
        return this.sizeFrames.indexOf(sizeFrame) !== -1;
    }

/* Hasta aqui la clase contiene los tamaños disponibles
    y a su vez, tiene una funcion que realiza una busqueda dentro
    del array y retorna una información de acuerdo a lo busqueda realizada
*/

    pushSizeFrame(sizeFrame){
        this.sizeFrames.push(sizeFrame);
    }
/*
    Con esta ultima funcion, se logra realizar una modificacion 
    a la clase, sin cambiar la funcionalidad que realizaba
    anteriormente.
*/

}
