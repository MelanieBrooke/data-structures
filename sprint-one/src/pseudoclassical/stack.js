var Stack = function() {
  this.counter = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
}

Stack.prototype.pop = function () {
  let poppedVar = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return poppedVar;
}

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
 };
