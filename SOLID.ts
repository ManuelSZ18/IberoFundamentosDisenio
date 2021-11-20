/* PRINCIPIO DE RESPONSABILIDAD UNICA
    Este principio nos recomienda que una clase o funcion debe centrarse
    especificamente en cumplir con una funcion y por tanto debe existir
    una unica razon para cambiar.

    Este principio exige que todos los metodos o subfunciones tengan alta cohesion.
*/

class bike {
    Brand: string;
    sizeFrame: string;

    constructor(Brand: string, sizeFrame: string){
    this.Brand =  Brand;
    this.sizeFrame = sizeFrame;
    }

    getBrand(){
        return this.Brand;
    }

    getSizeBrand(){
        return this.sizeFrame;
    }

    saveBrand(){
        this.Brand;
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


/*
    PRINCIPIO DE SUSTITUCION DE LISKOV

    Este principio indica que cuando se usa una clase
    determinada y luego se crea otra clase que extienda de la 
    primera, entonces cualquier objeto creado a partir de esta puede
    ser cambiada por la otra, obligando asi a que cualquier clase hija
    no altere el comportamiento de la clase padre.
*/

/*  Atributos clase: Llantas, manubrio, pedales, frenos 
    Metodos: 
*/

class sell {

}