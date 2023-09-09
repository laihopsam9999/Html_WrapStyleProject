let playVideo = document.getElementById("myVideo");
var videoCarContent = document.querySelector(".videoCar__content");
var videoCar = document.querySelector(".videoCar");
var videoCarVideo = document.querySelector(".videoCar__video");
var videoCarVideoHide = document.querySelector(".videoCarHide__video");
playVideoCar = () => {
  playVideo.play();
  videoCarContent.style.display = "none";
  videoCar.style.position = "fixed";
  videoCar.style.top = "0px";
  videoCar.style.zIndex = "999";
  videoCar.style.position = "fixed";
  videoCar.style.backgroundColor = " rgba(0, 0, 0, 0.473)";
  videoCarVideo.style.display = "none";
  videoCarVideoHide.style.display = "block";
};

offVideoCar = () => {
  playVideo.pause();
  videoCarContent.style.display = "flex";
  videoCar.style.position = "none";
  videoCar.style.top = "none";
  videoCar.style.zIndex = "none";
  videoCar.style.backgroundColor = " transparent";
  videoCarVideo.style.display = "block";
  videoCarVideoHide.style.display = "none";
  videoCar.style.position = "static";
};
