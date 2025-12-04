class Human
{
    constructor(name , age , city)
    {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

// fns madhe same fns lihla trr both objects la diffn memory lagel and prototype ne ekach memory ne kaam houn jail.
// shared memory : prototype
// automatically adds in both instances prototype.

Human.prototype.saasLoFns = function(naamLiya) {
    console.log(naamLiya + ' saasLo fns called...');
};

let h1 = new Human("Nilesh",22,'Dhule');
let h2 = new Human("Bhushan",23,'Boris');
h1.saasLoFns("Nilu");
h2.saasLoFns("Bhushya");