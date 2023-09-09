var showContentDetailCar = (i) => {
  document.getElementById("carfuture__contentOne").innerHTML =
    carDetail[i].carContentOne;
  document.getElementById("carfuture__contentTwo").innerHTML =
    carDetail[i].carContentThree;
  document.getElementById("carfuture__contentThree").innerHTML =
    carDetail[i].carContentFive;
  document.getElementById("carfuture__contentFour").innerHTML =
    carDetail[i].carContentSix;
  document.getElementById("carfuture__contentFive").innerHTML =
    carDetail[i].carContentNine;
};

var showContentTitleCar = (i) => {
  document.getElementById("carfutureOneTitle").innerHTML =
    carDetail[i].carTitleOne;
  document.getElementById("carfutureTwoTitle").innerHTML =
    carDetail[i].carTitleTwo;
  document.getElementById("carfutureThreeTitle").innerHTML =
    carDetail[i].carTitleFive;
  document.getElementById("carfutureFourTitle").innerHTML =
    carDetail[i].carTitleSix;
  document.getElementById("carfutureFiveTitle").innerHTML =
    carDetail[i].carTitleNine;
};
var bienhung = localStorage.getItem("carId");

// showDetailCar();

var showCarBanner = (i) => {
  document.getElementById("bannerImage").src = carDetail[i].carBannerImage;
  document.getElementById("bannerCarName").innerHTML =
    carDetail[i].carBannerTitle;
};

var ShowDetailCarImage = (i) => {
  document.getElementById("carfutureImageOne").src = carDetail[i].carImageOne;
  document.getElementById("carfutureImageTwo").src = carDetail[i].carImageTwo;
  document.getElementById("carfutureImageThree").src =
    carDetail[i].carImageThree;
  document.getElementById("carfutureImageFour").src = carDetail[i].carImageFour;
  document.getElementById("carfutureImageFive").src = carDetail[i].carImageFive;
  document.getElementById("carfutureImageSix").src = carDetail[i].carImageSix;
  document.getElementById("carfutureImageSeven").src =
    carDetail[i].carImageSeven;
  document.getElementById("carfutureImageEight").src =
    carDetail[i].carImageEight;
  document.getElementById("carfutureImageNine").src = carDetail[i].carImageNine;
};

showDetailCar = () => {
  for (let i = 0; i <= carDetail.length; i++) {
    if (this.bienhung === carDetail[i].carDetailId) {
      this.showContentDetailCar(i);
      this.showContentTitleCar(i);
      this.showCarBanner(i);
      this.ShowDetailCarImage(i);
    }
  }
};
showDetailCar();
