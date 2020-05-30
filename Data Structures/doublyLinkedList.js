class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add to the end
  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    
    this.length += 1;
    return this;
  }

  // remove last item
  pop() {
    if(!this.tail) return undefined;
    let removed = this.tail;

    if(this.length === 1) {
      this.head = this.tail = null;
    } else {
    // Make the prev node the current tail
    this.tail = removed.prev;
    // Clear relation between nodes
    this.tail.next = null;
    removed.prev = null;
    }
    this.length -= 1;
    return removed;
  }
  
  // remove from the beginning
  shift() {
    if(!this.head) return undefined;
    let removed = this.head;
    
    if(this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = removed.next;
      removed.next = null;
      this.head.prev = null;
    }
    this.length -= 1;
    return removed;
  }

  //Add to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  // Retrieves a node in a certain index
  get(index) {
    if(index < 0 || index >= this.length) return undefined;
    let counter, node;
    if(index <= (this.length / 2)) {
      counter = 0;
      node = this.head;
      while(counter !== index) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while(counter !== index) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  // Replace the value in a specific index
  set(index, value) {
    let node = this.get(index);
    if(node) {
      node.val = value;
      return true;
    } 
    return false;
  }

  //Add a new node at a specific position
  insert(index, value){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(value); 
    if(index === this.length) return !!this.push(value); 
    
    let newNode = new Node(value);
    let previousNode = this.get(index-1);
    let afterNode = previousNode.next;

    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length += 1;
    return true;
  }

  //Remove an index
  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift(); 
    if(index === this.length - 1) return this.pop(); 

    let removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = removed.next = null;

    this.length -= 1;
    
    return removed;

  }


  print() {
    var arr = [];
    var current = this.head;
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);

list.insert(1, "two and a half");