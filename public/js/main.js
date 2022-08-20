const productsApiSale = "/products?salestatus=true";
const productsApiBestseller = "/products?categories=bestseller";
const productsApiGift= "/products?categories=bestseller";
const productsApiRandom= "/products/?id=1&id=2&id=3&id=4";

function start() {
  getProducts(function (products) {
    renderProduct(products);
  });
  getProductsSeller(function(products1) {
    renderProductSeller(products1);
  });
  getProductsGift(function(products2) {
    renderProductGift(products2);
  });
  getProductsRandom(function (products3) {
    renderProductRandom(products3);
  });
}
start();
// Lấy danh sách 
function getProducts(callback) {
  fetch(productsApiSale)
    .then((response) => response.json())
    .then(callback);
  
}
function getProductsSeller(callback) {
  fetch(productsApiBestseller)
    .then((response) => response.json())
    .then(callback);

}
function getProductsGift(callback) {
  fetch(productsApiGift)
    .then((response) => response.json())
    .then(callback);

}
function getProductsRandom(callback) {
  fetch(productsApiRandom)
    .then((response) => response.json())
    .then(callback);

}


let html = "";
function renderProduct(products) {
  const productListEl = document.querySelector("#sale .list-product");
  productListEl.innerHTML="";
  if (products.length == 0) {
    productListEl.innerHTML = "Không có sản phẩm nào"
  }
  let html = products.map(function(product) {
    return `<div class="col-md-4 col-sm-6 col-lg-3 col-6">
    <div class="item shadow p-3 mb-2 bg-body rounded">
      <div class="row">
        <div class="col">
          <div class="image-product">
            <img src="${product.imageproduct}" alt="anh san pham">
            <div class="btn-view mx-auto d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#quickview-modal">
              <p class="my-0">Xem nhanh</p>
            </div>
            <div class="saleoff d-flex align-item-center text-white text-center">
              <p class="">Sale ${Math.floor(((product.price - product.price_sale)/product.price) *100)}%</p>
            </div>
            <div class="like">
              <span class="like-icon fs-4"><i class="fa-solid fa-heart"></i></span>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col">
        <a href="./product-details.html">
        <div class="product-info">
            <p class="product-brand">${product.brandname}</p>
            <p class="product-name">${product.name}</p>
            <div class="product-price">
              <p class="price-sale mb-2">${formatMoney(product.price_sale)}</p>
              <p class="price text-decoration-line-through m-0">${formatMoney(product.price)}</p>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  </div>`;
  })
  productListEl.innerHTML = html.join('');
  
}

// Lấy danh sách 
function getProducts(callback) {
  fetch(productsApiSale)
    .then((response) => response.json())
    .then(callback);
  
}
function getProductsSeller(callback) {
  fetch(productsApiBestseller)
    .then((response) => response.json())
    .then(callback);

}


