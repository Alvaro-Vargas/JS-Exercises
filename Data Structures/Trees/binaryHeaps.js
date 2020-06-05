class MaxBinaryHeap {
  constructor() {
    this.values = [];
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
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
  }
  // ------

  // Add to the end of the array. (push)
  // Bubble it to the correct place.
    // You bubble it by comparing the child to its parent
    // And swapping it, until the child is no longer greater than the parent
  insert(value) {
    this.values.push(value);
    
    let newValueIdx = this.values.length-1;
    // find the parent node
    let parentIdx = this.findParent(newValueIdx);

    // While it is not the root && the new value is > parent value
    while(newValueIdx >= 0 && this.values[newValueIdx] > this.values[parentIdx]){
      this.swap(newValueIdx, parentIdx);
      newValueIdx = parentIdx;
      parentIdx = this.findParent(newValueIdx);
    }
  }

  removeMax(){ 
    if(this.values.length <= 1) {
      return this.values.pop();
    }
    this.swap(0, this.values.length - 1);
    let removedValue = this.values.pop();
    let sinkIdx = 0;
    // let largerChildIdx = (this.findChild(sinkIdx, 'left') > this.findChild(sinkIdx, 'right') ) ? this.findChild(sinkIdx, 'left') : this.findChild(sinkIdx, 'right');


    let leftChildIdx = this.findChild(sinkIdx, 'left');
    let rightChildIdx = this.findChild(sinkIdx, 'right');
    
    while(this.values[sinkIdx] < this.values[leftChildIdx] || this.values[sinkIdx] < this.values[rightChildIdx]) {
      // If sink is < than left
      if(this.values[sinkIdx] < this.values[leftChildIdx]) {
        // Check if it is also smaller then right
        if(this.values[sinkIdx] < this.values[rightChildIdx]) {
          // if is smaller than both, swap with the larger.
          let largerChildIdx = (this.values[leftChildIdx] > this.values[rightChildIdx]) ? leftChildIdx : rightChildIdx;
          this.swap(sinkIdx, largerChildIdx);
          sinkIdx = largerChildIdx;
          leftChildIdx = this.findChild(sinkIdx, 'left');
          rightChildIdx = this.findChild(sinkIdx, 'right');
          continue;
        }
        // If just greater than left, swap left
        this.swap(sinkIdx, leftChildIdx);
        sinkIdx = leftChildIdx;
        // if not < than left, check righ
      } else if(this.values[sinkIdx] < this.values[rightChildIdx]) {
        this.swap(sinkIdx, rightChildIdx);
        sinkIdx = rightChildIdx;
      } 
      
      leftChildIdx = this.findChild(sinkIdx, 'left');
      rightChildIdx = this.findChild(sinkIdx, 'right');
    }
    
    return removedValue;
  }

  print() {
    // let calculateLevels = Math.floor(Math.log2(treeLenght) + 1)
    
    for(var i = 0; i < this.values.length; i = i+i+1) {
      console.log(this.values.slice(i, (i+i)+1));      
    }    
  }
}

let maxHeap = new MaxBinaryHeap;

// maxHeap.insert(8); // 1
// maxHeap.insert(2); //2
// maxHeap.insert(3);//2
// maxHeap.insert(4);//3
// maxHeap.insert(5);//3
// maxHeap.insert(6);//3
// maxHeap.insert(7);//3
// maxHeap.insert(10);//3
// maxHeap.insert(1);//3
// maxHeap.insert(0);//3
// maxHeap.insert(9);//3

console.log(maxHeap);

console.log('Removed: ' + maxHeap.removeMax());

console.log(maxHeap);
maxHeap.print();

