var BinarySearchTree = function (value) {
  var binarySearchTree = Object.create(bstMethods);
  binarySearchTree.value = value;
  binarySearchTree.left;
  binarySearchTree.right;
  return binarySearchTree;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  if (!this.value) {
    this.value = value;
  }
  if (this.value > value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (this.value < value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

//contains returns boolean
bstMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left !== undefined) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== undefined) {
    return this.right.contains(value);
  }
  return false;

};

bstMethods.depthFirstLog = function (cb) {
  // run cb function on this.value
  // then check for left branch, run depth first log
  // check right branch, run depth first log
  // in theory, every time you run it, it should run the callback function on this.value
  cb(this.value);
  //get every value // run function
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 //binary search trees are O(log n), logrithmic, depending on the size of the input
 */

 // working on use case problem

var useCase = function(bst, newNumber) {
  var smallestDifference = Math.abs(bst.value - newNumber);
  var closestNumber = bst.value;
// I'm just putting my thoughts into words as best I can, typing my brain thoughts is easier this way for me
// I could be totally off, this is what I was trying to express about how our depthfirstlog handles the recursive checking for us
// bst.depthFirstLog(function(){
//  if ((Math.abs(this.value - newNumber) < smallestDifference) {
//    smallestDifference = Math.abs(this.value - newNumber);
//    closestNumber = this.value;
//  }
// return closestNumber
})

if ((Math.abs(bst.value - newNumber) < smallestDifference) {
  //    smallestDifference = Math.abs(this.value - newNumber);
  //    closestNumber = this.value;
  //  }
  if (bst.value < newNumber) {
    return useCase(bst.right, newNumber);
  } else {
    return useCase(bst.left, newNumber);
  }


  //log smallestDifference as node - newNumber (and change closestNumber at the same time)
  //running recursive function to check if every this.value is higher or lower than newNumber
  //if higher, go to right // if lower, go to left . run recursion
  //keep a history of what the closestNode has been
  //if no branch, return closestNumber

}



 // create useCase function with the newNumber to search
 // create base variables
 // run depthfirstlog on the tree we are searching with an unnamed function as the parameter
 // unnamed function:
 // test a value against the newNumber, check the difference
 // if that difference is smaller than the current smallestDifference variable, change the smallestDifference variable AND the closestNumber variable to reflect that
 // this will happen on every number in the tree because we already wrote the recursive function
 // return the final closestNumber variable