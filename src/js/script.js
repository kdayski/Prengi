$(document).ready(function(){
	$('.slider_inner').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 420,
				settings: {
					dots: false,
					arrows: false
				},
				breakpoint: 1200,
				settings: {
					dots: true,
					arrows: false
				}
			}
	  	]
	});
});
window.addEventListener('DOMContentLoaded', function () {
	let slides = document.querySelectorAll('.decision_slider-slide'),
		slideIndex = 1,
		left = document.querySelector('.left-arrow'),
		right = document.querySelector('.right-arrow'),
		sliderName = document.querySelectorAll('.decision_slider-theme'),
		dotsWrap = document.querySelector('.decision_slider-themes');

	showSlide(slideIndex);

	function showSlide(n) {
		if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
		}
		slides.forEach((item) => item.style.display = 'none');
		slides.forEach((item) => item.classList.remove('fade'));
		sliderName.forEach((item) => item.classList.remove('active'));
		slides[slideIndex - 1].style.display = 'block';
		slides[slideIndex - 1].classList.add('fade');
		sliderName[slideIndex - 1].classList.add('active');
	}

	function plusSlide(n) {
		showSlide(slideIndex += n);
	}

	left.addEventListener('click', function() {
		plusSlide(-1);
	});

	right.addEventListener('click', function() {
		plusSlide(1);
	});

	function currentSlide(n) {
        showSlide(slideIndex = n);
    }

	dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < sliderName.length + 1; i++) {
            if (event.target.classList.contains('decision_slider-theme') && event.target == sliderName[i-1]) {
                currentSlide(i);
            }
        }
    });
});