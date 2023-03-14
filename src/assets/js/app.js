document.addEventListener("DOMContentLoaded", () => {


  //= components/


  const tl1 = gsap.timeline();

  tl1.to('.main-runString__runString ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })


  let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
  });

  let swiperDevelop = new Swiper(".mainDevelop", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".btnNext",
      prevEl: ".btnPrev",
    },
  });

  let dozeSwiper = new Swiper(".dozeSwiper", {
    slidesPerView: 1.6,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-paginationDoze",
      clickable: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 2.6,
      },
    }
  });

  const tl2 = gsap.timeline();

  tl2.to('.main-sellRunLine ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })

  let activePopap = document.querySelectorAll('#activePopap')
  let popap = document.querySelector('.main-sell__popap')
  let cross = document.querySelector('#crossIco')

  console.log(cross)

  activePopap.forEach(e => {
    e.addEventListener('click', () => {
      popap.classList.add('transitionActive')
    })
  })

  cross.addEventListener('click', () => {
    popap.classList.remove('transitionActive')
  })

})



