
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

export default {
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          0:{
            slidesPerView: 1,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>


<template>
  <transition name="fade">
    <div class="page">
      <div class="home container" id="introduce">
        <img src="@/assets/fixing-robot.png" alt="" />
        <h1>
          Bizning<span class="text-gradient">RoboSchool</span>ga xush kelibsiz
        </h1>
        <h3>
          Bizning saytda <a href="">Arduino</a> va
          <a href="">Robtotextnikani</a> onlayn o'rganing.
          <strong> O'zingizda kerakli</strong> buyumlarni bizning
          <a href="/shop"> sotuv bolimimizdan</a> sotib olishiz mumkin
        </h3>
        <br />
        <router-link to="learn" class="h3 unstyle text-gradient link"
          >Hoziroq boshlang <i class="fa-light fa-arrow-right-long"></i
        ></router-link>
      </div>
      <div id="information">
        <br>
      <div class="special-sponsor">
        <span>Special Sponsor</span>
        <div class="logo-content">
          <img src="@/assets/logo.png" alt="" />
          <span class="text-gradient">RoboSchool</span>
        </div>
        <span>the best way</span>
      </div>
      <div class="container text-left mt-5 text-light">
        <div class="row">
          <div class="col-md-4">
            <h6>Approachable</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iste tenetur cum quaerat doloremque ex odio aliquid pariatur
              reprehenderit magnam. Iste inventore vero debitis itaque?
            </p>
          </div>
          <div class="col-md-4">
            <h6>Performant</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iste tenetur cum quaerat doloremque ex odio aliquid pariatur
              reprehenderit magnam. Iste inventore vero debitis itaque?
            </p>
          </div>
          <div class="col-md-4">
            <h6>Versatile</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              iste tenetur cum quaerat doloremque ex odio aliquid pariatur
              reprehenderit magnam. Iste inventore vero debitis itaque?
            </p>
          </div>
        </div>
      </div>
      </div>
      <div class="sponsor container" id="sponsor">
        <br><br>
        <h1>Our sponsor</h1>
        <br><br>
        <div class="row">
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/roboschool.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/Asset.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/roboschool.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/Asset.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/roboschool.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/Asset.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/roboschool.png" alt="">
          </a>
          <a href="http://" class="col-6 col-sm-6 col-md-4 col-lg-4">
            <img src="/images/Asset.png" alt="">
          </a>
        </div>
      </div>
      <div class="Author container" id="author">
        <br />
        <br>
        <br>
        <h1>Our team</h1>
        <swiper
          :slidesPerView="'auto'"
          :breakpoints="swiperOptions.breakpoints"
          :autoplay="true" 
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card">
              <div class="card-img">
                <img src="@/assets/owner.jpg" alt="">
              </div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card">
              <div class="card-img"></div>
              <div class="card-info">
                <p class="text-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti repellat, consequuntur doloribus voluptate esse iure?
                </p>
                <p class="text-title">Autor</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </transition>
</template>

<style>
.home {
  margin-top: 20px;
}
.home img {
  width: clamp(130px, 80%, 320px);
}
.page > div{
  padding: 20px 0;
}

.special-sponsor {
  margin-top: 50px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #3c3c3c1f;
  border-bottom: 1px solid #3c3c3c1f;
}
.special-sponsor span {
  font-size: x-large;
  margin-right: 15px;
  margin-top: 5px;
  color: var(--hight-light);
}
.special-sponsor img {
  height: 40px;
}
.logo-content {
  display: flex;
  align-items: center;
}
.text-left {
  text-align: left;
}
.text-left p {
  color: var(--hight-light);
  font-size: 16px;
}
.text-left h6 {
  font-weight: 550;
}
.sponsor{
  text-align: left;
}


.sponsor img{
  max-width: 100%;
}
.sponsor .row > a{
  padding: 0 5px;
}


.Author .card {
  width: clamp(230px, 100%, 250px);
  height: 350px;
  background: var(--nav-color);
  overflow: visible;
  box-shadow: 0 5px 20px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Author .card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 0 1rem;
}

.Author .card-img {
  --size: 100px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  transform: translateY(-50%);
  background: #42caff;
  background: linear-gradient(to bottom, #42caff 0%, #e81aff 100%);
  position: relative;
  transition: all 0.5s ease-in-out;
}
.Author .card-img img{
  width: var(--size); 
  height: var(--size); 
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}

.Author .card-img::before {
  content: "";
  border-radius: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  border: 1rem solid var(--theme);
}

/*Text*/
.Author .text-title {
  text-transform: uppercase;
  font-size: 18px;
  color: #42caff;
  letter-spacing: 0.05rem;
}

.Author .text-body {
  font-size: 14px;
  text-align: center;
  color: #6f6d78;
  font-weight: 400;
  font-style: italic;
}

/*Hover*/
.Author .card:hover .card-img {
  --size: 130px;
  width: var(--size);
  height: var(--size);
}
.Author{
  display: block;
  text-align: -webkit-center;
}
.swiper {
  width: 100%;
  padding-top: 80px;
  padding-bottom: 80px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  padding: 10px;
}
@media (max-width: 768px) {
  img {
    width: clamp(130px, 80%, 250px);
  }
  .sponsor{
    text-align: center;
  }
}
@media (max-width: 576px) {
  .special-sponsor {
    flex-direction: column;
  }
  .special-sponsor span {
    font-size: large;
  }
  .text-left p {
    font-size: medium;
  }

}
@media (max-width: 300px) {
  .home h1{
    font-size: 16px;
  }
  .home h3{
    font-size: 14px;
  }
  .card{
    width: 200px;
  }
}


</style>
