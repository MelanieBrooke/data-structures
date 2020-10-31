var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  set._counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
  this._counter += 1;
  //we need to check if it's already in there
};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;

};

setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
  this._counter -= 1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 // .add, .contains, .remove : O(1), constant;
 */
