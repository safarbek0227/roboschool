<script>
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";  
import { Swiper, SwiperSlide } from "swiper/vue";


export default {
  props: ["products"],
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          365: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 80,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1080: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
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
    return {
      modules: [Autoplay, Pagination],
    };
  },

};
</script>
<template>
  <div class="step-content robo-detail" id="div6">
    <h2>Buy detail</h2>
    <swiper
      :slidesPerView="'auto'"
      :breakpoints="swiperOptions.breakpoints"
      :loop="false"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="product in products" :key="product.id">
        <div class="detail card">
          <div class="card-img"></div>
          <a href="" target="_blank" class="card-info">
            <p class="text-title">{{ product.title }}</p>
            <p class="text-body">{{ product.description }}</p>
          </a>
          <div class="card-footer">
            <span class="text-title">${{ product.price }}</span>
            <a href="" target="_blank" class="card-button">
              <svg class="svg-icon" viewBox="0 0 20 20" data-v-23e60ff6=""><path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z" data-v-23e60ff6=""></path><path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z" data-v-23e60ff6=""></path><path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z" data-v-23e60ff6=""></path></svg>
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
.pagination {
  margin: 10px 10%;
}
.pagination .border-dashed {
  border: 1px dashed #00ca4e;
}

.robo-detail .swiper-slide {
  padding: 25px 0;
}
.robo-detail .swiper {
  padding: 20px;
}
.swiper {
  padding: 25px 0;
}
.detail.card {
  width: 190px;
  height: 300px;
  padding: 0.8em;
  border-radius:  10px;
  background: var(--nav-color);
  position: relative;
  overflow: visible;
box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
.detail.card a {
  color: var(--color);
}
.detail.card .card-img {
  background-color: #42b983;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;
}

.detail.card .card-info {
  padding-top: 10%;
}

.detail.card svg {
  fill: var(--color);
  width: 20px;
  height: 20px;
}

.detail.card .card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid var(--border-color);
}

.detail.card .text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.detail.card .text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}

.detail.card .card-button {
  border: 1px solid #252525;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
}

.detail.card .card-img:hover {
  transform: translateY(-25%);
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
    rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}
.detail.card .card-button:hover {
  border: 1px solid #42b983;
  background-color: #42b983;
}

</style>