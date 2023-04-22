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
      <li><router-link to="/learn">Darsliklar</router-link></li>
      <li><router-link to="/shop">Xarid qilish</router-link></li>
      <li><router-link to="/news">Yangiliklar</router-link></li>
      <li><router-link to="/contact">Bog'lanish</router-link></li>
      <li class="site-control">
        <i class="fa-duotone rb-md-block"  :class="[color ? 'fa-sun' : 'fa-moon']" @click="toggleTheme" ></i>
        <a href="#" class="rb-md-block">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="28px"
            height="28px"
            viewBox="0 0 24 24"
            style="enable-background: new 0 0 24 24"
            xml:space="preserve"
          >
            <defs></defs>
            <path style="fill: none" d="M0,0h23.74v24H0V0z" />
            <path
              d="M12.73,15.07l-2.51-2.51l0.03-0.03c1.72-1.94,2.95-4.17,3.67-6.53h2.9V4H9.89V2H7.91v2H0.99v1.99h11.05
    c-0.66,1.93-1.71,3.76-3.14,5.36C7.98,10.32,7.22,9.19,6.62,8H4.64c0.72,1.63,1.71,3.17,2.95,4.56l-5.03,5.02L3.96,19l4.95-5
    l3.08,3.11C11.98,17.11,12.73,15.07,12.73,15.07z M18.3,10h-1.98l-4.45,12h1.98l1.11-3h4.7l1.12,3h1.98L18.3,10z M15.71,17l1.6-4.33
    l1.6,4.33C18.91,17,15.71,17,15.71,17z"
            />
          </svg>
        </a>
      </li>
    </ul>
    <div class="menu-bar">
      <i class="fa-duotone rb-md-none"  :class="[color ? 'fa-sun' : 'fa-moon']" @click="toggleTheme" ></i>
      <a href="#" class="rb-md-none">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="28px"
          height="28px"
          viewBox="0 0 24 24"
          style="enable-background: new 0 0 24 24"
          xml:space="preserve"
        >
          <defs></defs>
          <path style="fill: none" d="M0,0h23.74v24H0V0z" />
          <path
            d="M12.73,15.07l-2.51-2.51l0.03-0.03c1.72-1.94,2.95-4.17,3.67-6.53h2.9V4H9.89V2H7.91v2H0.99v1.99h11.05
  c-0.66,1.93-1.71,3.76-3.14,5.36C7.98,10.32,7.22,9.19,6.62,8H4.64c0.72,1.63,1.71,3.17,2.95,4.56l-5.03,5.02L3.96,19l4.95-5
  l3.08,3.11C11.98,17.11,12.73,15.07,12.73,15.07z M18.3,10h-1.98l-4.45,12h1.98l1.11-3h4.7l1.12,3h1.98L18.3,10z M15.71,17l1.6-4.33
  l1.6,4.33C18.91,17,15.71,17,15.71,17z"
          />
        </svg>
      </a>
      <router-link to="/profile">
        <i class="fa-regular fa-user"></i>
      </router-link>
      <router-link to="/about">
        <i class="fa-regular fa-cart-flatbed-boxes"></i>
      </router-link>
      <router-link to="/">
        <i class="fa-regular fa-home rb-md-block"></i>
      </router-link>
      <i class="fa-regular fa-cog rb-md-block" ></i>
      <i class="fa-regular rb-md-block"
        :class="[navbar ? 'fa-bars' : 'fa-x']"
        @click="this.navbar = !this.navbar"
      ></i>
    </div>
  </nav>
  <transition name="scale" mode="out-in">
    <div class="page center">
      <img
        src="/images/404.png"
        alt=""
        style="max-width: 100%; max-height: 80%"
      />
      <h2>
        <a @click="$router.go(-1)" class="h3 unstyle text-gradient link"
          >Orqaga qaytish <i class="fa-light fa-arrow-right-long"></i
        ></a>
      </h2>
    </div>
  </transition>
</template>




<script>
export default {
  data() {
    return {
      navbar: true,
      color: true,
    };
  },
  watch: {
    $route() {
      this.navbar = true;
    },
  },
  methods: {
    toggleTheme() {
      this.color = !this.color;
      localStorage.setItem("color", this.color);
      document.documentElement.className = this.color ? "light" : "dark";
    },
  },
  mounted() {
    if (localStorage.color) {
      this.color = JSON.parse(localStorage.color);
      document.documentElement.className = this.color ? "light" : "dark";
    }
  },
};
</script>


<style>
@import url("@/assets/navbar.css");
.page.center {
  display: flex;
  padding: 100px 5px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>