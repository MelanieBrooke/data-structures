var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (Object.keys(storage).length === 0) {
      storage[1] = value;
    } else if (Object.keys(storage > 0)) {
      var last = Object.keys(storage).length - 1;
      var newKey = Number(Object.keys(storage)[last]) + 1;
      storage[newKey] = value;
    }

  };

  someInstance.dequeue = function() {
    let tempVar = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    return tempVar;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
 };
