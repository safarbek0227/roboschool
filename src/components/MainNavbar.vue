<template>

      <nav>
    <a href="/" class="logo">
      <img alt="logo" src="@/assets/logo.png" />
      <span class="text-gradient">RoboSchool</span>
    </a>
    <ul  :class="[navbar ? '' : 'active', '']" >
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
      <i class="fa-regular  rb-md-block" :class="[navbar ? 'fa-bars' : 'fa-x', 'fa-bars']"  @click="this.navbar = !this.navbar;" ></i>
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
      navbar: true,
    };
  },
  watch: {
    '$route' () {
      this.navbar = true
    }
  },
};
</script>

<style>

nav {
    width: 100vw;
    top: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #42b983;
    background: #fff;
    padding: 5px 100px 5px 100px;
    z-index: 900;
}

nav a {
    /* font-family: "Kaushan Script", cursive !important; */

}

nav img {
    width: 60px;
    height: 60px;
    display: inline;
}

nav span {
    font-size: 32px;
    font-family: 'Segoe Print';
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
    color: #323658;
}

nav a:hover {
    text-decoration: unset;
    color: unset;
}

nav a.router-link-exact-active {
    color: #42b983;
}

nav .menu-bar {
    display: flex;
    align-items: center;
}

.menu-bar i {
    font-size: x-large;
    margin: 0px 5px;
}
.menu-bar i:hover{
    cursor: pointer;
}
nav .rb-md-block {
    display: none;
}

nav .menu-bar a.router-link-exact-active {
    color: unset;
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
        width: 50px;
        height: 50px;
    }

    nav span {
        font-size: 22px;
    }

    nav ul li {
        margin: 0 5px;
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
        width: 60px;
        height: 60px;
    }

    nav span {
        font-size: xx-large;
    }

    nav ul {
        width: 300px;
        height: 100vh;
        position: fixed;
        flex-direction: column;
        margin: 0;
        padding: 15px;
        background: #fff;
        box-shadow: 5px 8px 12px #eee;
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
        justify-content: space-around;
        background-color: #fff;
        padding: 20px 20px;
        bottom: 0;
        box-shadow: -2px -1px 7px #eee;
    }

    nav .menu-bar a.router-link-exact-active {
        color: #42b983;
        background-color: #eee;
        padding: 10px;
        border-radius: 15px;
        transition: all 0.2s;
    }

    nav .rb-md-block {
        display: block;
    }
}
</style>