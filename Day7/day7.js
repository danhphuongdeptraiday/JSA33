let list_product = [
  { name: "Chair", price: 26, availability: false, id: "1", category: "shirt" },
  { name: "Cup", price: 7, availability: true, id: "2", category: "shoes" },
  { name: "Table", price: 64, availability: true, id: "3", category: "shirt" },
  { name: "Vase", price: 16, availability: true, id: "4", category: "bag" },
  { name: "Flower", price: 26, availability: true, id: "5", category: "bag" },
  {
    name: "Bedsheet",
    price: 49,
    availability: true,
    id: "6",
    category: "shirt",
  },
  { name: "Mat", price: 69, availability: false, id: "7", category: "shirt" },
  { name: "Teapot", price: 13, availability: true, id: "8", category: "bag" },
  {
    name: "Large Bookshelf",
    price: 88,
    availability: true,
    id: "9",
    category: "shirt",
  },
  {
    name: "Small Bookshelf",
    price: 75,
    availability: true,
    id: "10",
    category: "bag",
  },
  {
    name: "Wardrobe",
    price: 82,
    availability: false,
    id: "11",
    category: "shirt",
  },
  { name: "Carpet", price: 45, availability: false, id: "12", category: "bag" },
];
let ul = document.querySelector("ul");
let button = document.querySelectorAll("button");
let input = document.querySelector("input");
input.max = list_product.length;

// Create ListProduct
function createListProduct(product) {
  let li = document.createElement("li");

  let status = "";
  //   Cách 1
  // check trạng thái
  if (product.availability == true) {
    status = "Có hàng";
  } else {
    status = "Hết hàng";
  }

  // Thêm vào HTML
  li.id = `product_id_${product.id}`;
  li.innerHTML = `
    ID: <b class="productID">${product.id}</b><br />
    Tên sản phẩm:
    <b class="productName">${product.name}</b> <br />
    Giá sản phẩm:
    <b class="productPrice">${product.price}</b><b>VND <br /></b> Trạng thái:
    <b class="productStatus">${
      product.availability == true ? "Còn hàng" : "Hết hàng"
    }</b>
    <br>
    Category: <b>${product.category}</b>
    `;
  ul.appendChild(li);
}

for (let i = 0; i < list_product.length; i++) {
  createListProduct(list_product[i]);
}

button[0].addEventListener("click", function () {
  let li_in_ul = ul.getElementsByTagName("li");
  // Tạo ta 1 mảng và bên trong mảng này sẽ chứa toàn bộ ID đang có trên các thẻ li trong ul
  let emptyArray = [];

  for (let i = 0; i < li_in_ul.length; i++) {
    let li_id = li_in_ul[i].getAttribute("id");
    emptyArray.push(li_id.substring(11, li_id.length));
  }

  console.log(emptyArray);

  for (let i = 0; i < emptyArray.length; i++) {
    if (input.value == emptyArray[i]) {
      let take_li = document.getElementById(`product_id_${emptyArray[i]}`);
      take_li.style.backgroundColor = "red";
    } else {
      let take_li = document.getElementById(`product_id_${emptyArray[i]}`);
      take_li.style.backgroundColor = "white";
    }
  }
});

// Render with category
function renderWithCategory(category) {
  ul.innerHTML = "";
  for (let z = 0; z < list_product.length; z++) {
    if (list_product[z].category == category) {
      createListProduct(list_product[z]);
    }
  }
}

for (let i = 1; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    renderWithCategory(button[i].innerText.toLowerCase());

    button[i].style.backgroundColor = "red";

    for (let z = 0; z < button.length; z++) {
      if (i != z) {
        button[z].style.backgroundColor = "";
      }
    }
    // // Shirt
    // if (i == 1) {
    //   ul.innerHTML = "";
    //   for (let z = 0; z < list_product.length; z++) {
    //     if (list_product[z].category == "shirt") {
    //       createListProduct(list_product[z]);
    //     }
    //   }
    // }

    // //Shoes
    // else if (i == 2) {
    //   ul.innerHTML = "";
    //   for (let z = 0; z < list_product.length; z++) {
    //     if (list_product[z].category == "shoes") {
    //       createListProduct(list_product[z]);
    //     }
    //   }
    // }

    // // Bag
    // else if (i == 3) {
    //   ul.innerHTML = "";
    //   for (let z = 0; z < list_product.length; z++) {
    //     if (list_product[z].category == "bag") {
    //       createListProduct(list_product[z]);
    //     }
    //   }
    // }
  });
}
