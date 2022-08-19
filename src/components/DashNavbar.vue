
<template>
  <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <div class="menu-bar" >
      <router-link to="/profile">
        <i class="fa-regular fa-user"></i>
      </router-link>
      <router-link to="/contact">
        <i class="fa-regular fa-magnifying-glass"></i>
      </router-link>
      <router-link to="/">
        <i class="fa-regular fa-home rb-md-block"></i>
      </router-link>
      <router-link to="/about">
        <i class="fa-regular fa-cart-flatbed-boxes"></i>
      </router-link>
      <i
        class="fa-regular rb-md-block"
        :class="[navbar ? 'fa-bars' : 'fa-x', 'fa-bars']"
        @click="this.navbar = !this.navbar"
      ></i>
    </div>
  </nav>
  <div class="content">
    <div class="sidebar" :class="[navbar ? '' : 'active', '']">
      <div class="card">
        <div class="tools">
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
        <div class="card__content">
          <div class="part-learn">
            <h5 class="text-primary m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-warning m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-succes m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-primary m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-warning m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-succes m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-primary m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-warning m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
          <div class="part-learn">
            <h5 class="text-succes m-0">
              <i class="fa-solid fa-book-open conic-gradient"></i>
              Intro
            </h5>
            <ul>
              <li><router-link :to="{ name: 'docs', params: { name: 'hello' }}">Introduction</router-link></li>
              <li><router-link :to="{name: 'intro'}">setup</router-link></li>
              <li><router-link :to="{name: 'home'}">Quick start</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom-content">
        <a href="https://t.me/RoboschoolUz"><i class="fa-brands fa-telegram"></i></a>
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <a href=""><i class="fa-brands fa-facebook"></i></a>
        <a href=""><i class="fa-solid fa-envelope"></i></a>
      </div>
    </div>
    <router-view v-slot="{ Component }" @click="this.navbar = true">
      <transition name="scale-slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


<script>
// import '@/assets/dashNavbar.css'
export default {
  data() {
    return {
      navbar: true,
    };
  },
};
</script>

<style>
@import url("@/assets/dashNavbar.css");
</style>

