
<template>
  <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <div class="menu-bar">
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
    <div class="sticky-top">
      <ul>
        <li>Intro</li>
      </ul>
    </div>
    </div>
    <div class="page-data">
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
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
@import url('@/assets/dashNavbar.css');

</style>

