// Các kiểu so sánh giá trị ở trong JS:
/**
 * >
 * >=
 * <
 * <=
 * ==: so sánh giá trị mà k quan tâm đến kiểu dữ liệu
 * !=
 * Điều kiện: && (và), || (hoặc)
 * ===: so sánh giá trị và kiểu dữ liệu của giá trị
 * !==
 */

// let a = "20";
// let b = 20;
// let c = 8;
// let check = a == b && c < b && a != c;
// let d = 100;
// let check = (c > d || b == a) && b < c;

// console.log(check);

/**
 * if(điều kiện) {
 *      code ở đây sẽ chạy nếu điều kiện đúng
 * } else if(điều kiện) {
 *      code ở đây sẽ chạy nếu điều kiện ở if bên trên ko đúng
 * } else {
 *      code ở đây sẽ chạy nếu điều kiện sai
 * }
 */

// let a = 20;
// let b = 100;

// if (a == b) {
//   console.log("2 giá trị bằng nhau");
// } else if (a > b) {
//   console.log("a lớn hơn b");
// } else {
//   console.log("b lớn hơn a");
// }

// Tạo hàm prompt nhập điểm và lấy điểm đó so sánh với các khoảng điểm
// điểm số > 9 và <= 10 -> Điểm số là A+
// điểm số > 8 và <= 9 -> Điểm số là A
// điểm số > 7 và <= 8 -> Điểm số là B+
// điểm số > 6 và <= 7 -> Điểm số là B
// điểm số > 5 và <= 6 -> Điểm số là C+
// điểm số > 4 và <= 5 -> Điểm số là C
// Nếu điểm số nhỏ hơn hoặc bằng 4 -> Đúp

// tạo 3 hàm prompt()
// hàm 1 thì là tạo dấu của phép tính, hàm thứ 2 và thứ 3 là nhập 2 số để tính, sau khi nhập xong thì hiện ra kết quả trong hàm prompt

// let cal = prompt("Enter cal ?");

// if (cal == "+" || cal == "-" || cal == "/" || cal == "*") {
//   let n1 = Number(prompt("Enter n1 ?"));
//   let n2 = Number(prompt("Enter n2 ?"));
//   if (isNaN(n1) == false && isNaN(n2) == false) {
//     if (cal == "+") {
//       alert(`Tổng 2 số ${n1} và ${n2} = ${plus(n1, n2)}`);
//     } else if (cal == "-") {
//       alert(`Hiệu 2 số ${n1} và ${n2} = ${n1 - n2}`);
//     } else if (cal == "*") {
//       alert(`Tích 2 số ${n1} và ${n2} = ${n1 * n2}`);
//     } else if (cal == "/") {
//       alert(`Hiệu 2 số ${n1} và ${n2} = ${n1 / n2}`);
//     }
//   } else {
//     alert("1 trong 2 số không đúng theo format");
//   }
// } else {
//   alert("Lỗi phép tính");
// }

// Kiến thức về function:
// Lý thuyết: dùng để thực thi 1 đoạn code nào đó
// Vận hành: gọi tên function thì function mới chạy

//                  Kiểu 1: void
// let a = 20;

// function newValue() {
//   a = 30;

//   function abc() {
//     console.log("ABC");
//   }
//   abc();
// }

// newValue();
// console.log(a);
//                  Kiểu 2: Function có tham số
// let a = 20;
// function newValue(x) {
//   a = x;
// }
// newValue("Nguyễn Danh Phương");
// console.log(a);
// f(x) = f(1) => x = 1

//                  Kiểu 3: Function có return: giá trị return = giá tri khi gọi tên function
function calculate(a, b) {
  return a + b;
}
let result = calculate(10, 20);
result = calculate(100, 50);
console.log(result);
// calculate(10, 20);

function plus(a, b) {
  return a + b;
}

/**
 * let i = 0
 * i = i + 1 <=> i += 1 <=> i++
 */
