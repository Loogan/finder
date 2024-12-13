var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5, // Valor padrão para larguras menores que 600px
  spaceBetween: 30,
  grabCursor: true,
  autoHeight: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});