Stack
=====
- A stack is a data structure similar to a list with access restricted to only 1 end
- It stores elements in a LIFO (Last In First Out) order
- It's like a stack of plates in your kitchen. 
- The last plate that you put on the stack stays on the top of the stack
  - and it is the 1st plate that you get to take out and use 
- Stacks are usually thought of as vertical data structures
  - unlike lists and arrays which are horizontal
  - Hence the 1st and the only directly accessible item on the stack is referred to as "top" of the stack.

- A standard way to implement a stack is using a singly linked list with constraints on its operations
- where items can be inserted and deleted at only 1 place, the end of the list.

```
// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
```

// create the constructor method for the stack
// We start with an empty 1st node, represented by null and this indicates the top of the stack.
```
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
```

A stack has 2 primary functions:
- push(): places data onto the top of a stack
- pop(): removes data from the top of the stack


Queue
=====

- A queue is a data structure that models a FIFO (First In First Out) operation.
- An example of a queue is the fast food service at McDonald's
- You line up, and service is provided in the order that you (and everyone else) lined up.
- A more practical example of a queue is the event loop of a web browser.

The main functions of a queue include:
  - enqueue(data): adds data to a queue (insertion)
  - dequeue(): removes the oldest data added to a queue (deletion)

- Insertion
  - insertion operation in a queue is limited to only 1 place, the end of the queue.
  - This is called enqueue

- Removal
  - removal operation in a queue is limited to only 1 place, the beginning of the queue.
  - This is called dequeue


```
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
      const node = new _Node(data);

      if (this.first === null) {
          this.first = node;
      }

      if (this.last) {
          this.last.next = node;
      }
      //make the new node the last item on the queue
      this.last = node;
  }

  dequeue() {
      //if the queue is empty, there is nothing to return
     if (this.first === null) {
         return;
     }
     const node = this.first;
     this.first = this.first.next;
      //if this is the last item in the queue
     if (node === this.last) {
         this.last = null;
     }
     return node.value;
 }
}
```
