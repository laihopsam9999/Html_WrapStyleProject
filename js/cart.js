let tableCart = document.getElementById("tableCart");
let arrCart = JSON.parse(localStorage.getItem("cart"));
let transportFee = 100;
// START LOAD DATA TO TABLE
loadDataToTable = () => {
  tableCart.innerHTML = arrCart
    .map((cartProduct, index) => {
      if (index >= 0 && index <= 3) {
        return `
    <tr>
      <th scope="row" >${index + 1}</th>
      <td>
        <div class="nameProduct" >
          <div class="nameProduct-image">
            <img src="${cartProduct.image}" alt="" />
          </div>
          <div class="nameProduct-title" >
            <p>${cartProduct.name}</p>
          </div>
        </div>
      </td>
      <td id="price"><p>$<span>${cartProduct.price}</span></p></td>
      <td>
        <input
        value="${cartProduct.quality}"
        onchange="tinh()"
          id="quality"
          style="width: 3rem; text-align: center; height: 2rem"
          type="number"
        />
      </td>
      <td id="priceProductTotal"><p>$<span>${
        cartProduct.totalProduct
      }</span></p></td>
      <td id="priceProductTotal"><Button id="deleteCartButton">Xóa</Button></td>
    </tr>`;
      }
    })
    .join("");
  document.getElementById("cartNumberInTable").innerHTML =
    " " + "(" + arrCart.length + ")";
};
// END LOAD DATA TO TABLE
totalAllPrice = () => {
  document.getElementById("transportFee").innerHTML = transportFee;
  var totalAllProduct = arrCart.reduce((total, sp) => {
    return (total += sp.totalProduct);
  }, 0);
  document.getElementById("totalAllPrice").innerHTML = totalAllProduct;
  let totalBill = transportFee + totalAllProduct;
  document.getElementById("totalBill").innerHTML = totalBill;
};

loadDataToTable();
totalAllPrice();
