var Stack = function() {
  var stackObject = {};
  stackObject.storage = {};

  _.extend(stackObject, stackMethods);

  return stackObject;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 };


 var stackMethods = {};

 stackMethods.size = function () {
  return Object.keys(this.storage).length;
 }

 stackMethods.pop = function () {
  let popped = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return popped;
 }

 stackMethods.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
 };


