let text = document.getElementsByClassName("text"); // array
// text[0].innerText = "<h3>Hihi</h3>";
// console.log(text[0].innerHTML);

let array = ["A", "B", "C"]; // array = mảng
//            0    1    2
let person = {
  // object = đối tượng
  name: "David",
  age: 39,
};
console.log(person.name);
console.log(array[1]);

// addEventListener(): Có 2 đầu vào
// - Đầu vào thứ nhất là kiểu sự kiện muốn gán cho nút
// - Đầu vào thứ 2 là để thực thi chức năng khi tác động vào thẻ như đầu vào thứ nhất
let buttonOn = document.getElementById("buttonOn");
let buttonOff = document.getElementById("buttonOff");

// Gán sự kiện
buttonOn.addEventListener("click", function () {
  alert("On");
});

let button = document.getElementsByTagName("button");
let inputText = document.querySelector(".inputText");
button[2].addEventListener("click", function () {
  // b1. Tạo thẻ div
  let div_text = document.createElement("div");
  // b2. gán class text vào thẻ div
  div_text.className = "text";
  // b3. Tạo thẻ h1
  let h1_in_div_text = document.createElement("h1");
  // b4. Gán class hello_text
  h1_in_div_text.innerText = inputText.value;
  // b5. Gán nội dung vào thẻ h1
  h1_in_div_text.className = "hello_text";
  // b6. thêm thẻ h1 vào thẻ div
  div_text.appendChild(h1_in_div_text);
  // b7. thêm thẻ div vào body
  document.body.appendChild(div_text);

  // clear giá trị trong input
  inputText.value = "";
});

/**
 * b1. Tạo 1 thẻ div
 * b2. Gán class=text vào thẻ div
 * b3. Tạo thẻ 1 h1 và gán class = hello_text
 * b4. Thêm thẻ h1 vào thẻ div
 * b5. Thêm thẻ div vào body
 */

// thẻ input.value: để lấy giá trị trong chỗ nhập text
// function buttonOff() {
//   console.log("Off");
// }
