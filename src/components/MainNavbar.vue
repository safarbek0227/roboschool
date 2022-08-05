<template>
      <nav>
    <a href="/" class="logo">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <ul  :class="navbar">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/shop">Shop</router-link></li>
      <li><router-link to="/news">New</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
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
      <i class="fa-regular fa-bars rb-md-block"  @click="toggleNavbar"></i>
    </div>
  </nav>


  <router-view v-slot="{ Component }">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  
</template>


<script>
export default {
  data() {
    return {
      navbar: '',
    };
  },
  methods: {
    toggleNavbar() {
        this.navbar = this.navbar === "" ? "active" : "";
    },
  },
};
</script>