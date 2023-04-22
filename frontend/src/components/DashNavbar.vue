
<template>
  <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
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
      <router-link to="/shop">
        <i class="fa-regular fa-store rb-md-block" ></i>
      </router-link>
      <i class="fa-regular rb-md-block"
        :class="[navbar ? 'fa-bars' : 'fa-x']"
        @click="this.navbar = !this.navbar"
      ></i>
    </div>
  </nav>
  <div class="content">
    <div class="sidebar" :class="[navbar ? '' : 'active', '']">
      <div class="overflow-auto">
        <ul>
          <li><span>Getting start</span></li>
          <li>
            <router-link :to="{ name: 'intro' }">Introduction</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'home' } }">Quick start</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'fours' } }" >Introduction</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'about' } }">Quick start</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'fours' } }">Introduction</router-link>
          </li>
          <li><span>Getting start</span></li>
          <li>
            <router-link :to="{ name: 'intro' }">Introduction</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'home' } }">Quick start</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'fours' } }">Introduction</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'about' } }">Quick start</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'docs', params: { slug: 'fours' } }">Introduction</router-link>
          </li>
          <li class="site-control">
            <i
              class="fa-duotone rb-md-block"
              :class="[color ? 'fa-sun' : 'fa-moon']"
              @click="toggleTheme"
            ></i>
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
      </div>
      <div class="footer-sidebar">
        <a href="#"><i class="fa-brands fa-telegram"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
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
    else{
      this.color = window.matchMedia("(prefers-color-scheme: light)").matches;
      document.documentElement.className = this.color ? "light" : "dark";
    }
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  .rb-md-none {
    display: none;
  }
}
nav {
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #42b983;
  border-bottom-right-radius: 45px;
  background: var(--nav-color);
  padding: 15px 100px 15px 25px;
  z-index: 90;
}

nav a {
  /* font-family: "Kaushan Script", cursive !important; */
}

nav img {
  height: 60px;
  display: inline;
}

nav span {
  font-size: 32px;
  /* font-family: "Segoe Print"; */
}

nav .logo {
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--color)
}

nav a:hover {
  text-decoration: unset;
  color: unset;
}

nav a.active {
  color: #42b983;
}

nav .menu-bar {
  display: flex;
  align-items: center;
}

.menu-bar i {
  color: var(--color);
  font-size: x-large;
  margin: 0px 6px;
}
nav .menu-bar svg{
  fill: var(--color);
  margin-top: 5px;
}
ul svg{
  fill: var(--color);
}
.menu-bar i:hover {
  cursor: pointer;
}
nav .rb-md-block,
ul .rb-md-block {
  display: none;
}

nav .sidebar-controler{
  display: none;
}
nav .menu-bar a.active {
  color: unset;
}

.content {
  display: flex;
  max-width: 2000px;
  margin: auto;
}
.sidebar {
  position: -webkit-fixed;
  position: fixed;
  display: flex;
  top: 0;
  width: 280px;
  height: 100vh;
  text-align: left;
  background: var(--nav-color);
  padding: 90px 10px 45px 10px;
  border-bottom-right-radius: 35px;
  flex-direction: column;
  z-index: 5;
}
.sidebar .overflow-auto{
  height: 100%;
}
.sidebar .footer-sidebar{
  margin-top: 30px;
  width: 100%;
  display: flex;
}
.sidebar .footer-sidebar a{
  color: #2c3e50;
}
.sidebar .footer-sidebar i{
  font-size: xx-large;
  margin: 5px 13px;
}
.sidebar ul{
  font-size: 20px;
  list-style: none;
  padding-inline-start: 10px;
  margin-top: 25px;
  margin-left: 10px;
}
.sidebar ul span{
  color: var(--color);
  line-height: 20px;
  font-size: 18px;
  font-weight: 700;
}
.sidebar ul li{
  margin-top: 10px;
}
.sidebar ul a{
  font-size: 18px;
  color: var(--color);
  padding-left: 5px;
  transition: border 0s;
}
.sidebar ul a.active{
  border-left: 4px solid #42b983;
}
.page-data{
  /* background-color: #F2F4F5; */
  width: calc(100vw - 320px);
  min-height: 100vh;
  margin-left: 300px;
  padding: 90px 5px;
  text-align: left;
  max-width: 2000px;
}



@media(max-width: 1200px){
  nav .sidebar-controler{
    display: block;
  }
  .sidebar {
    left: -300px;
  }
  .sidebar.active{
    left: 0;
  }
  .page-data{
    width: 99vw;
    margin-left: 0;
  }
}

@media (max-width: 1080px) {
  nav {
    padding: 5px 45px;
    flex-wrap: wrap;
  }

  nav img {
    height: 50px;
  }

  nav a {
    font-size: large;
  }

  .menu-bar i {
    font-size: x-large;
  }
}


@media (max-width: 768px) {
  nav {
    padding: 15px;
    z-index: 8;
    height: 90px;
    justify-content: center;
  }

  nav img {
    height: 60px;
  }

  nav span {
    font-size: x-large;
  }

  nav ul.active {
    left: 0;
  }

  nav ul li {
    margin: 15px 10px;
  }

  nav a {
    font-size: x-large;
  }

  nav .menu-bar {
    position: fixed;
    width: 100vw;
    height: 60px;
    justify-content: space-around;
    background-color: var(--nav-color);
    padding: 20px 20px;
    bottom: 0;
    box-shadow: -2px -1px 7px var(--shadow);
  }
  .menu-bar i{
    font-size: xx-large;
  }
  nav .menu-bar a.active {
    color: #42b983;
    padding: 10px;
    border-radius: 15px;
    transition: all 0.2s;
  }

  nav .rb-md-block,
  ul .rb-md-block {
    display: block;
  }
  .sidebar {
    padding-bottom: 80px;
  }
}

@media (max-width: 576px) {
.menu-bar i{
  font-size: x-large;
}
.bottom-content i{
  font-size: x-large;
}

}
.site-control{
  display:flex;
  
}
.site-control > *{
  margin: 10px;
  font-size: 25px;
}

.scale-slide-enter-active,
.scale-slide-leave-active {
z-index: -5;
  position: absolute;
  transition: all 0.85s ease;
}
.scale-slide-enter-from {
  left: -100%;
}
.scale-slide-enter-to {
  left: 0%;
}
.scale-slide-leave-from {
  transform: scale(1);
}
.scale-slide-leave-to {
  transform: scale(0.8);
}

</style>


