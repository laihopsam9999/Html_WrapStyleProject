// DOM CONFIG CAR
var image = document.getElementById("image");
var power = document.getElementById("power");
var nameModel = document.getElementById("nameCar");
var speedCar = document.getElementById("speedCar");
var miliCar = document.getElementById("mili");

// FUNCTION INNER CAR DETAIL
function superCar(id) {
  for (var i = 0; i < superCarArr.length; i++) {
    if (superCarArr[i].id === id) {
      const { id, name, nameConfig, model, power, speed, mili, image } =
        superCarArr[i];
      return (
        (this.power.innerHTML = power),
        (this.image.src = image),
        (this.nameModel.innerHTML = name),
        (this.speedCar.innerHTML = speed),
        (this.miliCar.innerHTML = mili)
      );
    }
  }
}

// DOM MENU IN MODEL
var menuListAvetador = document.querySelector(
  ".header__body--right--aventador"
);
var menuListHuracan = document.querySelector(".header__body--right--huracan");
var menuListUrus = document.querySelector(".header__body--right--urus");
var menuListLimit = document.querySelector(".header__body--right--limit");
var menuListConcept = document.querySelector(".header__body--right--concept");
var header = document.querySelector(".header");
var headerBodyModel = document.querySelector(".header-body__model");
var headerBodyButton = document.querySelector(".header-body__button");
var headerBodyCooprate = document.querySelector(".header-body__coperate");
var headerBodyActivity = document.querySelector(".header-body__activity");
var headerBodyShowCar = document.querySelector(".header__body--content");
var styleElem = document.head.appendChild(document.createElement("style"));

function aventadorLink() {
  menuListLimit.classList.remove("show");
  menuListConcept.classList.remove("show");
  menuListUrus.classList.remove("show");
  menuListHuracan.classList.remove("show");
  menuListAvetador.classList.add("show");
}
function huracanLink() {
  menuListLimit.classList.remove("show");
  menuListConcept.classList.remove("show");
  menuListUrus.classList.remove("show");
  menuListAvetador.classList.remove("show");
  menuListHuracan.classList.add("show");
}
function limitLink() {
  menuListLimit.classList.add("show");
  menuListConcept.classList.remove("show");
  menuListUrus.classList.remove("show");
  menuListAvetador.classList.remove("show");
  menuListHuracan.classList.remove("show");
}
function conceptLink() {
  menuListLimit.classList.remove("show");
  menuListConcept.classList.add("show");
  menuListUrus.classList.remove("show");
  menuListAvetador.classList.remove("show");
  menuListHuracan.classList.remove("show");
}
function urusLink() {
  menuListLimit.classList.remove("show");
  menuListConcept.classList.remove("show");
  menuListUrus.classList.add("show");
  menuListAvetador.classList.remove("show");
  menuListHuracan.classList.remove("show");
}
function preLink() {
  menuListLimit.classList.remove("show");
  menuListConcept.classList.remove("show");
  menuListUrus.classList.remove("show");
  menuListAvetador.classList.remove("show");
  menuListHuracan.classList.remove("show");
}

// <!-- START SCRIPT SHOW MODEL  -->
function showModel() {
  headerBodyActivity.classList.remove("showactivity");
  headerBodyCooprate.classList.remove("showcooprate");
  headerBodyButton.classList.remove("showButton");
  headerBodyShowCar.classList.remove("showcar2");
  header.classList.remove("show_header_activity");
  header.classList.remove("show_header_cooprate");
  header.classList.remove("show_header_button");
  header.classList.remove("show_header_model_car");
  touch.classList.remove("active");
  //show model
  document.querySelector(".header__body--close ").style.display = "block";
  headerBodyModel.classList.add("showcar");
  header.classList.add("show_header_model");
  styleElem.innerHTML = "#menuModel:before {width: 110%;}";
}
// <!-- END SCRIPT SHOW MODEL  -->
// <!-- START SCRIPT SHOW CAR  -->
function showCar() {
  touch.classList.remove("active");
  header.classList.remove("show_header_model");
  //show model
  headerBodyShowCar.classList.add("showcar2");
  header.classList.add("show_header_model_car");
}
// <!-- END SCRIPT SHOW CAR  -->
function showCooprate() {
  header.classList.remove("show_header_activity");
  header.classList.remove("show_header_model");
  header.classList.remove("show_header_button");
  header.classList.remove("show_header_model_car");
  headerBodyActivity.classList.remove("showactivity");
  headerBodyModel.classList.remove("showcar");
  headerBodyButton.classList.remove("showButton");
  touch.classList.remove("active");
  //show model
  document.querySelector(".header__body--close ").style.display = "block";
  headerBodyCooprate.classList.add("showcooprate");
  header.classList.add("show_header_cooprate");
  styleElem.innerHTML = "#menuCooprate:before {width: 110%;}";
}
// <!-- SCRIPT SHOW MODEL -->
// <!-- SCRIPT SHOW ACTIVITY  -->
function showActivity() {
  header.classList.remove("show_header_cooprate");
  header.classList.remove("show_header_model");
  header.classList.remove("show_header_button");
  header.classList.remove("show_header_model_car");
  headerBodyModel.classList.remove("showcar");
  headerBodyButton.classList.remove("showButton");
  headerBodyCooprate.classList.remove("showcooprate");
  touch.classList.remove("active");
  //show model
  document.querySelector(".header__body--close ").style.display = "block";
  headerBodyActivity.classList.add("showactivity");
  header.classList.add("show_header_activity");
  styleElem.innerHTML = "#menuActivity:before {width: 110%;}";
}
// <!-- SCRIPT SHOW ACTIVITY -->
// <!-- SCRIPT HEADER BODY BUTTON  -->
var touch = document.getElementById("touch");
touch.onclick = function () {
  header.classList.remove("show_header_activity");
  header.classList.remove("show_header_cooprate");
  header.classList.remove("show_header_model");
  header.classList.remove("show_header_model_car");
  headerBodyCooprate.classList.remove("showcooprate");
  headerBodyActivity.classList.remove("showactivity");
  headerBodyModel.classList.remove("showcar");
  styleElem.innerHTML = "#menuModel:before {width: 0%;}";
  // show button
  document.querySelector(".header__body--close ").style.display = "none";
  touch.classList.toggle("active");
  header.classList.toggle("show_header_button");
  headerBodyButton.classList.toggle("showButton");
};
// <!-- SCRIPT END BODY BUTTON  -->

