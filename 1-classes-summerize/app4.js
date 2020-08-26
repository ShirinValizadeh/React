
//** */ we use set if we want to protect our property and we use get / #privateseats if we want to change what we protected
class Auto {
    // !add private property  wich only accessable inside the class
    #privateseats
    constructor (seatsNum, maxSpeed , color){
       // this.seats = seatsNum ;
       this.#privateseats = seatsNum;
        this.speed = maxSpeed ;
        this.color = color;
    }
    //  not able to change
    set seats(value){
        console.log('hey you can not change seats for Auto');
     // return  this.#privateseats = value // you can change it yet
    }
    //  able to use it ore to see that without get will show you undefined
    get seats(){
        return this.#privateseats
    }


    showDescription(){
        console.log(`this auto contains ${this.seats} and its max speed is ${this.speed}`);
    }
  
    static showGeneralDescreption (){
        console.log('this is auto has wheals and you can drive it');
    }
} 


let newAuto = new Auto (4,6,'red')
//newAuto.seats = 6
//console.log(newAuto.seats);

//**************get and set  */

newAuto.seats = 6  // you can not change seats becuse af set in line 8
//console.log(newAuto.#privateseats);
console.log(newAuto.seats);
