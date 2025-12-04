
// let user1 = {
//     name : "harsh",
//     email : "harsh@gmail.com",
//     login : function(){
//         console.log('logged in');
//     },
// };
// let user2 = {
//     name : "harsh",
//     email : "harsh@gmail.com",
//     login : function(){
//         console.log('logged in');
//     },
// };
// let user3 = {
//     name : "harsh",
//     email : "harsh@gmail.com",
//     login : function(){
//         console.log('logged in');
//     },
// };
// let user4 = {
//     name : "harsh",
//     email : "harsh@gmail.com",
//     login : function(){
//         console.log('logged in');
//     },
// };
// let user5 = {
//     name : "harsh",
//     email : "harsh@gmail.com",
//     login : function(){
//         console.log('logged in');
//     },
// };

// class User
// {
//     constructor(name , email)
//     {
//         this.name = name;
//         this.email = email;
//     }

//     loggedIn()  // in a prototype this will be added!
//     {
//         console.log('logged in');
//     }
// }

// let u1 = new User("Nilesh","wankhedenilesh2025@gmail.com");
// let u2 = new User("harsh","wankhedenilesh2025@gmail.com");
// let u3 = new User("saad","wankhedenilesh2025@gmail.com");

//-------------------------------------------------------------------------------------------------------------------------

// let product = {
//     name : "cap",
//     price : 3300,
//     discoundedPrice : function() {
//         return this.price - 200;
//     },
// }

// console.log(product.discoundedPrice());

//-------------------------------------------------------------------------------------------------------------------------

// class Car
// {
//     constructor(brand , speed)
//     {
//         this.brand = brand;
//         this.speed = speed;
//     }

//     drive()
//     {
//         return this.brand + " - " + this.speed;
//     }
// }

// let car1 = new Car("Hundai",180);
// let car2 = new Car("Maruti",170);

//-------------------------------------------------------------------------------------------------------------------------

// class Student
// {
//     constructor(name , rollNumber)
//     {
//         this.name = name;
//         this.rollNumber = rollNumber;
//     }
    
//     introduce()
//     {
//         return this.name + " " + this.rollNumber;
//     }

// }

// let s1 = new Student("nilesh",22);
// s1.introduce();


// let obj = {
//     sayName : function() {
//         console.log(this);
        
//     },

//     sayArrowName : () =>{
//         console.log(this);
//     },
// }

// obj.sayName();
// obj.sayArrowName();

// function User(name) // constructor function before es6
// {
//     this.name = name;
// }

// User.prototype.loggedin = function() {
//     console.log('logged in');
// };

// let u1 = new User("harsh");
// let u2 = new User("saad");

//--------------------------------------------------------------------------------------------------------------------------------------------

// call apply bind

// function abcd() {
//     console.log(this.name); // harsh
    
// }

// let obj = {
//     name : "harsh",
// }

// abcd.call(obj);

