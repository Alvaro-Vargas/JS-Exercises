// Store a piece of data
// reference to the next node


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  //Add a node to the end of the list
  push(val) {
    // Create a new node using the value
    let newNode = new Node(val);
    
    //If there is no head, set the head and tail to be the node
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Otherwise, set the next on the tail to be the new node
      // set the tail prop to be the newly created node
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment the length by 1
    this.length += 1;
    return this;
  }

  // Remove(return) the node from the end of the linked list
  pop(){
    // If there are no nodes, return undefined
    if(this.length === 0) return undefined;
    
    // Loop through until reach the tail
    let current = this.head;
    let newTail = current;
    
    while(current.next !== null) {
      newTail = current;
      current = current.next;
    }
    // Current == Tail
    // newTail == 2nd to last
    
    // Set the tail do be the 2nd to last;
    this.tail = newTail;
    // set the 'next' property of the 2nd to lats node to null;
    newTail.next = null;
    // decrement the length of the list
    this.length -= 1;
    // return the value of the previous tail;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;  
  }

  // Remove the first item from the list;
  shift() {
    if(!this.head) return undefined;

    let removedHead =  this.head;
    this.head = removedHead.next;
    this.length--;

    if(this.length === 0) {
      this.tail = null;
    }

    return removedHead;
  }

  //Add a node to the beginning of the list
  unshift(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

    return this;
  }

  // Return the item at that position. Starting at 0;
  get(index) {
    if(index >= this.length || index < 0) return undefined;

    let node = this.head;
    let counter = 0;
    while(counter < index){
      node = node.next;
      counter++;
    }
    return node;
  }

  // change the value of a node in a given position
  set(index, val) {
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }

  // Add a node at a specific position
  insert(index, val) {
    if(index > this.length || index < 0) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    
    let pre = this.get(index-1);
    let nxt = this.get(index);
    let newNode = new Node(val);

    pre.next = newNode;
    newNode.next = nxt;

    this.length += 1;

    return true;
  }
  // Remove node at specific position
  remove(index){
    if(index >= this.length || index < 0) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();

    let pre = this.get(index-1);
    let deleted = pre.next;
    pre.next = deleted.next; 

    this.length -= 1;

    return deleted;
  }

  //Reverse a linked list in place
  reverse() {
    if(this.length <= 0) return undefined;

    //Swapping head and tails
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    // Helpers
    let prevNext; //Receives the previous node next
    let prev = null; // receives the previous Node

    for(var i = 0; i < this.length; i++) {
      prevNext = current.next;
      current.next = prev;
      prev = current;
      current = prevNext;
    }

    return this;
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
