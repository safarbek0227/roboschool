<script>
import debounce from "lodash.debounce";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import { notification } from "@/Extra_lib";

import "swiper/css";
import "swiper/css/pagination";
export default {
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
        breakpoint: {
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          365: {
            slidesPerView: 1.5,
            spaceBetween: 0,
            centeredSlides: true,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 80,
            centeredSlides: false,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 80,
            centeredSlides: false,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 0,
            centeredSlides: false,
          },
        },
      },
      windowWidth: window.innerWidth,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  methods: {
    onScroll: debounce(function () {
      this.setActiveHash();
    }),
    setActiveHash() {
      let sidebarLinks = [].slice.call(
        document.querySelectorAll(".sidebar-links")
      );
      let anchors = [].slice
        .call(document.querySelectorAll(".step-content"))
        .filter((anchor) =>
          sidebarLinks.some(
            (sidebarLink) => sidebarLink.hash === "#" + anchor.id
          )
        );

      for (let i = 0; i < anchors.length; i++) {
        if (
          window.pageYOffset >= anchors[i].offsetTop &&
          window.pageYOffset <= anchors[i].offsetTop + anchors[i].scrollHeight
        ) {
          sidebarLinks.forEach((link) => {
            link.classList.remove("hash-active");
          });
          history.pushState({}, "", "#" + anchors[i].id);
          sidebarLinks[i].classList.add("hash-active");
        }
      }
    },

    copy() {
      navigator.clipboard.writeText(this.$refs.codeblock.innerText);
      notification("Copied to clipboard! 🎉", "success-alert", 1500);
    },
  },
};
</script>

