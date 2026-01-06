let arr = [10, 20, 30, 40, 50, 60];
arr.push(90, 50, 90, 50, 20, 25); //used to insert last index
arr.pop(); // used to remove ending index value
let arr1 = [];
console.log(arr1.pop()); // if array is empty it return undefine
arr.unshift("java"); // used to insert first index in array
arr.shift(); // used to remove first index in array
console.log(arr);
console.log(arr.splice(0, 4)); // used to trim the array, it will take starting index and ending index values as a parameters and affect original array
console.log(arr);
console.log(arr.slice(0, 4)); // used to trim the array, it will take starting index and ending index values as a parameters and it not affect original array
let str = [10, 20, 30, 40];
console.log(str.join()); //used to concat words in the place of , and return value in String Datatype
console.log(str);
console.log(str.reverse()); // used to reverse the array
str.splice(2, 0, "Java");
console.log(str);
let arr2 = [10, 20, 30];
console.log(arr2);
arr2.splice(0, 2, "Javascript");
console.log(arr2);
