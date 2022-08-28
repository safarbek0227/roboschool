<template>
  <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <ul :class="[navbar ? '' : 'active', '']">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li><router-link to="/learn">Learn</router-link></li>
      <li><router-link to="/about">Shop</router-link></li>
      <li><router-link to="/about">New</router-link></li>
      <li><router-link to="/about">Contact</router-link></li>
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
      <i
        class="fa-regular rb-md-block"
        :class="[navbar ? 'fa-bars' : 'fa-x', 'fa-bars']"
        @click="this.navbar = !this.navbar"
      ></i>
    </div>
  </nav>


    <transition name="scale" mode="out-in">
      <div class="page">
        <img src="/images/404.png" alt="" style="max-width: 100%; max-height: 80%">
        <h2><a @click="$router.go(-1)" class="h3 unstyle text-gradient link">Orqaga qaytish <i class="fa-light fa-arrow-right-long"></i></a></h2>
        
      </div>
    </transition>

</template>


<script>
export default {
  data() {
    return {
      navbar: true,
    };
  },
  watch: {
    $route() {
      this.navbar = true;
    },
  },
}
</script>

<style>
  @import url('@/assets/navbar.css');
  .page{
    display: flex;
    padding: 70px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>