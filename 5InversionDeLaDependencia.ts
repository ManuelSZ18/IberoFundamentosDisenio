
/*Principio de Inversion de Dependencias*/

/*Ejemplo de una dependicia por concreción y contraria a este principio*/

class shimano{
    
    provider : string;
    
    constructor(shimanoFamily : string){
        this.provider = shimanoFamily;
    }
    
}

/*Ejemplo de una dependicia por abstraccion y siguiendo este principio*/

class provider{
    
    provider : string;

    constructor(provider : string){
        this.provider = provider;
    }
}