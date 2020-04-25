interface LinkedListNodeInterface {
  data: string;
  next: LinkedListNode | null;
}

interface LinkedListInterface {
  head: LinkedListNodeInterface | null;
  isEmpty(): boolean;
  size(): number;
  search(value: string): LinkedListNodeInterface | null;
  delete(value: string): LinkedListNodeInterface | null;
  prepend(value: string): LinkedList;
  append(value: string): LinkedList;
  insertAtPosition(value: string, position: number): LinkedList;
}

class LinkedListNode implements LinkedListNodeInterface {
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
    }

    if (position > this.length) {
      this.append(value);
    }

    let currentPosition = 0;
    let currentNode = this.head;
    const newNode = new LinkedListNode(value);

    while (currentPosition < position) {
      currentPosition += 1;
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return this;
  }

  search(value: string): LinkedListNode | null {
    return null;
  }

  delete(value: string): LinkedListNode | null {
    return null;
  }
}
