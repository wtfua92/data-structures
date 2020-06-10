import LinkedList, { LinkedListNode } from "./LinkedList";

const TEST_VALUE = "test";
let linkedList: LinkedList;

describe("LinkedList", function () {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should create a new empty instance of LinkedList", () => {
    linkedList.printLinkedList();
    expect(linkedList.size()).toEqual(0);
  });

  it("should create a new instance of LinkedList with predefined head", () => {
    linkedList = new LinkedList(TEST_VALUE);
    linkedList.printLinkedList();
    expect(linkedList.size()).toEqual(1);
    expect(linkedList.head.data).toEqual(TEST_VALUE);
  });

  describe("LinkedList.prepend()", () => {
    it("should make new value head if LinkedList is empty", () => {
      linkedList.prepend(TEST_VALUE);
      linkedList.printLinkedList();
      expect(linkedList.size()).toEqual(1);
      expect(linkedList.head.data).toEqual(TEST_VALUE);
    });

    it("should prepend new value", () => {
      linkedList = new LinkedList(TEST_VALUE);
      linkedList.prepend(TEST_VALUE + 2);
      linkedList.printLinkedList();
      expect(linkedList.size()).toEqual(2);
      expect(linkedList.head.data).toEqual(TEST_VALUE + 2);
    });
  });

  describe("LinkedList.append()", () => {
    it("should make new value head if LinkedList is empty", () => {
      linkedList.append(TEST_VALUE);
      linkedList.printLinkedList();
      expect(linkedList.size()).toEqual(1);
      expect(linkedList.head.data).toEqual(TEST_VALUE);
    });

    it("should append new value", () => {
      linkedList = new LinkedList(TEST_VALUE);
      linkedList.append(TEST_VALUE + 2);
      linkedList.printLinkedList();
      expect(linkedList.size()).toEqual(2);
      expect(linkedList.head.next.data).toEqual(TEST_VALUE + 2);
    });
  });

  describe("LinkedList.delete()", function () {
    beforeEach(() => {
      for (let i = 0; i < 5; i++) {
        linkedList.append(TEST_VALUE + i);
      }
    });
    it("should delete node with particular value and return it", function () {
      const linkedListSize = linkedList.size();

      const deleteResult = linkedList.delete(TEST_VALUE + 2);
      linkedList.printLinkedList();

      expect(deleteResult instanceof LinkedListNode).toEqual(true);
      expect(linkedList.size()).toEqual(linkedListSize - 1);
      expect(linkedList.search(TEST_VALUE + 2)).toEqual(null);
    });

    it("should return null if value is not present in the list", () => {
      linkedList.printLinkedList();
      expect(linkedList.delete(TEST_VALUE + 100)).toBeFalsy();
    });

    it("should return null the list is empty", () => {
      const linkedList = new LinkedList();
      linkedList.printLinkedList();
      expect(linkedList.delete(TEST_VALUE + 100)).toBeFalsy();
    });

    it("should delete head node safely", () => {
      const deletedHead = linkedList.delete(TEST_VALUE + 0);
      linkedList.printLinkedList();
      expect(deletedHead.data).toEqual(TEST_VALUE + 0);
      expect(linkedList.head.data).toEqual(TEST_VALUE + 1);
    });
  });

  describe("LinkedList.search()", () => {
    beforeEach(() => {
      for (let i = 0; i < 5; i++) {
        linkedList.append(TEST_VALUE + i);
      }
    });

    it("should return the node with searched value", () => {
      const result = linkedList.search(TEST_VALUE + 2);
      expect(result.data).toEqual(TEST_VALUE + 2);
    });

    it("should return null if the list is empty", () => {
      linkedList = new LinkedList();
      expect(linkedList.search(TEST_VALUE)).toBe(null);
    });

    it("should return null if value wasn't found", () => {
      expect(linkedList.search(TEST_VALUE + 100)).toBe(null);
    });

    it("should return head value", () => {
      expect(linkedList.search(TEST_VALUE + 0)).toBe(linkedList.head);
    });
  });

  describe("LinkedList.searchAtPosition()", () => {
    beforeEach(() => {
      for (let i = 0; i < 5; i++) {
        linkedList.append(TEST_VALUE + i);
      }
    });

    it("should return the node at the searched position", () => {
      const result = linkedList.searchAtPosition(3);
      linkedList.printLinkedList();
      expect(result.data).toEqual(TEST_VALUE + 3);
    });

    it("should return null if the list is empty", () => {
      linkedList = new LinkedList();
      linkedList.printLinkedList();
      expect(linkedList.searchAtPosition(2)).toBe(null);
    });

    it("should return null if position is bigger than length", () => {
      linkedList.printLinkedList();
      expect(linkedList.searchAtPosition(100)).toBe(null);
    });

    it("should return head node", () => {
      linkedList.printLinkedList();
      expect(linkedList.searchAtPosition(0)).toBe(linkedList.head);
    });
  });

  describe("LinkedList.insertAtPosition()", () => {
    beforeEach(() => {
      for (let i = 0; i < 5; i++) {
        linkedList.append(TEST_VALUE + i);
      }
    });

    it("should insert a new node in specified position", () => {
      linkedList.insertAtPosition(TEST_VALUE + 100, 2);
      linkedList.printLinkedList();
      expect(linkedList.searchAtPosition(2).data).toEqual(TEST_VALUE + 100);
    });

    it("should prepend new node if position is 0", () => {
      linkedList.insertAtPosition(TEST_VALUE + 100, 0);
      linkedList.printLinkedList();
      expect(linkedList.searchAtPosition(0).data).toEqual(TEST_VALUE + 100);
    });

    it("should append a new node if position is bigger than length", () => {
      linkedList.insertAtPosition(TEST_VALUE + 100, 100);
      expect(linkedList.searchAtPosition(100)).toEqual(null);
      expect(linkedList.searchAtPosition(linkedList.size() - 1).data).toEqual(
        TEST_VALUE + 100
      );
    });
  });
});
