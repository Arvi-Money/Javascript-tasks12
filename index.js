// // Task - 1
// let arr = ['word', 2];

// function swapValues(arr) {
//     [arr[0], arr[1]] = [arr[1], arr[0]];
//   }

//   console.log('Before:', arr); 
//   swapValues(arr);
//   console.log('After:', arr);
  


// // Task - 2
// let array = [1, 2, 3, 4, 5, 6];

// function extractMiddleElements(arr) {
//     const middleIndex = Math.floor(arr.length / 2);
//     let middleElements;
  
//     if (arr.length % 2 === 0) {
//       middleElements = arr.slice(middleIndex - 1, middleIndex + 1);
//     } else {
//       middleElements = arr.slice(middleIndex, middleIndex + 1);
//     }
  
//     return middleElements;
//   }
  
// console.log(extractMiddleElements(array));



// // Task - 3
// let array = [1, "world", 3, "toy", 5];

// function groupArray(arr) {
//     let [a, b, ...rest] = arr;
//     let groupedArray = [[a, b], rest];
//     return groupedArray;
//   }
  
 
//   console.log(groupArray(array)); 
  


// // Task - 4
// let user = {
//     person: {
//         name: "John",
//         age: 30
//     }
// };

// let {person: information} = user;
// console.log(information);



// // Task - 5
// let user = {
//   name: "Alice",
//   adress: "London, StormStreet 55",
//   nation: "american",
//   phone: +9952565423
// };

// let {name, adress, nation, phone, age = 25, surname = "Miller"} = user;
// console.log(name, surname, age, adress, nation, phone);



// // Task - 6
// let Objects = [
//     { id: 1, name: 'John', age: 30 },
//     { id: 2, name: 'Alice', age: 25 },
//     { id: 3, name: 'Mike', age: 40 },
//     { id: 3, name: 'Anna', age: 50 }
//   ];
  
//   const newObject = Objects.map(({ id, name }) => ({ id, name }));
//   console.log(newObject);

  