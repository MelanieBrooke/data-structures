var LinkedList = function() {
  var list = {};
  list.head = null;
  //first node
  list.tail = null;
  //last node or rest of list

  list.addToTail = function(value) {
    //need to call Node to create a new node
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = list.head;
    }
    list.tail = newNode;
    //should designate a new tail when new nodes are added
    // The pointer next is assigned head pointer so that both pointers now point at the same node.

  };

  list.removeHead = function() {
    //need to create new Node for new Head?
    var newNode = new Node.value;
    var headValue = list.head;
    delete list.head;
    newNode.next = list.head;
    return headValue;
    //should remove the head from the list when removeHead is called
    //should return the value of the former head when removeHead is called
  };

  list.contains = function(target) {
    //recursion to search nodes, take in a node
    //if current node is not target, and next node is empty, return null
    //if node value is target, return true
    //else run recursion on rest of nodes
    //should contain a value that was added
    //should not contain a value that wasn't added
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 //each element points to the next
 //each node contains data and a reference (link) to the next node