// <!-- SCRIPT START ANIMATION CAR MODEL   -->

var configCarAnm = document.querySelector(
  ".header__body--content--config--button"
);
var configCarAnm2 = document.querySelector(
  ".header__body--content--config--content"
);
var configCarAnm3 = document.querySelector(
  ".header__body--content--power--content"
);
var configCarAnm4 = document.querySelector(
  ".header__body--content--speed--content"
);
var configCarAnm5 = document.querySelector(
  ".header__body--content--second--content"
);

var configCarAnm6 = document.querySelector(
  ".header__body--content--model--content"
);
var configCarAnm7 = document.querySelector(
  ".header__body--content--model--button"
);
function configAnimation() {
  configCarAnm.classList.add("fadeInLeft");
  configCarAnm2.classList.add("fadeInLeft");
  configCarAnm3.classList.add("fadeInLeft");
  configCarAnm4.classList.add("fadeInLeft");
  configCarAnm5.classList.add("fadeInLeft");
  configCarAnm6.classList.add("fadeInLeft");
  configCarAnm7.classList.add("fadeInLeft");
}
function configAnimation2() {
  configCarAnm.classList.remove("fadeInLeft");
  configCarAnm2.classList.remove("fadeInLeft");
  configCarAnm3.classList.remove("fadeInLeft");
  configCarAnm4.classList.remove("fadeInLeft");
  configCarAnm5.classList.remove("fadeInLeft");
  configCarAnm6.classList.remove("fadeInLeft");
  configCarAnm7.classList.remove("fadeInLeft");
}
// <!-- SCRIPT END ANIMATION CAR MODEL   -->

var carBehighName = document.getElementById("carBehighName");
var carType = document.getElementById("carType");
var carName = document.getElementById("carName");
var carImage = document.getElementById("carImage");
var detailLink = document.getElementById("detailLink");
// <!-- SCRIPT START CAR INTRODUCTION   -->
function carIntroduction(name) {
  for (var i = 0; i < carIntro.length; i++) {
    if (carIntro[i].id === name) {
      const { carBehighName, carType, carName, image, detailLink } =
        carIntro[i];
      return (
        (this.carBehighName.innerHTML = carBehighName),
        (this.carImage.src = image),
        (this.carType.innerHTML = carType),
        (this.carName.innerHTML = carName),
        (this.detailLink.src = detailLink)
      );
    }
  }
}
var carBeHighContent = document.querySelector(".introduction__behigh");
var carFrontTitle = document.querySelector(".introduction-front__title");
var carFrontImage = document.querySelector(".introduction-front__image ");
// <!-- SCRIPT END CAR INTRODUCTION   -->
// <!-- SCRIPT START ANIMATION CAR INTRODUCTION   -->
function configAnimationRigth() {
  carBeHighContent.classList.add("fadeInRight");
  carFrontTitle.classList.add("fadeInLeft");
  carFrontImage.classList.add("fadeInRight");
  // styleElem.innerHTML = "#sam2:before{width: 100%;}";
}
function configAnimationRigth2() {
  carBeHighContent.classList.remove("fadeInRight");
  carFrontTitle.classList.remove("fadeInLeft");
  carFrontImage.classList.remove("fadeInRight");
}
// <!-- SCRIPT END ANIMATION CAR INTRODUCTION   -->

var image1 = document.querySelector(".image1");

// <!-- SCRIPT START ANIMATION SLIDE SHOW CAR -->
function animationSlideShowCar() {
  // image1.classList.add("fadeInLeftSlideShow");
}
function animationSlideHideCar() {
  // image1.classList.add("fadeOutLeftSlideShow");
}

function svgNumber() {
  var cartNumber = JSON.parse(localStorage.getItem("cart"));
  if (cartNumber !== null) {
    let svgNumbers = document.getElementById("svgNumbers");
    document.getElementById("svgNumber").style.backgroundColor = "red";
    svgNumbers.innerHTML = cartNumber.length;
  }
}
svgNumber();
// <!-- SCRIPT START ANIMATION SLIDE SHOW CAR -->

closeEverything = () => {
  document.querySelector(".header__body--close ").style.display = "none";
  header.classList.remove("show_header_activity");
  header.classList.remove("show_header_cooprate");
  header.classList.remove("show_header_model");
  header.classList.remove("show_header_model_car");
  headerBodyCooprate.classList.remove("showcooprate");
  headerBodyActivity.classList.remove("showactivity");
  headerBodyModel.classList.remove("showcar");
  styleElem.innerHTML = "#menuModel:before {width: 0%;}";
};