<template>
  <div class="page-data">
    <div class="section">
      <div class="first-intro col-xl-8">
        <h1>What is the page</h1>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          hic quibusdam molestiae aspernatur esse atque illum non rerum id
          voluptatem? Consequuntur molestias perferendis nulla repudiandae.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="information">
            <div class="step-content" ref="div1" id="intro">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div2">
              <h2>Arduino Nima</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
              <div class="rules">
                <i class="fa-light fa-circle-exclamation"></i>
                <h4>Tip.1</h4>
                <br /><br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto tenetur sit et quod iusto est quia recusandae at
                  repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                  consectetur modi voluptas, officiis ullam.
                </p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div3">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div4">
              <h2>Code</h2>
              <div class="code-card">
                <div class="tools">
                  <div class="circle-content">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <i class="fa-regular fa-copy" @click="copy"></i>
                </div>
                <div class="card__content" ref="codeblock">
                  <code>
                    void setup() {
                    <br /><br />
                    // put your setup code here, to run once:
                    <br /><br />
                    }
                    <br /><br />
                    void loop() {
                    <br /><br />
                    // put your main code here, to run repeatedly:
                    <br /><br />
                    }
                  </code>
                </div>
              </div>
            </div>
            <div class="step-content" id="div5">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content robo-detail" id="div6">
              <h2>Buy detail</h2>
              <swiper
                :slidesPerView="'auto'"
                :breakpoints="swiperOptions.breakpoints"
                :loop="true"
                :centeredSlides="true"
                :autoplay="{
                  delay: 1500,
                  disableOnInteraction: false,
                }"
                :pagination="{
                  clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
              >
                <swiper-slide>
                  <div class="detail card">
                    <div class="card-img"></div>
                    <a href="" target="_blank" class="card-info">
                      <p class="text-title">Product title</p>
                      <p class="text-body">Product description and details</p>
                    </a>
                    <div class="card-footer">
                      <span class="text-title">$499.49</span>
                      <a href="" target="_blank" class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                          ></path>
                          <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                          ></path>
                          <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="detail card">
                    <div class="card-img"></div>
                    <a href="" target="_blank" class="card-info">
                      <p class="text-title">Product title</p>
                      <p class="text-body">Product description and details</p>
                    </a>
                    <div class="card-footer">
                      <span class="text-title">$499.49</span>
                      <a href="" target="_blank" class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                          ></path>
                          <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                          ></path>
                          <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="detail card">
                    <div class="card-img"></div>
                    <a href="" target="_blank" class="card-info">
                      <p class="text-title">Product title</p>
                      <p class="text-body">Product description and details</p>
                    </a>
                    <div class="card-footer">
                      <span class="text-title">$499.49</span>
                      <a href="" target="_blank" class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                          ></path>
                          <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                          ></path>
                          <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="detail card">
                    <div class="card-img"></div>
                    <a href="" target="_blank" class="card-info">
                      <p class="text-title">Product title</p>
                      <p class="text-body">Product description and details</p>
                    </a>
                    <div class="card-footer">
                      <span class="text-title">$499.49</span>
                      <a href="" target="_blank" class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                          ></path>
                          <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                          ></path>
                          <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="detail card">
                    <div class="card-img"></div>
                    <a href="" target="_blank" class="card-info">
                      <p class="text-title">Product title</p>
                      <p class="text-body">Product description and details</p>
                    </a>
                    <div class="card-footer">
                      <span class="text-title">$499.49</span>
                      <a href="" target="_blank" class="card-button">
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path
                            d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"
                          ></path>
                          <path
                            d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"
                          ></path>
                          <path
                            d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="step-content" id="div7">
              <h2>Arduino Nima</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
              <br /><br /><br />
              <div class="row">
                <div class="col">
                  <div class="box-content">
                    <a href="">
                      <h4>try tutorial</h4>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, praesentium.
                      </h6>
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="box-content">
                    <a href="">
                      <h4>try tutorial</h4>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, praesentium.
                      </h6>
                    </a>
                  </div>
                </div>
                <div class="col">
                  <div class="box-content">
                    <a href="">
                      <h4>try tutorial</h4>
                      <h6>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima, praesentium.
                      </h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rb-md-none">
          <div class="sticky">
            <span class="text-gradient h3 rb-md-none">Bu sahifada</span>
            <ul class="rb-md-none">
              <li>
                <router-link to="#intro" class="sidebar-links"
                  >Intro</router-link
                >
              </li>
              <li>
                <router-link to="#div2" class="sidebar-links"
                  >start</router-link
                >
              </li>
              <li>
                <router-link to="#div3" class="sidebar-links"
                  >build</router-link
                >
              </li>
              <li>
                <router-link to="#div4" class="sidebar-links">code</router-link>
              </li>
              <li>
                <router-link to="#div5" class="sidebar-links"
                  >result</router-link
                >
              </li>
              <li>
                <router-link to="#div6" class="sidebar-links">buy</router-link>
              </li>
              <li>
                <router-link to="#div7" class="sidebar-links"
                  >contact</router-link
                >
              </li>
            </ul>
            <div class="associate-section">
              <h3>Sponsor</h3>
              <div class="display-grid">
                <a href="http://">
                  <img src="/images/roboschool.png" alt="" />
                </a>
                <a href="http://">
                  <img src="/images/roboschool.png" alt="" />
                </a>
                <a href="http://">
                  <img src="/images/roboschool.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="advertion col-xl-10 col-lg-12">
      <swiper
        :breakpoints="swiperOptions.breakpoint"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false,
        }"
        :modules="modules"
      >
        <swiper-slide>
          <div class="plan-card">
            <h2>Silver<span>For business services</span></h2>
            <div class="etiquet-price">
              <p>254.99</p>
              <div></div>
            </div>
            <div class="benefits-list">
              <ul>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Analysis</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Consulting</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Facilitate</span>
                </li>
              </ul>
            </div>
            <div class="button-get-plan">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-rocket"
                >
                  <path
                    d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"
                  ></path>
                </svg>
                <span>START PROJECT</span>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="plan-card">
            <h2>gold<span>For business services</span></h2>
            <div class="etiquet-price">
              <p>254.99</p>
              <div></div>
            </div>
            <div class="benefits-list">
              <ul>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Analysis</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Consulting</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Facilitate</span>
                </li>
              </ul>
            </div>
            <div class="button-get-plan">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-rocket"
                >
                  <path
                    d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"
                  ></path>
                </svg>
                <span>START PROJECT</span>
              </a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="plan-card">
            <h2>platinum<span>For business services</span></h2>
            <div class="etiquet-price">
              <p>254.99</p>
              <div></div>
            </div>
            <div class="benefits-list">
              <ul>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Analysis</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Consulting</span>
                </li>
                <li>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                    ></path></svg
                  ><span>Facilitate</span>
                </li>
              </ul>
            </div>
            <div class="button-get-plan">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-rocket"
                >
                  <path
                    d="M156.6 384.9L125.7 353.1C117.2 345.5 114.2 333.1 117.1 321.8C120.1 312.9 124.1 301.3 129.8 288H24C15.38 288 7.414 283.4 3.146 275.9C-1.123 268.4-1.042 259.2 3.357 251.8L55.83 163.3C68.79 141.4 92.33 127.1 117.8 127.1H200C202.4 124 204.8 120.3 207.2 116.7C289.1-4.07 411.1-8.142 483.9 5.275C495.6 7.414 504.6 16.43 506.7 28.06C520.1 100.9 516.1 222.9 395.3 304.8C391.8 307.2 387.1 309.6 384 311.1V394.2C384 419.7 370.6 443.2 348.7 456.2L260.2 508.6C252.8 513 243.6 513.1 236.1 508.9C228.6 504.6 224 496.6 224 488V380.8C209.9 385.6 197.6 389.7 188.3 392.7C177.1 396.3 164.9 393.2 156.6 384.9V384.9zM384 167.1C406.1 167.1 424 150.1 424 127.1C424 105.9 406.1 87.1 384 87.1C361.9 87.1 344 105.9 344 127.1C344 150.1 361.9 167.1 384 167.1z"
                  ></path>
                </svg>
                <span>START PROJECT</span>
              </a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style scoped>
