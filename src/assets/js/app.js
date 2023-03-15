document.addEventListener("DOMContentLoaded", () => {


  //= components/


  const tl1 = gsap.timeline();

  tl1.to('.main-runString__runString ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })


  let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    grabCursor: true,
  });

  let swiperDevelop = new Swiper(".mainDevelop", {
    pagination: {
      el: ".swiper-pagination",
    },
    grabCursor: true,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".btnNext",
      prevEl: ".btnPrev",
    },
  });

  let dozeSwiper = new Swiper(".dozeSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".swiper-paginationDoze",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1.6,
      },

      700: {
        slidesPerView: 2.6,
      },
    }
  });

  var orderSwiper = new Swiper(".orderSwiper", {
    pagination: {
      el: ".swiper-paginationOrder",
      clickable: true,
    },
    grabCursor: true,
    autoplay: true,
  });

  const tl2 = gsap.timeline();

  tl2.to('.main-sellRunLine ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })

  let activePopap = document.querySelectorAll('#activePopap')
  let popap = document.querySelector('.main-sell__popap')
  let cross = document.querySelector('#crossIco')
  let leftCross = document.querySelector('#crossIcoLeft')



  activePopap.forEach(e => {
    e.addEventListener('click', () => {
      popap.classList.add('transitionActive')
    })
  })

  cross.addEventListener('click', () => {
    popap.classList.remove('transitionActive')
  })

  leftCross.addEventListener('click', () => {
    popap.classList.remove('transitionActive')
  })

  let orderList = document.querySelectorAll('.main-order .swiper-pagination-bullet')

  orderList.forEach((e, id) => {
    e.innerHTML = id + 1
  })



})



