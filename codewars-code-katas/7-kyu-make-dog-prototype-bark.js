console.clear();

/*
-----------------------------------------
7 kyu
Make Dog prototype bark!
-----------------------------------------

Add a bark() method which return 'Woof!'
to the existin Dog constructor.
*/



// The existing Dog constructor is:
function Dog(name, breed, sex, age){
    this.name  = name;
    this.breed = breed;
    this.sex   = sex;
    this.age   = age;
}



// --------------------------------------
Dog.prototype.bark = function() {
  return 'Woof!';
};

var benton = new Dog('Benton', 'hound', 'male', '4');
console.log(  benton.bark()  );