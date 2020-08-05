document.querySelectorAll(".footer-section .box ").forEach((item) => {

    // change image title price
    item.addEventListener("click", (event) => {
        let imgSrc = item.querySelector(".thumbnail img").src;
        let title = item.querySelector(".info-box h5").textContent;
        let price = item.querySelector(".info-box .price").textContent;

        document.querySelector(".banner-section h1").textContent = title;
        document.querySelector(".banner-section .price-box").textContent = price;
        document.querySelector(".banner-section .img-box img").src = imgSrc;

        // add animation class
        document.querySelector(".banner-section .info-box").classList.add("animation-left");
        document.querySelector(".banner-section .img-box").classList.add("animation-right");

        // remove animation class
        setTimeout(function () {
            document.querySelector(".banner-section .info-box").classList.remove("animation-left");
            document.querySelector(".banner-section .img-box").classList.remove("animation-right");
        }, 1000);
    });
});

setTimeout(function () {
    document.querySelector(".banner-section .info-box").classList.remove("animation-left");
    document.querySelector(".banner-section .img-box").classList.remove("animation-right");
}, 1000);

document.querySelector("header button").addEventListener("click", (event)=>{
    document.querySelector("header nav").classList.toggle("show");
});