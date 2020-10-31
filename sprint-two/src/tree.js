var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  //sets value as the target of a node
  // create variable for new tree, then
  // call the Tree function with the value as this new tree's value
  // push this tree onto the original tree children array using the variable name
  this.children.push(Tree(value));
  //adds that node as a child of the tree
};

treeMethods.contains = function (target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }

    }
  }
  return false;
};


treeMethods.removeChild = function (target) {
  for (var i = 0; i < this.children.length; i++) {
    if (target = this.children[i]) {
      this.children.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 //.addChild : O(1), constant time
 //.contains : O(n), linear time
 */
