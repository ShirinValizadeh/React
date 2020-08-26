class Auto {
    constructor (seatsNum, maxSpeed , color){
        this.seats = seatsNum ;
        this.speed = maxSpeed ;
        this.color = color;
    }
    wheals = 4;
    showDescription = function (){
        console.log(`this auto contains ${this.seats} and its max speed is ${this.speed}`);
    }
    //!1
    static showGeneralDescreption (){
        console.log('this is auto has wheals and you can drive it');
    }
} 

//** how to extends classes ****************** */
//truck have every thing that auto have
class Truck extends Auto {
    constructor(seatsNum, maxSpeed , color , weight , height){
        // call constructor of parent class
        super(seatsNum, maxSpeed , color)
        this.weight = weight;
        this.height = height;
    }
}

const someTruck = new Truck(2 , 240 , 'yellow' , 7000 , 3)
//console.log(someTruck);
// copy
const onothereTruck = { ... someTruck }
//const onothereTruck = someTruck  // it will be ~ overwrited
someTruck.speed = 260
//someTruck.showDescription()
onothereTruck.showDescription()  // it will stay speed 240 becuse af copy



// that is javascript class (javascript classes pre es6 , javascript)
class MyString extends String{
    constructor(value){
        super(value);
        this.value = value;

    }
    //add my methode
     log = function(){
         console.log(this.value);
     }
}


const name = new MyString('shirin')
//console.log(name.toUpperCase());  // use methode  toUpperCase()  or substr(0,2)
//name.log()






