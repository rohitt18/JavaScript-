// object destructuring**

const band = {
    bandName: "onedirection",
    famousSong: "perfect",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
// obj de-stucturing is used to make variables from defined objects
// const {} = band;  //syntax of object destructuring
  let { bandName, famousSong, ...restProps } = band; // props means property
  // by default yahi naam se banane padte hai jo object ke andar hai but agar kuch alag naam ka banana hai toh 
  // 
  console.log(bandName);
  console.log(famousSong);
  console.log(restProps); // typeof restProps will be object

// // assign any variable and store the value of it as it is in the object band.
// let var1 = band.bandName;   
// let var2 = band.famousSong;
// console.log(var1, var2);

