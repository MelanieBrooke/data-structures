var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueObject = {};
  queueObject.storage = {};
  _.extend(queueObject, queueMethods);
  return queueObject;
 };

 var queueMethods = {};

 queueMethods.size = function () {
  return Object.keys(this.storage).length;
 }

 queueMethods.enqueue = function (value) {
  if (Object.keys(this.storage).length === 0) {
    this.storage[1] = value;
  } else {
    var lastKey = Object.keys(this.storage).length - 1;
    var newKey = Number(Object.keys(this.storage)[lastKey]) + 1;
    this.storage[newKey] = value;
  }
 }

 queueMethods.dequeue = function () {
  let dequeued = this.storage[Object.keys(this.storage)[0]];
  delete this.storage[Object.keys(this.storage)[0]];
  return dequeued;
 }
