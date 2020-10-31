

// Instantiate a new graph
var Graph = function () {
  this.nodes = [];
  this.edges = [];
  this.counter = 0;
  // this.edges = [[node1, node2], [node1, node 3], [node4, node5]]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  newNode = node;
  this.nodes.push(newNode);
  this.counter += 1;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  //iterate through nodes array to see if nodes[i]=== node
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  //iterate through this.nodes
  this.counter -= 1;
  for (var i = 0; i < this.nodes.length; i ++) {
    if (this.nodes[i] === node) {
      this.nodes.splice(i, 1);
    }
  }
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].indexOf(node) >= 0) {
      return this.edges.splice(i, 1);
    }
  }

  //find target node
  //splice this.nodes to remove target node
  //iterate through this.edges
  //find indexOf target node
  //splice from edges array
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  ///iterate through this.nodes to find specific fromNode
  for (var i = 0; i < this.edges.length; i++) {
    //iterating through the edges array to find fromNode and toNode
    if (this.edges[i].indexOf(toNode) >= 0 && this.edges[i].indexOf(fromNode) >= 0) {
      return true;
    }
  }
  return false;

  //check fromNode.edges if connected toNode, return true or false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  var newEdge = [fromNode, toNode];
  this.edges.push(newEdge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (var i = 0; i < this.edges.length; i++) {
    //iterating through the edges array to find fromNode and toNode
    if (this.edges[i].indexOf(toNode) >= 0 && this.edges[i].indexOf(fromNode) >= 0) {
      return this.edges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var i = 0; i < this.nodes.length; i ++) {
    cb(this.nodes[i]);
  }

};

var newGraph = new Graph;

/*
 * Complexity: What is the time complexity of the above functions?
 .addNode, .addEdge - constant O(1)
 .contains, .removeEdge, .hasEdge, .forEachNode - linear O(n)
 */


