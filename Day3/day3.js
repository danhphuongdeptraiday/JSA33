// function plus(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function times(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// let cal = prompt("Enter cal ?");

// if (cal == "+" || cal == "-" || cal == "/" || cal == "*") {
//   let n1 = Number(prompt("Enter n1 ?"));
//   let n2 = Number(prompt("Enter n2 ?"));
//   if (isNaN(n1) == false && isNaN(n2) == false) {
//     if (cal == "+") {
//       alert(`Tổng 2 số ${n1} và ${n2} = ${plus(n1, n2)}`);
//     } else if (cal == "-") {
//       alert(`Hiệu 2 số ${n1} và ${n2} = ${minus(n1, n2)}`);
//     } else if (cal == "*") {
//       alert(`Tích 2 số ${n1} và ${n2} = ${times(n1, n2)}`);
//     } else if (cal == "/") {
//       alert(`Hiệu 2 số ${n1} và ${n2} = ${divide(n1, n2)}`);
//     }
//   } else {
//     alert("1 trong 2 số không đúng theo format");
//   }
// } else {
//   alert("Lỗi phép tính");
// }

/**
 * 1. Hello
 * Hello Hello Hello Hello Hello
 *  5 = 4  x 3 x2 x1 x0
 */

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0 && (i - 2) % 10 == 0) {
//     console.log(i);
//   }
// }

let s = "";
for (let i = 0; i < 5; i++) {
  s = s + "Hello ";
}

// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// s = s + "Hello ";
// console.log(s);

// let tong = 0;
// for (let i = 1; i <= 50; i++) {
//   tong = tong + i;
// }

// console.log(tong);

// let n = Number(prompt("Enter n ?"));
// let giaiThua = 1;
// for (let i = 1; i <= n; i++) {
//   giaiThua = giaiThua * i;
// }

// console.log(giaiThua);

// let name = "Nguyễn Danh Phương"

// console.log(name.charAt());

// Mảng: chứa tập hợp các giá trị với nhau

let food1 = "Bún chả";
console.log(food1.charAt(0));
let food2 = "Xiên bẩn";
let food3 = "Tào phớ";

let list_of_food = ["Bún chả", "Xiên bẩn", "Tào phớ"];
//                      0          1           2
// In ra 1 phần tử nằm trong mảng: tên mảng[0 -> tên mảng.length -1]
console.log(list_of_food);
list_of_food.push("Chả cá");
console.log(list_of_food);
list_of_food.pop();
console.log(list_of_food);

// console.log(list_of_food[2]);
// console.log(list_of_food[1]);
// console.log(list_of_food[0]);

for (let i = 0; i < list_of_food.length; i++) {
  console.log(list_of_food[i]);
}

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(fruits.length - 2, fruits.length);
console.log(citrus);
console.log(fruits);
