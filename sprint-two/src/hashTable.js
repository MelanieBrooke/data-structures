

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._itemCounter = 0;
};

HashTable.prototype.insert = function (k, v) {
  this._itemCounter += 1;
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  //if key already exists, overwrite current value
  if (!this._storage.get(index)) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    var bucket = this._storage.get(index);
    //check if key in bucket already exists
    for (var i = 0; i < bucket.length; i ++) {
      if (bucket[i][0] === k) {
        bucket.splice(i);
        this._itemCounter -= 1;
      }
    }
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
  //if bucket already exists at index, just create new tuple to add to bucket
  //if bob.get(index) !== undefined, then just create new tuple
  //if is it undefined, then we can create bucket. push tuple

};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // use .get to access the array bucket
  let bucket = this._storage.get(index);
  // loop through the array (bucket) found at the index
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return (bucket[i][1]);
    }
  }
  // when you find the key (will be an index 0 item) that matches k, return the value (will be an index 1 item)
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //remove entire tuple at bucket, use a splice
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i ++) {
    if (bucket[i][0] === k) {
      bucket.splice(i);
    }
  }
  this._itemCounter -= 1;
};

var newHashTable = new HashTable();


/*
 * Complexity: What is the time complexity of the above functions?
 //Most of the time, .insert, .retrieve, and .remove are O(1), constant, the worst case is O(n)
 //worst case is everything ends up in same bucket, which becomes O(n) search for an item
 */


