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
    return this.top;
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

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function peek(stack) {
  return stack.top;
}

function isEmpty(stack) {
  return this.top === null;
}

// Solution 1
// function display(stack) {
//   let list = "";
//   let node = stack.top;
//   while (node.next !== null) {
//     list += node.data + "\n";
//     node = node.next;
//   }
//   list += node.data;
//   return list + "\n";
// }

// Solution 2
function display(stack) {
  let list = [];
  let node = stack.top;
  while (node.next !== null) {
    list.push(node.data)
    node = node.next;
  }
  list.push(node.data)
  return list.join("\n")
}

function is_palindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  revStr = "";
  while (stack.top !== null) {
    revStr += stack.pop();
  }

  return str === revStr;
}

const starTrek = new Stack();
starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

// console.log(display(starTrek));
// console.log(peek(starTrek));
// console.log(isEmpty(starTrek));

starTrek.pop();
starTrek.pop();
// console.log(display(starTrek));


// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function parenthesesCheck(str){
  console.log(str)
  const stack = new Stack;
  let index = 0;
  for(let i = 0; i < str.length; i++){
    let currentChar = str[i];

    if(currentChar === '('){
      stack.push(currentChar)
    }
    if(currentChar === ')'){
      stack.pop(currentChar)
    }
  
  }
  if(isEmpty(stack) !== true){
    console.log(str)
    if(stack.pop().indexOf('(')){
      // console.log(str.indexOf('('), '124')
      // console.log(str)
    }
    if(stack.pop().indexOf(')')){
      // console.log(str.indexOf(')'), '128')
      console.log(str)
    }
  }

}
console.log(parenthesesCheck('teddy()('))