// Send a POST request
var sam = 1;

var product = document.querySelector(".mainproduct");
var searchProduct = document.getElementById("txtSearch");
// axios({
//   method: "get",
//   url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
// })
//   .then((rs) => {
//     console.log(rs.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// START RENDER PRODUCT LIST OUTSIDE INTERFACE
renderProduct = () => {
  this.product.innerHTML = productCar
    .map((item) => {
      return `
      <div class="product">
        <div class="product__image">
          <img src="${item.image}" alt="" srcset="" />
        </div>
        <div class="product__content">
          <h4>${item.productName}</h4>
          <div class="product__content--price">
            <p>${item.priceSale}</p>
            <p>${item.price}</p>
          </div>
          <div class="product__content--button">
            <button>Xem chi tiết</button>
          </div>
        </div>
      </div>
    `;
    })
    .join("");
};
renderProduct();
// END RENDER PRODUCT LIST OUTSIDE INTERFACE

// START SEARCH PRODUCTLIST
search = () => {
  this.product.innerHTML = productCar
    .map((item) => {
      if (
        item.productName
          .toUpperCase()
          .indexOf(this.searchProduct.value.toUpperCase()) !== -1
      ) {
        return `
        <div class="product">
          <div class="product__image">
            <img src="${item.image}" alt="" srcset="" />
          </div>
          <div class="product__content">
            <h4>${item.productName}</h4>
            <div class="product__content--price">
              <p>${item.priceSale}</p>
              <p>${item.price}</p>
            </div>
            <div class="product__content--button">
              <button>Xem chi tiết</button>
            </div>
          </div>
        </div>
      `;
      }
    })
    .join("");
};
search();
// END SEARCH PRODUCTLIST

// START PANIGATION
currentPage = (sam) => {
  this.product.innerHTML = productCar

    .map((item, index) => {
      if (index >= (sam - 1) * 8 && index < sam * 8) {
        return `
        <div class="product">
        <div class="product__image">
          <img src="${item.image}" alt="" srcset="" />
        </div>
        <div class="product__content">
          <h4>${item.productName}</h4>
          <div class="product__content--price">
            <p>$<span>${item.priceSale}</span></p>
            <p>$<span>${item.price}</span></p>
          </div>
          <div class="product__content--button">
            <button onclick ="detailProduct('${item.id}')" >Xem chi tiết</button>
          </div>
        </div>
      </div>
    `;
      }
    })
    .join("");
};

currentPage(sam);
prev = () => {
  anh = sam--;
  currentPage(sam);
};

next = () => {
  anh = ++sam;
  currentPage(anh);
};
// END PANIGATION

detailProduct = (id) => {
  console.log(id);
  localStorage.setItem("bienhungDetailProduct", id);
  window.location = "http://127.0.0.1:5500/html/DeltailProduct.html";
};
