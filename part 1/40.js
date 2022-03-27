// spread operator

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, ..."8923445", 69];
// const newArray = [..."123456789"]; // if you want to make an array with elements from 1-9 
console.log(newArray);

// spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4", 
  };
  
   // ek object mai ek key ek hi baar rahegi toh agar vohi key vapas define karoge toh 
  //  hamesha bad wala override kar dega pehle wale ko
  const newObject = { ...obj2, ...obj1, key69: "value69" };
  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  console.log(newObject);