a.linkActiveClass {
  color: black;
}
.section {
  padding: 25px 0;
}
.section .information {
  padding: 20px 10%;
  border-right: 0.5px solid #05050520;
}
.first-intro {
  padding: 20px 5%;
}
.information .step-content {
  padding: 80px 15px;
  border-top: 1px solid var(--hight-light);
}
.step-content h2 {
  font-weight: 700;
  font-size: xx-large;
  transition: all 1s;
}
.step-content h2:hover::before {
  content: "#";
  position: absolute;
  margin-left: -25px;
  color: #42b983;
}
.step-content p {
  font-size: larger;
}

.sticky {
  position: sticky;
  list-style: none;
  top: 100px;
}
.sticky span {
  font-weight: 700;
}
.w-100 {
  width: 100%;
}
.information img {
  width: clamp(130px, 80%, 600px);
}
.rb-md-none {
  display: block;
}
@media (max-width: 1440px) {
  .section .information {
    padding: 20px;
  }
}
@media (max-width: 1200px) {
  .section .information {
    padding: 20px 10%;
  }
}
@media (max-width: 992px) {
  .sticky {
    position: relative;
  }
  .rb-md-none {
    display: none;
  }
}
@media (max-width: 576px) {
  .section .card {
    padding: 5px;
  }
  .information .step-content {
    padding: 80px 0px;
  }
  .section .information {
    border-right: none;
    padding: 20px;
  }
}

.sticky ul {
  margin-left: -30px;
}
.sticky ul li {
  font-size: 20px;
  list-style: none;
  margin: 10px;
  text-transform: capitalize;
}
.sidebar-links {
  color: var(--color);
}
.sidebar-links.hash-active {
  font-weight: 600;
}
.sidebar-links.hash-active::before {
  content: "";
  position: absolute;
  margin-left: -10px;
  width: 4px;
  height: 20px;
  border-radius: 5px;
  background: #42b983;
}
.associate-section {
  margin: 30px 0;
}
.associate-section .display-grid {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
}
.associate-section a {
  width: 45%;
  margin: 0 5px;
}

