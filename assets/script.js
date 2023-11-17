const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0; 

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
const slideDotsContainer = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  slideDotsContainer.prepend(dot);
}

updateBanner(); 

function updateBanner() {
  const currentSlide = slides[currentIndex];
  bannerImg.src = `./assets/images/slideshow/${currentSlide.image}`;
  bannerText.innerHTML = currentSlide.tagLine;

  
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
      dot.classList.toggle('dot_selected', index === currentIndex);
  });
}

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateBanner();
});

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateBanner();
});