document.addEventListener("DOMContentLoaded", () => {


    //= components/


    const tl1 = gsap.timeline();

    tl1.to('.main-runString__runString ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })


    let swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: true,
    });

    



})



