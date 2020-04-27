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
});
