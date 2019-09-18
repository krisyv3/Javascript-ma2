//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  function Teacher(first, last, age, gender, interests) {
      person.call(this, first, last, age, gender, interests, greeting);

      this.greeting = greeting;
  }

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myarray = [1,2,3,4,5,6,7,8,9,10];
var newarray = myarray.splice(4, 1);
console.log(myarray);
console.log(newarray);

//3. Delete the last number in the array that you created above.

myarray.pop();
console.log(myarray);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var mystr = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
var myObject = {
    Strawberries:"Banana's",
    strawberries:"banana's",
    strawberry:"banana",
    Strawberry:"Banana"
};
str = mystr.replace(/Strawberries|strawberries|strawberry|Strawberry/g, function(matched){
    return myObject[matched];
})
console.log(str);


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


function ChangeArray() {
   var football = ["liverpool" , "Manchester", "Brann", "fredrikstad FK"]; 
   console.log(football);

   football = [];
   console.log(football);

   var football = ["porsche", "suzuki", "Bmw", "Ford"];
   console.log(football);
}




//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var myPeople = [
    {name: "bob", age: 32},
    {name: "Jean", age: 43},
    {name: "marley", age: 52}
];


var myPeopleFiltered =  myPeople.filter(function(human) {
    return human.name == "bob";
});
//7. Create a simple function that logs the date.

function mydate() {
    var today = new Date();
    var date = today.getDate();
    console.log(date);
}