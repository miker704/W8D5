

Function.prototype.inherits = function(cxt) {


}




function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);



// How would you test Function.prototype.inherits? A few specs to consider:

// You should be able to define methods/attributes 
// on MovingObject that ship and asteroid instances can use.
// Defining a method on Asteroid's 
// prototype should not mean that a ship can call it.
// Adding to Ship or Asteroid's prototypes should 
// not change MovingObject's prototype.
// The Ship and Asteroid prototypes should not be instances 
// of MovingObject.
// After you have written Function.prototype.inherits 
// using the surrogate trick, refactor your solution using Object.create.
//  Make sure to test that your updated solution works.