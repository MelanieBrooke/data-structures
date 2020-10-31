var ourBST = BinarySearchTree(500000);
for (i = 0; i < 500000; i++) {
  ourBST.insert(Math.floor(Math.random() * Math.floor(1000000)));
}

var ourBST = BinarySearchTree(50);
for (i = 0; i < 50; i++) {
  ourBST.insert(Math.floor(Math.random() * Math.floor(100)));
}


var useCase = function(bst, target) {
  var smallestDifference = Math.abs(this.value - target);
  var closestNumber = this.value;
  if (bst === null) {
    return closestNumber;
  } else {
    if ((Math.abs(this.value - target) < smallestDifference)) {
      smallestDifference = Math.abs(this.value - target);
      closestNumber = this.value;
    }
    if (this.value < target) {
      return useCase(this.right, target);
    } else {
      return useCase(this.left, target);
    }
  }
  return closestNumber;
};

useCase.call((ourBST, 15));


// var useCase = function (bst, target) {
//   var smallestDifference = Math.abs(bst.value - target);
//   var closestNumber = bst.value;
//   console.log(smallestDifference + ", " + closestNumber)
//   bst.depthFirstLog(function() {
// //     if ((Math.abs(bst.value - target) < smallestDifference)) {
// //       smallestDifference = Math.abs(bst.value - target);
// //       closestNumber = bst.value;
// //     }
//   })
//   return closestNumber;
// }

// console.log(useCase(ourBST, 20))


 // create useCase function with the newNumber to search
 // create base variables
 // run depthfirstlog on the tree we are searching with an unnamed function as the parameter
 // unnamed function:
 // test a value against the newNumber, check the difference
 // if that difference is smaller than the current smallestDifference variable, change the smallestDifference variable AND the closestNumber variable to reflect that
 // this will happen on every number in the tree because we already wrote the recursive function
 // return the final closestNumber variable