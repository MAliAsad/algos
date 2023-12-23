class Queue {
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

let queue = new Queue();

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
