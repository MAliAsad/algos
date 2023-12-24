/**
 * Implement following methods for circular queue
 * enqueue
 * dequeue
 * isFull
 * isEmpty
 * peek
 * size
 * print
 */

// when empty and have to push data for the first time
// when not empty
// when full
// when remove

class CircularQueue {
  constructor(length) {
    this.list = new Array(length);
    this.maxLength = length;
    this.currentLength = 0;
    this.rear = 0;
    this.front = 0;
  }

  isEmpty() {
    return !this.currentLength;
  }

  isFull() {
    return this.currentLength === this.maxLength;
  }

  enqueue(value) {
    if (!this.isFull()) {
      this.list[this.rear] = value;
      this.currentLength++;

      if (this.rear === this.maxLength - 1) this.rear = 0;
      else this.rear++;
    } else {
      console.log("Queue is already full");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.list[this.front] = null;
      this.currentLength--;

      if (this.front === this.maxLength - 1) this.front = 0;
      else this.front++;

      if (this.isEmpty()) {
        this.rear = 0;
        this.front = 0;
      }
    } else {
      console.log("Queue is empty");
    }
  }
  peek() {
    return this.list[0];
  }

  size() {
    let count = 0;
    this.list.forEach((el) => {
      if (el) count++;
    });
    return count;
  }

  print() {
    console.log(this.list);
  }
}

let queue = new CircularQueue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

queue.enqueue(5);

queue.dequeue();

queue.enqueue(5);

queue.print();

queue.dequeue();

queue.print();

console.log("This is first element: ", queue.peek());

console.log("This is the length: ", queue.size());
