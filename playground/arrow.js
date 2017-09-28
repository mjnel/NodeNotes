  var square = x => x*x
console.log(square(9));


//doesnt work
var user = {
  name: "mark",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi I'm ${this.name}`);

  },
  sayHiNorm: function(){
    console.log("Hi Im  " + this.name);
  }
};


user.sayHiNorm(1,2,3);
