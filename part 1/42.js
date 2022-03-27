// objects inside array
// very useful in real world applications

// const obj = [{}, {}, {}];

const users = [
  { userId: 1, firstName: "rohit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

console.log(users);

// to iterate this array using forof loop

for (let user of users) {
  console.log(user);
  console.log(user.userId);
  console.log(user.firstName);
  console.log(user.gender);
}