.associate-section img {
  width: 100%;
}

.code-card {
  width: 100%;
  height: auto;
  padding: 15px 35px;
  background-color: var(--nav-color);
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px;
}
.circle-content {
  display: flex;
}

.code-card .card__content {
  overflow: auto;
  padding: 10px;
  color: var(--color);
  font-size: larger;
  font-style: oblique;
  overflow: auto;
}
.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
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
  background: var(--nav-color);
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
.box-content {
  width: 100%;
  margin: 15px 0;
  background-color: var(--nav-color);
  color: var(--color);
  padding: 28px 36px;
  border-radius: 8px;
  font-weight: 500;
}
.box-content h4 {
  color: #42b983;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.box-content h6 {
  color: var(--color);
}
.box-content:hover {
  box-shadow: 0px 0px 0px 3px #00ca4e;
}
/* @media (max-width: 1200px) {
  .box-content {
    width: 12rem;
    padding: 25px;
  }
}
@media (max-width: 576px) {
  .box-content {
    min-height: 250px;
    padding: 25px 15px;
  }
} */

.advertion {
  display: block;
  margin: 20px 5%;
}
.advertion .plan-card {
  background: var(--nav-color);
  width: 15rem;
  padding: 20px 2rem 20px 2rem;
  margin: 25px 0;
  border-radius: 10px;
  border-bottom: 4px solid #000446;
  box-shadow: 0 6px 30px var(--shadow);
  font-family: "Poppins", sans-serif;
}

.advertion .plan-card h2 {
  margin-bottom: 15px;
  font-size: 27px;
  font-weight: 600;
}

.advertion .plan-card h2 span {
  display: block;
  color: var(--hight-light);
  font-size: 12px;
  font-weight: 400;
}

.advertion .etiquet-price {
  position: relative;
  background: #fdbd4a;
  width: 14.46rem;
  margin-left: -0.65rem;
  padding: 0.2rem 1.2rem;
  border-radius: 5px 0 0 5px;
}

.advertion .etiquet-price p {
  margin: 0;
  padding-top: 0.4rem;
  display: flex;
  font-size: 1.9rem;
  font-weight: 500;
}

.advertion .etiquet-price p:before {
  content: "$";
  margin-right: 5px;
  font-size: 15px;
  font-weight: 300;
}

.advertion .etiquet-price p:after {
  content: "/ handle";
  margin-left: 5px;
  font-size: 15px;
  font-weight: 300;
}

.advertion .etiquet-price div {
  position: absolute;
  bottom: -23px;
  right: 0px;
  width: 0;
  height: 0;
  border-top: 13px solid #c58102;
  border-bottom: 10px solid transparent;
  border-right: 13px solid transparent;
  z-index: -6;
}

.advertion .benefits-list {
  margin-top: 16px;
}

.advertion .benefits-list ul {
  padding: 0;
  font-size: 14px;
}

.advertion .benefits-list ul li {
  color: var(--hight-light);
  list-style: none;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.advertion .benefits-list ul li svg {
  width: 0.9rem;
  fill: currentColor;
}

.advertion .benefits-list ul li span {
  font-weight: 300;
}

.advertion .button-get-plan {
  display: flex;
  justify-content: center;
  margin-top: 1.2rem;
}

.advertion .button-get-plan a {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #42b983;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.05rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.advertion .button-get-plan a:hover {
  transform: translateY(-3%);
  box-shadow: 0 3px 10px var(--shadow);
}

.advertion .button-get-plan .svg-rocket {
  margin-right: 10px;
  width: 0.9rem;
  fill: currentColor;
}
@media (max-width: 1200px) {
  .advertion {
    margin: 20px;
  }
}
@media (max-width: 576px) {
  .advertion {
    padding: 10px;
  }
  .advertion .etiquet-price {
    width: 13.46rem;
  }
  .advertion .plan-card {
    width: 14rem;
  }
}
</style>