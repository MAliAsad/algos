// in this dequeue operation in linear time complexity

console.log("queue implementation using array");

class QueueArray {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    this.list.shift();
  }

  peek() {
    return this.list[0];
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return !this.list.length;
  }

  print() {
    console.log(this.list);
  }
}

let queue = new QueueArray();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.print();

console.log(queue.peek());

queue.dequeue();
queue.dequeue();

queue.print();

console.log(queue.size());

console.log(queue.isEmpty());

// in this enqueue, dequeue operation are of constant time complexity

console.log("queue implementation using object");

class QueueObject {
  constructor() {
    this.object = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(value) {
    this.object[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      delete this.object[this.front];
      this.front++;
    }
  }

  peek() {
    return this.object[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front > 0;
  }

  print() {
    console.log(this.object);
  }
}

let queue2 = new QueueObject();

queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);

queue2.print();

console.log(queue2.peek());

queue2.dequeue();
queue2.dequeue();

queue2.print();

console.log(queue2.size());

console.log(queue2.isEmpty());
