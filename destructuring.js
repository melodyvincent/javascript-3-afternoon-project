/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

var {color:color, make:make, model, year:year } = carDetails;
console.log (color, make, year)



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

// const greeting = {
//   firstName: 'Melody',
//   lastName: 'Vincent',
//   title: 'mom',
// }

function greeting( obj ) {
  const {firstName, lastName, title} = obj;

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
  
  function totalPopulation (object) {
     const {utah, california, texas, arizona} = object;
     stateTotal = utah + california+ texas + arizona
     return stateTotal;
  };
  
  


////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here

  function ingredients (object) {
  var newIng = [];
  const {carb, fat, protein} = object;
  for (var key in object){
    newIng.push(object[key])
  }
  return newIng;
}



////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

// Code Here
function largeNumbers (obj) {
  var numberArr = [];
  const { one, two, tree} = obj;
  for (var key in obj[obj]);


}

var largeNumbers = (object) => {
  var valuesArray = [];
  var {first, second, third} = object
  for (var key in object){
  valuesArray.push(object[key]);
  var orderedValues = valuesArray.sort(function(a, b){return a - b})
  var smallest = orderedValues[0];
   
     
  }
return smallest  
}

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here

function numberGroups (obj) {
  var numbers = [];
  const {a, b, c} = obj
  if (a.length > b.length && a.length > c.length){
   return a;
  } else if (b.length > a.length && b.length > c.length)  {
    return b;
  }else if (c.length > b.length && c.length > a.length){
    return c;
  }
return numbers;
}

