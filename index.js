// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class Queue {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  enqueue(val) {
    this.items[this.count] = val;
    this.count++;
  }

  dequeue() {
    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }
}

function hotPotato(eleList, num) {
  const queue = new Queue();
  const elimitatedList = [];

  for (let i = 0, len = eleList.length; i < len; i++) {
    queue.enqueue(eleList[i]);
  }

  while(queue.size() > 1) {
    console.log('queue', queue);
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }

  return {
    elimitatedList,
    winner: queue.dequeue(),
  };
}

// const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
// hotPotato(names, 7);

class Deque {
  constructor() {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  addBack(val) {
    this.items[this.count] = val;
    this.count++;
  }

  removeFront() {
    const item = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return item;
  }

  removeBack() {
    this.count--;
    const item = this.items[this.count];
    delete this.items[this.count];
    return item;
  }
}

function palindromeChecker(aStr) {
  if (!aStr) return false;

  const deque = new Deque();
  const lowerStr = aStr.toLocaleLowerCase().replace(/\s/g, '');
  console.log('lowerStr', lowerStr);
  for (let i = 0, len = lowerStr.length; i < len; i++) {
    deque.addBack(lowerStr[i]);
  }

  while(deque.size() > 1) {
    const firstChar = deque.removeFront();
    const lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      console.log('firstChar', firstChar);
      console.log('lastChar', lastChar);
      return false;
    }
  }

  return true;
}

console.log('a', palindromeChecker('a'));
console.log('as', palindromeChecker('as'));
console.log('level', palindromeChecker('level'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));


