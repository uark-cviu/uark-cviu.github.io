window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    var options = {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    }
	// var interval = setInterval(function(){
	// 	var countForVideo = document.getElementById('video').readyState;
	// 	if(countForVideo == 4){
	// 	  document.getElementById('vid').play();
	// 	  clearInterval(interval);
	// 	}
	//   },2000);

    var carousels = bulmaCarousel.attach('.carousel', options);

    bulmaSlider.attach();

    document.addEventListener("DOMContentLoaded", function() {
		var zoomImgs = document.querySelectorAll(".zoom-img");
		var popup = document.getElementById("popup");
		var popupImg = document.getElementById("popup-img");
		var popupOverlay = document.getElementById("popup-overlay");
	
		zoomImgs.forEach(function(img) {
			img.addEventListener("mouseover", function() {
				popupImg.src = img.src;
				popup.classList.add("active");
				popupOverlay.classList.add("active");
			});
			img.addEventListener("mouseout", function() {
				popup.classList.remove("active");
				popupOverlay.classList.remove("active");
			});
		});
	
		popupOverlay.addEventListener("mouseover", function() {
			popup.classList.remove("active");
			popupOverlay.classList.remove("active");
		});
	});
	
});
