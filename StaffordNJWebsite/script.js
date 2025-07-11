window.addEventListener('DOMContentLoaded', () => {
  const bannerImages = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg'
  ];

  const randomImage = bannerImages[Math.floor(Math.random() * bannerImages.length)];
  document.getElementById('randomBanner').src = randomImage;
});