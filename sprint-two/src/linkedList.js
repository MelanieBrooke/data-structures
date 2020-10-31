var LinkedList = function () {
  var list = {};
  list.head = null;
  //first node
  list.tail = null;
  list.counter = 0;
  //last node or rest of list

  list.addToTail = function (value) {
    list.counter += 1;
    //need to call Node to create a new node
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
    //should designate a new tail when new nodes are added
    // The pointer next is assigned head pointer so that both pointers now point at the same node.

  };

  list.removeHead = function () {
    list.counter -= 1;
    //need to create new Node for new Head?
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
    //should remove the head from the list when removeHead is called
    //should return the value of the former head when removeHead is called
  };

  list.contains = function (target) {
    var search = function (node, target) {
      if (node.value !== target && node.next === null) {
        return false;
      }
      if (node.value === target) {
        return true;
      } else {
        return search(node.next, target);
      }
    };
    return search(list.head, target);
    //else return search(node.next, target)

  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 //.addToTail() , .removeHead() - O(1), constant
 //.contains() = O(n), linear
 */

