interface LinkedListNodeInterface {
  data: string;
  next: LinkedListNode | null;
}

interface LinkedListInterface {
  head: LinkedListNodeInterface | null;
  isEmpty(): boolean;
  size(): number;
  search(value: string): LinkedListNodeInterface | null;
  searchAtPosition(position: number): LinkedListNodeInterface | null;
  delete(value: string): LinkedListNodeInterface | null;
  prepend(value: string): LinkedList;
  append(value: string): LinkedList;
  insertAtPosition(value: string, position: number): LinkedList;
  printLinkedList(): void;
}

export class LinkedListNode implements LinkedListNodeInterface {
  constructor(public data: string, public next: LinkedListNode | null = null) {}
}

export default class LinkedList implements LinkedListInterface {
  private length: number;
  head: LinkedListNode | null;
  constructor(head: string | null = null) {
    this.length = head ? 1 : 0;
    this.head = head ? new LinkedListNode(head) : null;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  prepend(value: string): LinkedList {
    const newNode = new LinkedListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.length = 1;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  append(value: string): LinkedList {
    if (this.isEmpty()) {
      this.prepend(value);
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = new LinkedListNode(value);
    this.length += 1;
    return this;
  }

  insertAtPosition(value: string, position: number): LinkedList {
    if (position === 0) {
      this.prepend(value);
      return this;
    }

    if (position > this.length) {
      this.append(value);
      return this;
    }

    let currentPosition = 1;
    let currentNode = this.head.next;
    const newNode = new LinkedListNode(value);

    while (currentPosition < position - 1) {
      currentPosition += 1;
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return this;
  }

  search(value: string): LinkedListNode | null {
    if (this.isEmpty()) {
      return null;
    }

    let currentNode = this.head;

    if (currentNode.data === value) {
      return currentNode;
    }

    while (currentNode && currentNode.data !== value) {
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return null;
    }

    return currentNode;
  }

  searchAtPosition(position: number): LinkedListNode | null {
    if (this.isEmpty() || position > this.length) {
      return null;
    }

    if (position === 0) {
      return this.head;
    }

    let currentNode = this.head.next;
    let currentPosition = 1;

    while (currentPosition < position) {
      currentNode = currentNode.next;
      currentPosition += 1;
    }

    return currentNode;
  }

  delete(value: string): LinkedListNode | null {
    if (this.isEmpty()) {
      return null;
    }

    let prevNode: LinkedListNodeInterface = this.head;

    if (prevNode.data === value) {
      this.head = prevNode.next;
      return prevNode;
    }

    while (prevNode.next && prevNode.next.data !== value) {
      prevNode = prevNode.next;
    }

    if (!prevNode.next) {
      return null;
    }

    const nodeToDelete = prevNode.next;
    prevNode.next = nodeToDelete.next;
    this.length -= 1;

    return nodeToDelete;
  }

  printLinkedList(): void {
    if (this.isEmpty()) {
      console.log("The list is empty");
      return;
    }

    let result: string = this.head.data;
    let currentNode = this.head.next;

    while (currentNode) {
      result += ` --> ${currentNode.data}`;
      currentNode = currentNode.next;
    }
    console.log(result);
    return;
  }
}
