/* Principio de Segregacion de Interfaces */

/*Una clase debe de implementar únicamente las interfaces que necesita, 
es decir, que no necesite tener que implementar métodos que no utilice.*/

interface Ibike{
    brand: string;
    sizeFrame: string;
    color: string;
}

interface IelectricBike extends Ibike {
    watts: number;
    batteryAmp: number;
}

interface IoilBike extends Ibike {    
    motorCC: number;
}

