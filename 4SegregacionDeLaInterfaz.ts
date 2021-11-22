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

const bikeManuel : IoilBike = {
    brand: "GW",
    sizeFrame: "L",
    color: "Black",
    motorCC: 350
};

console.log(bikeManuel.brand)
console.log(bikeManuel.sizeFrame)
console.log(bikeManuel.color)
console.log(bikeManuel.motorCC)