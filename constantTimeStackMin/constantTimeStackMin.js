/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {

  let storage = [];
  let stackSize = 0;
  let minVal = 0;

// add an item to the top of the stack
  this.push = function(value) {

    storage[stackSize] = value;
    stackSize++;
    if ( value > minVal ) {minVal = value};

  };

// remove an item from the top of the stack
  this.pop = function() {

    let popped = storage[--stackSize]
    storage[stackSize] = null;
    return popped;

  };

// return the number of items in the stack
  this.size = function() {
    return stackSize;
  };

// return the minimum value in the stack
  this.min = function() {
    let item;
    debugger
    for ( item of storage ) {
      if ( storage[item] < minVal) {
        minVal = storage[item];
      }
    }
    return storage, minVal;
  };

};