let html1 = "";
function renderProductSeller(products) {
  const productListEl1 = document.querySelector("#best-seller .list-product-seller");
  productListEl1.innerHTML="";
  if (products.length == 0) {
    productListEl1.innerHTML = "Không có sản phẩm nào"
  }
  let html1 = products.map(function(product) {
    return `<div class="col-md-4 col-sm-6 col-lg-3 col-6">
    <div class="item shadow p-3 mb-2 bg-body rounded">
      <div class="row">
        <div class="col">
          <div class="image-product">
            <img src="${product.imageproduct}" alt="anh san pham">
            <div class="btn-view mx-auto d-flex justify-content-center align-items-center">
              <p class="my-0">Xem nhanh</p>
            </div>
            <div class="saleoff d-flex align-item-center text-white text-center">
              <p class="">Sale ${Math.floor(((product.price - product.price_sale)/product.price) *100)}%</p>
            </div>
            <div class="like">
              <span class="like-icon fs-4"><i class="fa-solid fa-heart"></i></span>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col">
        <a href="./product-details.html">
        <div class="product-info">
            <p class="product-brand">${product.brandname}</p>
            <p class="product-name">${product.name}</p>
            <div class="product-price">
              <p class="price-sale mb-2">${formatMoney(product.price_sale)}</p>
              <p class="price text-decoration-line-through m-0">${formatMoney(product.price)}</p>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  </div>`;
  })
  productListEl1.innerHTML = html1.join('');
  
}
let html2 = "";
function renderProductGift(products2) {
  const productListEl2 = document.querySelector(".list-product-gift");
  productListEl2.innerHTML="";
  if (products2.length == 0) {
    productListEl2.innerHTML = "Không có sản phẩm nào"
  }
  let html1 = products2.map(function(product) {
    return `<div class="col-md-4 col-sm-6 col-lg-3 col-6">
    <div class="item shadow p-3 mb-2 bg-body rounded">
      <div class="row">
        <div class="col">
          <div class="image-product">
            <img src="${product.imageproduct}" alt="anh san pham">
            <div class="btn-view mx-auto d-flex justify-content-center align-items-center">
              <p class="my-0">Xem nhanh</p>
            </div>
            <div class="saleoff d-flex align-item-center text-white text-center">
              <p class="">Sale ${Math.floor(((product.price - product.price_sale)/product.price) *100)}%</p>
            </div>
            <div class="like">
              <span class="like-icon fs-4"><i class="fa-solid fa-heart"></i></span>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col">
        <a href="./product-details.html">
        <div class="product-info">
            <p class="product-brand">${product.brandname}</p>
            <p class="product-name">${product.name}</p>
            <div class="product-price">
              <p class="price-sale mb-2">${formatMoney(product.price_sale)}</p>
              <p class="price text-decoration-line-through m-0">${formatMoney(product.price)}</p>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
  </div>`;
  })
  productListEl2.innerHTML = html1.join('');
  
}
function renderProductRandom(products3) {
  const productListEl3 = document.querySelector(".list-product-user");
  productListEl3.innerHTML="";
  if (products3.length == 0) {
    productListEl3.innerHTML = "Không có sản phẩm nào"
  }
  let html1 = products3.map(function(product) {
    return `<div class="col-md-6 col-sm-6">
    <div class="item shadow p-3 mb-2 bg-body rounded me-0">
      <div class="row">
        <div class="col">
          <div class="image-product">
            <img src="${product.imageproduct}" alt="anh san pham">
            <div class="btn-view mx-auto d-flex justify-content-center align-items-center">
              <p class="my-0">Xem nhanh</p>
            </div>
            <div class="saleoff d-flex align-item-center text-white text-center">
              <p class="">Sale ${Math.floor(((product.price - product.price_sale)/product.price) *100)}%</p>
            </div>
            <div class="like">
              <span class="like-icon fs-4"><i class="fa-solid fa-heart"></i></span>
            </div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col">
        <a href="./product-details.html">
        <div class="product-info">
            <p class="product-brand">${product.brandname}</p>
            <p class="product-name">${product.name}</p>
            <div class="product-price">
              <p class="price-sale mb-2">${formatMoney(product.price_sale)}</p>
              <p class="price text-decoration-line-through m-0">${formatMoney(product.price)}</p>
            </div>
          </div>
        </a>
          
        </div>
      </div>
    </div>
  </div>`;
  })
  productListEl3.innerHTML = html1.join('');
  
}
// Format tiền
const formatMoney = number =>{
  return  number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
 

// Menu-reponsive
$(".menu-bar").click(function () {
  $(".sidebar").css("left", "0");
  $(".overlay").css("display", "block");
  $('body').css('overflow', 'hidden');

})
// close btn
$(".close-icon").click(function () {
  $(".sidebar-brand-women").css("left", "-360px");
  $(".sidebar-women").css("left", "-360px");
  $(".sidebar-brand").css("left", "-360px");
  $(".sidebar-men").css("left", "-360px");
  $(".sidebar").css("left", "-360px");
  $(".overlay").css("display", "none");

})

$(window).resize(function () {
  if ($(window).innerWidth > 768) {
    $(".sidebar").css("left", "-360px");
    $(".overlay").css("display", "none");
  }
})

// Sidebar-men
$(".menu-men").click(function () {
  $(".sidebar-men").css("left", "0");
  $(".overlay").css("display", "block");

})

$(".menu-women").click(function () {
  $(".sidebar-women").css("left", "0");
  $(".overlay").css("display", "block");
})
$(".btn-back-icon").click(function () {
  $(".sidebar-men").css("left", "-360px");
  $(".sidebar-women").css("left", "-360px");
})

$(".btn-back-icon-1").click(function () {
  $(".sidebar-brand").css("left", "-360px");
  $(".sidebar-brand-women").css("left", "-360px");
})

$(".brand-menu").click(function () {
  $(".sidebar-brand").css("left", "0");
  $(".sidebar-brand-women").css("left", "0");
})

// Sidebar-table,mobile
$(".subnav .menu-item-tablet:nth-child(1)").click(function () {
  $(".sidebar-men").css("left", "0");
  $(".overlay").css("display", "block");
})
$(".subnav .menu-item-tablet:nth-child(2)").click(function () {
  $(".sidebar-women").css("left", "0");
  $(".overlay").css("display", "block");
})



// Initialise Carousel ********************************
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
  Sync: {
    target: mainCarousel,
    friction: 0,
  },
  Dots: false,
  Navigation: false,
  center: true,
  slidesPerPage: 1,
  infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
  Carousel: {
    on: {
      change: (that) => {
        mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
          friction: 0,
        });
      },
    },
  },
});
// Slider brand
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,

    },
    576: {
      items: 3,

    },
    992: {
      items: 5,


    }
  },
  // loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  nav: false,
});



// Countdown clock
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const nowYear = new Date().getFullYear();
const saleTime = new Date("August 21 2022 00:00:00");
const timeCountdown = function () {
  const nowTime = new Date();
  const diff = saleTime - nowTime;
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}
setInterval(timeCountdown, 1000);

function scrolll() {
  let left = document.querySelector(".list-product");
  left.scrollBy(350, 0)
}
function scrollr() {
  let right = document.querySelector(".list-product");
  right.scrollBy(-350, 0)
}
function scrolll1() {
  let left = document.querySelector(".list-product-seller");
  left.scrollBy(350, 0)
}
function scrollr1() {
  let right = document.querySelector(".list-product-seller");
  right.scrollBy(-350, 0)
}
function scrolll2() {
  let left = document.querySelector(".list-product-gift");
  left.scrollBy(350, 0)
}
function scrollr2() {
  let right = document.querySelector(".list-product-gift");
  right.scrollBy(-350, 0)
}



