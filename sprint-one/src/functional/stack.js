var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    //stack push will add an element to the collection (storage?)
    size += 1;
  };

  someInstance.pop = function() {
    //pop will remove the most recently added element that was not yet removed
    //if storage has values, pop will remove one
    if (size) {
      size -= 1;
    }
    //return the size of the storage after popping
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
