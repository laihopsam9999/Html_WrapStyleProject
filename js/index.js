// SLIDE NHÀ LÀM
var slider_img = document.querySelector(".slider-img");
var slider_img2 = document.querySelector(".slider-img2");
var slider_img3 = document.querySelector(".slider-img3");
var images = [
  "Huracan_STO_families_gallery_2.png",
  "Urus_pearl_capsule_Compositing_4terzi_2.png",
  "ultimae_coupe_Compositing_4terzi_00.png",
];
var temp;

function next() {
  for (var i = 0; i <= images.length; i++) {
    temp = images[0];
    images[0] = images[1];
    images[1] = images[2];
    images[2] = temp;
  }
  return setImg();
}

function prev() {
  for (var i = 0; i <= images.length; i++) {
    temp = images[2];
    images[2] = images[1];
    images[1] = images[0];
    images[0] = temp;
  }
  return setImg();
}

function setImg() {
  return (
    slider_img.setAttribute("src", "./../img/" + images[0]),
    slider_img2.setAttribute("src", "./../img/" + images[1]),
    slider_img3.setAttribute("src", "./../img/" + images[2])
  );
}

detailCarInd = (id) => {
  localStorage.setItem("carId", id);
};
