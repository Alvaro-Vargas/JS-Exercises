class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Last In First Out
  push(value){
    let newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let previousFirst = this.first;
      this.first = newNode;
      newNode.next = previousFirst;
    }

    this.size += 1;
    return this.size;
  }
  //
  pop(){
    if(!this.first) return null;
    let removed = this.first;
    if(this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removed.next;
      removed.next = null;
    }
    this.size--;
    return removed;
  }
}

// let stack = new Stack;

// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(3));

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

