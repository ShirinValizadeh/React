const arr =[5,6,1,9,12];
//console.log(arr);

const arr2 = [...arr] ; 
arr[0] = 1
//console.log(arr);
//console.log(arr2);


class Auto {
    constructor (seatsNum, maxSpeed , color){
        this.seats = seatsNum ;
        this.speed = maxSpeed ;
        this.color = color;
    }
    wheals = 4;
    showDescription(){
        console.log(`this auto contains ${this.seats} and its max speed is ${this.speed}`);
    }
  
    static showGeneralDescreption (){
        console.log('this is auto has wheals and you can drive it');
    }
} 


const newAuto = new Auto (4,280,'blue');
const onotherAuto = new Auto (4,20,'black');

// add new property 
newAuto.doors = 2
//add new methode to newAuto
newAuto.newDescription = function(){
    console.log(` i am new auto to add new methode to newAuto ${this.speed} and i a ${this.color} doors`);
}
//console.log(newAuto);
//newAuto.newDescription()

//** add new methode and override with prototype
Auto.prototype.showDescription = function(){
    console.log(' new class in auto');
}
onotherAuto.showDescription()

// add new one ohne override
Auto.prototype.newDescription = function(){
    console.log(` i am new newDescription auto to add new methode to newAuto ${this.speed} and i a ${this.color} doors`);
}
onotherAuto.newDescription()







//*************** replace ???? */
// how cann overwrite the function classes
String.prototype.fbw5 = function(){
    console.log('hi');
}

String.prototype.replace = function(x,y){
    console.log('hi is replace');
}
let someString = 'blabla'
//someString.fbw5()
//someString.replace('f' , 'd')