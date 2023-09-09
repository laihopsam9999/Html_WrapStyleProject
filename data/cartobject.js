// constructor
function cartProduct(id, productName, productPrice, color, productQuality) {
  this.id = id;
  this.productName = productName;
  this.productPrice = productPrice;
  this.color = color;
  this.productQuality = productQuality;
  priceProductTotal = () => {
    return +(productPrice * productQuality);
  };
}
