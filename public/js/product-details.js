let params = new URLSearchParams(window.location.search);
let id = params.get("id");

const breadcrumbItemActive = document.querySelector(".breadcrumb-item.active");
const ratingEl = document.querySelector(".rating-number");
const brandNameEl = document.querySelector(".brand-name");
const priceEl = document.querySelector(".product-price");
const pricesaleEl = document.querySelector(".product-sale");
const nameEl = document.querySelector("#detail .product-name");
const statusEl = document.querySelector("#detail .status");
const descEl = document.querySelector(".product-desc");
const productSizeEl = document.querySelector(".size");
const imageEl = document.querySelector(".carousel");
const imageElThumbnail = document.querySelector(".carousel.max-w-xl.mx-auto.mb-3");
const sizeEl = document.querySelector(".size p");
const btnMinusCount = document.querySelector(".btn-minus-count");
const btnPlusCount = document.querySelector(".btn-plus-count");
const countEl = document.querySelector(".count");
const btnAddToCart = document.querySelector(".btn-add-to-cart");
const amountProduct = document.querySelector("#header .amount")
let product;
let count = 1;
let products = [];
    async function getProduct() {
        try {
            res =  await axios.get("/products");
             products = res.data;
            
            if (id) {
                product = products.find(p => p.id == id);
                console.log(products)
                renderProduct(product);
                if (!product) {
                    window.location.href = "./404.html";
                }
        
                document.title = product.name;
                breadcrumbItemActive.innerText = product.name;
                
            } else {
                window.location.href = "./404.html";
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
    // Hiển thị sản phẩm
    const renderProduct = (obj) => {
        ratingEl.innerText = obj.rate;
        nameEl.innerText = obj.name;
        priceEl.innerText = formatMoney(obj.price_sale);
        pricesaleEl.innerText = formatMoney(obj.price);
        statusEl.innerText = obj.status;
        descEl.innerText = obj.desc;
        // Render size 
        productSizeEl.innerHTML = obj.size.map(size => {
           return `<p class="border py-2 px-3 border-dark me-2" onclick="choseSize(this)">${size}</p>`
        }).join("");
        // render image
        imageEl.innerHTML = "";
        let html = "";
        obj.imageproduct.forEach(p => {
            html += `
            <div class="carousel__slide" data-src="${p}" data-fancybox="gallery">
                <img src="${p}" />
            </div>
            `
        })
        imageEl.innerHTML = html;
        imageElThumbnail.innerHTML = "";
        let html1 = "";
        obj.imageproduct.forEach(e => {
            html1 += `
            <div class="carousel__slide">
            <img class="panzoom__content" src="${e}" />
            </div>`
        })
        imageElThumbnail.innerHTML  = html1;
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

        
    }
    // Chọn size 
    const choseSize = e => {
        const selectedEl = document.querySelector(".selected");
        if(selectedEl) {
            selectedEl.classList.remove("selected", "bg-dark", "text-white");
        }
        e.classList.add("selected", "bg-dark", "text-white");
    }

    // Tăng số lượng
    btnPlusCount.addEventListener("click", function() {
        count++;
        countEl.innerText = count;
    })
    // Giảm số lượng
    btnMinusCount.addEventListener("click", function() {
        count--;
        if (count < 1) {
            count = 1;
        }
        countEl.innerText = count;
    })
    let amount = 0;
    //Thêm vào giỏ hàng
    btnAddToCart.addEventListener("click",function() {
        const sizeSelectedEl = document.querySelector(".product-size .selected");
        if (!sizeSelectedEl) {
            alert("Vui lòng chọn size trước khi thêm vào giỏ hàng");
            return;
        
        }
         amount++;
         amountProduct.innerHTML = amount;
        alert("Thêm vào giỏ hang thành công");

    })
    // Format tiền
const formatMoney = number =>{
    return  number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  }
    getProduct();




$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    responsiveClass:true,
      responsive:{
          0:{
              items:2,
              
          },
          576:{
              items:3,
              
          },
          992:{
              items:5,
              
              
          }
      },
    // loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: false,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });