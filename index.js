//Make a constructor class that has one numerical value and manipulates it
class Numberz {
  constructor(numbz) {
    this.numbz = numbz;
  }
  numberOne(numbz) {
    return numbz + 1;
  }
  multiTwo(numbz) {
    return numbz * 2;
  }
  divThree(numbz) {
    return numbz / 3;
  }
  modFour(numbz) {
    return numbz % 4;
  }
}
//declare a variable and bind the arguments to the class
let newNumber = new Numberz();

//NOW call the declared variable with the constructor functions
console.log(newNumber.numberOne(10));
console.log(newNumber.multiTwo(10));
console.log(newNumber.divThree(10));
console.log(newNumber.modFour(10));

//challenge: Turn it into a Linked List
