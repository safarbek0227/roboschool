
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
    toggleTheme(){
      this.color = !this.color
      localStorage.setItem('color', this.color)
      document.documentElement.className  = this.color ? 'light': 'dark'
    }
  },
  mounted() {
    if (localStorage.color) {
      this.color = JSON.parse(localStorage.color);
      document.documentElement.className  = this.color ? 'light': 'dark'
    }
    else{
      this.color = window.matchMedia("(prefers-color-scheme: light)").matches;
      document.documentElement.className = this.color ? "light" : "dark";
    }
  },
};
</script>

<template>
  <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <ul :class="[navbar ? '' : 'active', '']">
      <li>
        <router-link to="/">Bosh sahifa</router-link>
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
      <router-link to="/learn">
        <i class="fa-regular fa-book rb-md-block" ></i>
      </router-link>
      <i class="fa-regular rb-md-block"
        :class="[navbar ? 'fa-bars' : 'fa-x']"
        @click="this.navbar = !this.navbar"
      ></i>
    </div>
  </nav>

  <router-view v-slot="{ Component }" @click="this.navbar = true">
    <transition name="scale" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

  <footer>
    <div class="container">
      
      <p>Texnologiya olamidagi so'ngi yangiliklarni ushbu sahifada <a href="">RoboSchool.uz/News</a> .</p>
      <p>Bizni <a href="">telegram</a> va <a href="">instagram</a>da kuzatib boring.</p>
      <br>
      <h4>©2023 <a href="">Safarbek</a></h4>
    </div>
  </footer>
</template>


<style scoped>

nav {
  width: 100vw;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #42b983;
  background: var(--nav-color);
  color: var(--color);
  padding: 5px 40px;
  z-index: 900;
}

nav a {
  /* font-family: "Kaushan Script", cursive !important; */
}

nav img {
  height: 45px;
  display: inline;
}

nav span {
  font-size: 28px;
}

nav ul {
  display: flex;
  font-size: x-large;
  list-style: none;
}

nav ul li {
  display: inline;
  margin: 0 15px;
}

nav .logo {
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--color);
  font-size: 20px;
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
nav ul svg{
  fill: var(--color);
}
.menu-bar i:hover {
  cursor: pointer;
}
nav .rb-md-block {
  display: none;
}

nav .menu-bar a.active {
  color: unset;
}
footer{
  width: 100vw;
  margin: 50px 0 0 0;
  padding: 50px 15px;
  background: var(--shadow);
} 
@media (max-width: 1080px) {
  nav {
    padding: 5px 45px;
    flex-wrap: wrap;
  }

  nav ul {
    flex-wrap: wrap;
  }

  nav img {
    height: 45px;
  }

  nav span {
    display: none;
    font-size: 22px;
  }

  nav ul li {
    margin: 0 5px;
  }

  nav a {
    font-size: large;
  }

  .menu-bar i {
    font-size: large;
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
    display: block;
    font-size: xx-large;
  }

  nav ul {
    width: 300px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    margin: 0;
    padding: 15px;
    background: var(--theme); 
    box-shadow: 5px 8px 12px  var(--shadow);
    z-index: -99;
    border-top: 1px solid #42b983;
    top: 90px;
    left: -300px;
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
    background: var(--theme); 
    padding: 20px 20px;
    bottom: 0;
    box-shadow: -2px -1px 7px var(--shadow);
  }
  .menu-bar i{
    font-size: xx-large;
  }

  nav .menu-bar a.active {
    color: #42b983;
    background-color:  var(--shadow);
    padding: 10px;
    border-radius: 15px;
    transition: all 0.2s;
  }

  nav .rb-md-block {
    display: block;
  }
  footer{
    margin: 0 0 60px;
  }
}
@media (max-width: 576px) {
  .menu-bar i{
    font-size: x-large;
  }
  
}

footer .container{
  margin: 0 auto;
}
footer p{
  font-size: x-large;
  margin: 5px 0;
}
.input-group {
  margin-top: 25px;
  width: 100%;
}

.input {
  min-height: 50px;
  width: 75%;
  padding: 0 1rem;
  color: var(--color);
  font-size: 15px;
  border: 1px solid #42b983;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  width: 25%;
  min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #42b983;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}
.settings{
  display: flex;
  align-items: center;
}
.site-control{
  display:flex;
  justify-content: center;
}
.site-control > *{
  margin: 10px;
}
@media (max-width: 768px) {
  .rb-md-none {
    display: none;
  }
}
@media (max-width: 576px){
  .button--submit {
    width: 40%;
  }
  .input {
    width: 60%;
  }
}
@media (max-width: 300px){
  .button--submit {
    width: 100%;
    margin-top: 10px;
    border-radius: 6px;
  }
  .input {
    border-radius: 6px;
    width: 100%;
  }
}
.button--submit:hover {
  background-color: #42b983;
}

.input:focus, .input:focus-visible {
  border-color: #42b983;
  outline: none;
}
</style>
