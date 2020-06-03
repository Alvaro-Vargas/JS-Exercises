class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  //Helpers
  direction(val1, val2) {
    if(val1 === null || val2 === null) return null;
    if(val1.value > val2.value) {
      return "right"
    } else {
      return "left"
    }
  }
  
  //
  insert(val){
    let newNode = new Node(val);
    if(!this.root) {
     this.root = newNode;
     return this;
    }
    let current = this.root;
    var direction = this.direction(newNode, current);
    
    while(current[direction]) {
      current = current[direction];      
      direction = this.direction(newNode, current);
    }
    
    if(newNode.value === current.value) return "The value already exists";
    current[direction] = newNode;

    return this;
  }

  //
  find(val){
    if(!this.root) return false;
    // if(this.root.value === val) return this.root;

    let searchNode = new Node(val);
    let current = this.root;
    var direction = this.direction(searchNode, current);
    
    while(current){
      if(current.value === searchNode.value) return current;
      current = current[direction];
      direction = this.direction(searchNode, current);
    }

    return false;
  }

  //TREE TRAVERSAL
  //Bredth First Search (BFS)
  bfSearch() {
    var data = [],
        // values = [],
        queue = [],
        node = this.root;
    
    queue.push(node);
    
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      // values.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }

    // console.log(values);
    
    return data;    
  } 

  DFSPreOrder() {
    let visited = [],
        values = [],
        current = this.root;

    function traverse(node) {
      visited.push(node);
      values.push(node.value)
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(current);

    console.log(values);
    
    return visited;
  }

  DFSPostOrder() {
    let visited = [],
        values = [],
        current = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      visited.push(node);
      values.push(node.value)
    }

    traverse(current);

    console.log(values);
    
    return visited;
  }
  
  DFSInOrder() {
    let visited = [],
        values = [],
        current = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      visited.push(node);
      values.push(node.value)
      if(node.right) traverse(node.right);
    }

    traverse(current);

    console.log(values);
    
    return visited;
  }

}




let tree = new BinarySearchTree;
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

// console.log(tree.bfSearch());
tree.DFSPreOrder();
tree.DFSPostOrder();
tree.DFSInOrder();


// console.log(tree);
// console.log(tree.find(15))
// console.log(tree.find(10))
// console.log(tree.find(5))
// console.log(tree.find(13))
// console.log(tree.find(25))
// console.log(tree.find(40))
// console.log(tree.find(17))
// console.log(tree.find(17));




