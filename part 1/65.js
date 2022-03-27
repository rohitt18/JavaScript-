// splice method (array ke bich mai se kuch delete ya insert karna hai toh kaam aata hai splice method)
// original array ko change karega
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2); // 1- start, 2- delete (indexes)
// console.log("delted item", deletedItem);

// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete 
const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2") // start delete insert
console.log("delted item", deletedItem);
console.log(myArray);