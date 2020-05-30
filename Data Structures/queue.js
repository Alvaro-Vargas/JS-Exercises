class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add an item to the beginning
  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size +=1;

    return this.size;
  }

  // Remove the first item from the queue
  dequeue() {
    if(!this.first) return undefined;
    let removed = this.first;
    if(this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = removed.next;
    }

    this.size -=1;

    return removed.value;
  }

}