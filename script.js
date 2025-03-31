import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log("size:", list.size());
console.log("head:", list.head().value);
console.log("tail:", list.tail().value);
console.log("at(2):", list.at(2).value);
console.log("contains parrot?", list.contains("parrot"));
console.log("contains snake?", list.contains("snake"));
console.log("contains monkey?", list.contains("monkey"));

console.log("find parrot:", list.find("parrot"));
console.log("find turtle:", list.find("turtle"));
console.log("find monkey:", list.find("monkey"));

list.removeAt(2);
console.log("after remove at 2:", list.toString());

list.insertAt("mouse", 2);
console.log("after insert at 2:", list.toString());
