import LinkedList from "./LinkedList";

const TEST_VALUE = "test";
let linkedList: LinkedList;

describe("LinkedList", function () {
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should create a new empty instance of LinkedList", () => {
    expect(linkedList.size()).toEqual(0);
  });

  it("should create a new instance of LinkedList with predefined head", () => {
    linkedList = new LinkedList(TEST_VALUE);
    expect(linkedList.size()).toEqual(1);
    expect(linkedList.head.data).toEqual(TEST_VALUE);
  });

  describe("LinkedList.prepend()", () => {
    it("should make new value head if LinkedList is empty", () => {
      linkedList.prepend(TEST_VALUE);
      expect(linkedList.size()).toEqual(1);
      expect(linkedList.head.data).toEqual(TEST_VALUE);
    });

    it("should prepend new value", () => {
      linkedList = new LinkedList(TEST_VALUE);
      linkedList.prepend(TEST_VALUE + 2);
      expect(linkedList.size()).toEqual(2);
      expect(linkedList.head.data).toEqual(TEST_VALUE + 2);
    });
  });

  describe("LinkedList.append()", () => {
    it("should make new value head if LinkedList is empty", () => {
      linkedList.append(TEST_VALUE);
      expect(linkedList.size()).toEqual(1);
      expect(linkedList.head.data).toEqual(TEST_VALUE);
    });

    it("should append new value", () => {
      linkedList = new LinkedList(TEST_VALUE);
      linkedList.append(TEST_VALUE + 2);
      expect(linkedList.size()).toEqual(2);
      expect(linkedList.head.next.data).toEqual(TEST_VALUE + 2);
    });
  });
});
