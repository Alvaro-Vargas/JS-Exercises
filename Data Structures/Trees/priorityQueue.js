class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// MinHeap == Lower the number higher the priority
class priorityQueue {
  constructor(){
    this.queue = [];
  }

  // HELPERS -----

  findParent(index) {
    let parent = Math.floor((index - 1) / 2);
    return parent;
  }

  findChild(index, child){
    if(child === 'left') {
      return (2*index) + 1; // left child
    } else if(child === 'right') {
      return (2*index) + 2; // Right Child
    } else {
      return null;
    }
  }

  swap(index1, index2) {
    let temp = this.queue[index1];
    this.queue[index1] = this.queue[index2];
    this.queue[index2] = temp;
  }
  // ------

  enqueue(value, priority){
    // Create a new node for the queue
    var newNode = new Node(value, priority);
    // Push the new node to the queue
    this.queue.push(newNode);
    // Get the index to find the parent node
    var newNodeIdx = this.queue.length - 1;
    var parentNodeIdx = this.findParent(newNodeIdx);
    var parentNode = this.queue[parentNodeIdx];

    // While the new node is not the root && 
    // the newNode.priority is < than its parent value
    // Swap them
    while(newNodeIdx !== 0 && newNode.priority < parentNode.priority) {
      this.swap(newNodeIdx, parentNodeIdx);
      newNodeIdx = parentNodeIdx;
      parentNodeIdx = this.findParent(newNodeIdx);
      parentNode = this.queue[parentNodeIdx];
    }

    return this;

  }

  dequeue(){
  // Get the first element
  // For performance reasons - pop() it (no re-indexing of the array)
  this.swap(0, this.queue.length - 1);
  var removed = this.queue.pop()
  
  //Compare the inserted element with its childs
  //If greater, swap with the smaller
  //Helper variables...
  var sinkIdx = 0,
    sink = this.queue[0],
    leftChildIdx = this.findChild(sinkIdx, 'left'),
    leftChild = this.queue[leftChildIdx],
    rightChildIdx = this.findChild(sinkIdx, 'right'),
    rightChild = this.queue[rightChildIdx],
    swapLeft = false,
    swapRight = false;
    //--------
    function setChild(findChild, queue) {
      leftChildIdx = findChild(sinkIdx, 'left'),
      leftChild = queue[leftChildIdx],
      rightChildIdx = findChild(sinkIdx, 'right'),
      rightChild = queue[rightChildIdx];
      swapLeft = false;
      swapRight = false;
    }


    while(leftChild || rightChild) {
      
      if(leftChild) {
        if(leftChild.priority < sink.priority) {
          swapLeft = true;
        }
      }
      if(rightChild){
        if(leftChild.priority < sink.priority) {
          swapRight = true;
        }
      }

      if(swapLeft && swapRight) {
        var lesserChildIdx = (leftChild.priority < rightChild.priority) ? leftChildIdx : rightChildIdx;
        this.swap(sinkIdx, lesserChildIdx);
        sinkIdx = lesserChildIdx;
        setChild(this.findChild, this.queue);
        continue;
      } else if (swapLeft) {
        this.swap(sinkIdx, leftChildIdx);
        sinkIdx = leftChildIdx;
        setChild(this);
        continue;
      } else if(swapRight) {
        this.swap(sinkIdx, rightChildIdx);
        sinkIdx = rightChildIdx;
        setChild(this);
        continue;
      } else {
        break;
      }
    }

  return removed;
  }
}

var queue = new priorityQueue;

queue.enqueue(10, 3);
queue.enqueue(10, 4);
queue.enqueue(10, 6);
queue.enqueue(10, 7);
queue.enqueue(10, 2);
queue.enqueue(10, 1);

console.log(queue);

queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);



