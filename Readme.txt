Coding concepts

Big O notation 
	
Definition: equation to calculate time complexity like O(a+b), O(n^2), O(n)

Rules to calculate Big O

1. Different steps get added i.e O(a+b)  
2. Drop constants I.e O(n)
3. Different input = Different variables I.e O(a*b)
4. Drop non dominate terms i.e O(n+n^2) => O(n^2)

Order of growth

O(1) => Constant i.e any line that executes only once
O(log n) => logarithmic i.e loop where n is divide => Binary Search
O(n) => Linear i.e single loop where n is dec or inc
O(n log n) => Linearthmic I.e doing both O(n) and O(log n)
O(n^2) => Quadratic i.e 2 loops where n is dec or inc
O(n^3) => Cubic i.e 3 loops where n is dec or inc
O(2^n) => exponential
O(n!) factorial


Data Structures

Array, Object =>  Collection of data, Key value pair

Sets 

Definition: Contains collection of data but each element must be unique

Sets don’t maintain insertion order

Set are iterables we can loop through them

Searching and deleting in set is faster than arrays

Map

Definition: unordered collection of key value pairs. Both key and value can be of any data type 

Set are iterables we can loop through them.

Stack

Use LIFO

Abstract data type. It is defined by its behaviour

Stack is basically a list and what makes it a stack is how it behaves

Stack methods push, pop

Most useful in tracing back the steps i.e maintaining history, undo operation

Queue

Use FIFO

Abstract data type. It is defined by its behaviour

Queue is basically a list and what makes it a stack is how it behaves

Queue methods enqueue, dequeue

Most useful in maintaining sequence I.e callback queue

Circular Queue

Extended version of regular queue.

The size of the queue is fixed and uses a single block in memory

Also referred as circular buffer or ring buffer

If the queue is full you can’t enqueue anymore I.e traffic lights, clocks

Link List

It’s a linear data structure that includes a series of connected nodes.

Each node consists of a value and a pointer that points to the next node

Insertion and deletion is faster

3 main functions insertion, deletion and search

Can be used to implement stacks and queues

More practical example is image viewer

Hash tables

Definition: Used for key => value look up. 

Both key and value can be any type of data structure.

Your key is actually converted to a hash code and hash code gets converted to index when you look up using hash function

It is possible for multiple keys to have same hash code because there are infinite possibilities for key and finite number of hash codes. So theoretically speaking it’s possible for different keys to wind up on same index.

This is called collision

One way of solving it is chaining like storing in link list 

Time complexity of getting and setting the value is constant time but in worst case scenario it can be linear time

Graphs

Definition: Collection of nodes where each node points to other node

2 searching Algorithms

1) Depth first search: Recursive algorithm=> use isVisited  => Go deep into the node to see if it has the path to some other node.
2) Breadth first search (Better approach): use queue => keep adding children of the current node to the queue until you reach correct node =>Go to other children to look for node before going deep




