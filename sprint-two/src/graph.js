

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
  // this.edges = [[node1, node2], [node1, node 3], [node4, node5]]
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //iterate through nodes array to see if nodes[i]=== node
  for (var i = 0; i < this.nodes.length; i ++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  ///iterate through this.nodes to find specific fromNode
  for (var i = 0; i < this.nodes.length; i ++) {
    if (this.nodes[i].values === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  //check fromNode.edges if connected toNode, return true or false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

var newGraph = new Graph;

/*
 * Complexity: What is the time complexity of the above functions?
 */


