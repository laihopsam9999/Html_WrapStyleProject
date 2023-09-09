var choose = 0;
var myCart = [];
var i, name, image, price;
var quality = 1;
function setCart(id, name, image, price, quality) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.price = price;
  this.quality = quality;
  this.totalProduct = this.price * this.quality;
}

function chooseImage(a) {
  this.choose = a;
  showDetailProduct();
}
function tanggiam(tt) {
  if (tt === true) {
    this.quality = quality + 1;
    document.getElementById("tanggiam").value = quality;
  } else if (quality > 1) {
    this.quality = quality - 1;
    document.getElementById("tanggiam").value = quality;
  } else {
  }
}
postSlide = (i) => {
  var mangao = [];
  mangao.push(
    productDetail[i].image1,
    productDetail[i].image2,
    productDetail[i].image3,
    productDetail[i].image4
  );

  document.getElementById("productDetailImageFrist").src = mangao[this.choose];
};

var showInfoProduct = (i) => {
  document.getElementById("category").innerHTML = productDetail[i].category;
  document.getElementById("productName").innerHTML =
    productDetail[i].productName;
  document.getElementById("productDetailIntro").innerHTML =
    productDetail[i].productIntro;
  document.getElementById("productDetailPrice").innerHTML =
    productDetail[i].price;
  document.getElementById("productDetailPriceSale").innerHTML =
    productDetail[i].priceSale;
};

var countDetailProductStar = (i) => {
  var sam = document.querySelector(".stars");

  for (let a = 0; a < productDetail[i].star; a++) {
    sam.append(sam2);
  }
};

var showContentDetailProduct = (i) => {
  document.getElementById("productDetailEnergy").innerHTML =
    productDetail[i].productEnegy;
  document.getElementById("productDetailMaterial").innerHTML =
    productDetail[i].productMaterial;
  document.getElementById("productDetailPowertrain").innerHTML =
    productDetail[i].productPowertrain;
  document.getElementById("productDetailEmotion").innerHTML =
    productDetail[i].productEmotion;
};
var bienhungDetailProduct = localStorage.getItem("bienhungDetailProduct");

var ShowDetailProductImage = (i) => {
  document.getElementById("productDetailImageOne").src =
    productDetail[i].image1;
  document.getElementById("productDetailImageTwo").src =
    productDetail[i].image2;
  document.getElementById("productDetailImageThree").src =
    productDetail[i].image3;
  document.getElementById("productDetailImageFour").src =
    productDetail[i].image4;
  document.getElementById("productDetailImageFive").src =
    productDetail[i].image5;
  document.getElementById("productDetailImageSix").src =
    productDetail[i].image6;
  document.getElementById("productDetailImageSeven").src =
    productDetail[i].image7;
  document.getElementById("productDetailImageEight").src =
    productDetail[i].image8;
  document.getElementById("productDetailImageNine").src =
    productDetail[i].image9;
  document.getElementById("productDetailImageTen").src =
    productDetail[i].image10;
  document.getElementById("productDetailImageEleven").src =
    productDetail[i].image11;
  document.getElementById("productDetailImageTwen").src =
    productDetail[i].image12;
};

showDetailProduct = () => {
  for (let i = 0; i <= productDetail.length; i++) {
    if (bienhungDetailProduct === productDetail[i]?.productDetailId) {
      showContentDetailProduct(i);
      postSlide(i);
      countDetailProductStar(i);
      showInfoProduct(i);
      ShowDetailProductImage(i);
    }
  }
};

addToCart = () => {
  for (let i = 0; i <= productDetail.length; i++) {
    if (bienhungDetailProduct === productDetail[i]?.productDetailId) {
      var objectCart = new setCart(
        productDetail[i].productDetailId,
        productDetail[i].productName,
        productDetail[i].image1,
        productDetail[i].priceSale,
        this.quality
      );
      myCart.push(objectCart);
      // console.log(myCart);
    }
  }
  alert("đặt hàng thành công");
  // XÉT LOCALSTORAGE
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify(myCart));
  } else if (localStorage.getItem("cart") !== null) {
    var arrayCart = JSON.parse(localStorage.getItem("cart"));
    let findArr = arrayCart.some((sp) => {
      return sp.id === objectCart.id;
    });
    if (findArr === false) {
      arrayCart.push(objectCart);
      localStorage.setItem("cart", JSON.stringify(arrayCart));
    }
    if (findArr === true) {
      for (var i = 0; i <= arrayCart.length; i++) {
        if (arrayCart[i]?.id === objectCart.id) {
          arrayCart[i].quality += objectCart.quality;
          arrayCart[i].totalProduct += objectCart.totalProduct;
          localStorage.setItem("cart", JSON.stringify(arrayCart));
        }
      }
    }
  }
  svgNumber();
};
showDetailProduct();
