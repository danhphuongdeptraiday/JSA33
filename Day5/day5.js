// let a = document.getElementById("text");
// a.innerText = "Hello World";
// a.id = "abc";
// a.style.color = "red";
// a.style.backgroundColor = "pink";
// console.log(a.innerText);

let list_line3 = document.getElementsByClassName("line3");
let li = document.getElementsByTagName("li");
console.log(li.length);
console.log(list_line3);
// [line3].innerText => ko d67 FDEc

console.log(list_line3[0].innerText);
console.log(list_line3[1].innerText);
console.log(list_line3[3].innerText);

document.title = "Website";

// Thêm 1 thẻ vào trong body
let divElement = document.createElement("div");
divElement.innerText = "À nhong sê ô";
divElement.className = "line1";
// divElement.style.backgroundColor = "red";
// Thêm 1 thẻ vào trong body
document.body.appendChild(divElement);

// Thêm 1 thẻ vào 1 thẻ khác
let ul_element = document.getElementsByClassName("ul_element");
let newLi = document.createElement("li");
newLi.innerText = "Hello my friend";

//VD: Thêm thẻ li vào ul
ul_element[0].appendChild(newLi);

function print() {}
let text = document.getElementById("text");
text.style.backgroundColor = "pink";

function changeColor() {
  if (text.style.backgroundColor == "pink") {
    text.style.backgroundColor = "blue";
  } else if (text.style.backgroundColor == "blue") {
    text.style.backgroundColor = "pink";
  }
}

let a = 8;
do {
  console.log(a);
  a++;
} while (a > 10);
{
}
