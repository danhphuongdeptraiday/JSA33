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
  for (let i = 1; i <= list_product.length; i++) {
    if (input.value == i) {
      let take_li = document.querySelector(`li:nth-child(${input.value})`);
      take_li.style.backgroundColor = "red";
    } else {
      let take_li = document.querySelector(`li:nth-child(${i})`);
      take_li.style.backgroundColor = "white";
    }
  }
});

for (let i = 1; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    // Shirt
    if (i == 1) {
      for (let z = 0; z < list_product.length; z++) {
        if (list_product[z].category == "shirt") {
          createListProduct(list_product[z]);
        }
      }
    }

    //Shoes
    else if (i == 2) {
      for (let z = 0; z < list_product.length; z++) {
        if (list_product[z].category == "shoes") {
          createListProduct(list_product[z]);
        }
      }
    }

    // Bag
    else if (i == 3) {
      for (let z = 0; z < list_product.length; z++) {
        if (list_product[z].category == "bag") {
          createListProduct(list_product[z]);
        }
      }
    }
  });
}
