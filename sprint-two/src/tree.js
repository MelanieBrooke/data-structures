var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //sets value as the target of a node
  // create variable for new tree, then
  // call the Tree function with the value as this new tree's value
  // push this tree onto the original tree children array using the variable name
  this.children.push(Tree(value));
  //adds that node as a child of the tree
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
