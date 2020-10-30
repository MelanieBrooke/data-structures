var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
  //we need to check if it's already in there
};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;

};

setPrototype.remove = function(item) {
  //if exists, delete
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 // .add, .contains, .remove : O(1), constant;
 */
