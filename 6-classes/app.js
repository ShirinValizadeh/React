class User {
    #privatepassword

    constructor(fname , lname , email , password){
        this.fName = fname ;
        this.lName = lname;
        this.email = email;
        this.#privatepassword = password
    }

       //  not able to change
       set password(value){
        console.log('hey you can not change password for user');
    
    }
    //  able to use it ore to see that without get will show you undefined
    get password(){
        return this.#privatepassword
    }

    fullName(){
        return this.fName + '' + this.lName 
        
    }

   changePassword = function( newPassword){
            this.#privatepassword = newPassword
    }

    static description (){
        return 'i am static methode'
    }
}
// call static
console.log(User.description());


/* let someUser ={       static class is not gut to use
    email:'tim@jfj.com',
    fName : 'tim' ,
    lName : 'kjjlj',
    password: 'fdfddd',
    fullName : function(){
        return this.fName + '' + this.lName
    }
}
 */


// 
let someUser = new User ('Tim' , 'Breuel' , 'tim@hdhd.com' , '123456')
let someUser1 = new User ('shirin' , 'valizadeh' , 'sh@hdhd.com' , '12345446')

//prototype
User.prototype.checkUser = function(email , password){
    if (email === this.email && password === this.password) {
        return true
    }else{
        return false
    }
}
// to override  fullName methode from class user 
User.prototype.fullName = function () {

    return 'i am ' +this.fName + '' + this.lName
    
}

//console.log(someUser.fullName());
class Employee extends User{

    constructor(lname , fname ,email , password , officeNum , department){
        //call constracture fram father
        super(fname,lname,email,password)
        this.officeNum = officeNum;
        this.department = department;

    }
    
    showDetails(){
        return `i am an employee and my name is ${this.fname} and i am working in ${this.department} pass ${this.password}`
    }
    static employeeDescription (){
        return 'i am static methode from employee '
    }
}

console.log(Employee.employeeDescription());

const someEmployee = new Employee( 'valizadeh' ,'shirin' , 'sh@hfh.com' , '1112121' , 'fbw5' , 'web-dev' )
//console.log(someEmployee.fullName());
//console.log(someEmployee.showDetails());

//?prototype User to add a new methode called changePassword 
//?it should change password
/* User.prototype.changePassword = function( newPassword){
    if ( newPassword !== this.password) {

        this.#privatepassword = newPassword
    }
 
} */
//someEmployee.changePassword('123');
//! someEmployee.password = '123'   // can not change password so because of #privat  you need to use change passworde methode
// change pssword using methode
someEmployee.changePassword('123');
console.log(someEmployee.password);


//dont let user to change password from this way   someEmployee.password = '123'



//* will be not equal because they are object 
//! ANSWER >> JSON.stringify(obj1) === JSON.stringify(obj2)  
let user1 = new User ('user1' , 'luser1' , 'user@gfg.com' , '1111' )
let user2 = new User ('user1' , 'luser1' , 'user@gfg.com' , '1111' )
/* if (user1 === user2) {
    console.log('equal');
}else{
    console.log('not');
} */


//! they have yet same place in memory
//let user3 = { ...user1} // make copy and add 
let user3 = user1  // make copy
if (user1 === user3) {
    console.log('equal');
}else{
    console.log('not');
}


