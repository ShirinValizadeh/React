console.log('hi');

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

//car2.showDescription()


let car1 = new Auto(5 , 220 , 'red')
let car2 = new Auto(8 , 280 , 'gray')
//console.log(car1);


car2.wheals = 5
//console.log(car2.wheals);

// ohne static
// Auto.showDescription() get error
//! 1 static
//Auto.showGeneralDescreption()



class User {
    constructor(fname , lname , email , adress , role){
        this.fName = fname ;
        this.lName = lname ; 
        this.email = email ; 
        this.adress = adress; 
        this.role = role;
    }
}

class UserRole{
    constructor(roleName, privilege){
        this.roleName = roleName;
        this.privilege = privilege
    }
    static getAdminRole(){
        return new UserRole('Admin' , ['add teacher' , 'dlt teacher' , 'edit teacher' , 'add student' , 'dlt student' , 'edit student'])
    }
    static getTeacherRole(){
        return new UserRole('teacher' , [ 'add student' , 'dlt student' , 'edit student'])
    }
    static getStudentRole(){
        return new UserRole('student' , ['view courses'])
    }
}

const shirin = new User('shirin' , 'valizadeh' , 'shirinuiu@yahoo.com' , 'blabla' , UserRole.getTeacherRole())
console.log( 'shirin' , shirin);