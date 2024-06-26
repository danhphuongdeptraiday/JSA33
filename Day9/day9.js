// LocalStorage là gì ?
/**
 * - Dữ liệu ở trên trình duyệt
 * - Không bị mất đi khi tắt trang web
 * - Dữ liệu đó sẽ luôn đồng bộ ở các trang mà giống url
 * - Mội máy tính sẽ có 1 IP khác nhau => dữ liệu ở local cx sẽ khác nhau
 * - key và value phải được lưu ở dạng string
 * - Mở
 */

// Lưu vào trong localStorage: localStorage.setItem("key", "value")

// localStorage.setItem("name", "Phương");
// localStorage.setItem("age", 100);
// localStorage.setItem("address", "Tây hồ");

// // Lấy dữ liệu ở trong localStorage: localStorage.getItem("key")
// let name_value = localStorage.getItem("name");
// console.log(name_value);

// let h1 = document.querySelector("h1");
// h1.innerText = name_value;

// Tạo thêm 2 thẻ p và thẻ a trong html thông DOM JS
// Thẻ p chứa giá trị của age
// Thẻ a chứa giá trị của address

// let p = document.createElement("p");
// p.innerText = localStorage.getItem("age");
// document.body.appendChild(p);

// let a = document.createElement("a");
// a.href = "https://www.youtube.com/";
// a.innerText = localStorage.getItem("address");
// document.body.appendChild(a);

// Lưu giá trị ở dạng object hoặc array vào localStorage
// JSON.stringify(object): Định dạng object thành kiểu string object
// let person = {
//   name: "Phương",
//   age: 100,
//   address: "Tây Hồ",
// };

// let person2 = {
//   name: "Lâm",
//   age: 10,
//   address: "Hai Bà Trưng",
// };

// let list_person = [];
// list_person.push(person);
// // Chú ý phần này
// localStorage.setItem("list_person", JSON.stringify(list_person));
// localStorage.setItem("person2", JSON.stringify(person2));
// localStorage.setItem("person", JSON.stringify(person));
// let person_from_local = JSON.parse(localStorage.getItem("person"));
// console.log(person_from_local);
// //

let search_container = document.querySelector(".search_container");
let input = document.querySelector("input");
let button = document.querySelector("button");

let get_list_search_data = JSON.parse(localStorage.getItem("list_search"));
if (get_list_search_data == null) {
  localStorage.setItem("list_search", JSON.stringify([]));
  window.location.reload();
} else {
  let id = get_list_search_data.length;
  button.addEventListener("click", function () {
    // Clear search value
    search_container.innerHTML = "";
    let date = new Date();
    let search_object = {
      id: id,
      date_search: date,
      content: input.value,
      status: false,
    };

    id = id + 1;
    get_list_search_data.push(search_object);
    // Lưu vào local
    localStorage.setItem("list_search", JSON.stringify(get_list_search_data));
    input.value = "";

    // gọi hàm
    render_search_history(get_list_search_data);
  });
}

function render_search_history(data) {
  for (let i = 0; i < data.length; i++) {
    let h3 = document.createElement("h3");
    h3.innerHTML = `
    <h3> 
      Kết quả lần ${data[i].id}:
    <span style="color: red; text-decoration: underline">${data[i].content}</span>
  </h3>`;
    search_container.appendChild(h3);
  }
}

render_search_history(get_list_search_data);

setTimeout(function () {
  console.log("hello");
}, 3000);
