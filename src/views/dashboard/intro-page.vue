<script>
import debounce from 'lodash.debounce'

export default {
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll: debounce(function () {
      this.setActiveHash()
    }),

    setActiveHash () {
        let sidebarLinks = [].slice.call(document.querySelectorAll('.sidebar-links'))
        let anchors =  [].slice.call(document.querySelectorAll(".step-content"))
          .filter(anchor => sidebarLinks.some(sidebarLink => sidebarLink.hash === '#'+anchor.id))
        for(let i = 0; i < anchors.length; i++){
        if (
          window.pageYOffset >= anchors[i].offsetTop &&
          window.pageYOffset <=
            anchors[i].offsetTop + anchors[i].scrollHeight
        ) {
          sidebarLinks.forEach(link => {link.classList.remove('h');});
          sidebarLinks[i].classList.add('h')
          history.pushState({}, "", "#" + anchors[i].id);
        }
      }
    } 
  },

  beforeUnmount () {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<template>
  <div class="page-data">
    <div class="section">
      <br /><br />
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="step-content" ref="div1" id="intro">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div2">
              <h1>Arduino Nima</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div3">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div4">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div5">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div6">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div7">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
            <ul  class="sticky">
              <li>
                <router-link to="#intro" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div2" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div3" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div4" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div5" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div6" class="sidebar-links">Div1</router-link>
              </li>
              <li>
                <router-link to="#div7" class="sidebar-links">Div1</router-link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
a.linkActiveClass {
  color: black;
}
.section {
  padding: 25px;
}
.section .card {
  padding: 20px;
  border-right: 1px solid #05050520;
}
.card .step-content .header-anchor {
  padding: 25px;
}

.sticky {
  position: sticky;
  list-style: none;
  top: 100px;
}
.w-100 {
  width: 100%;
}
img {
  max-width: 100%;
  max-height: 600px;
}
@media (max-width: 992px) {
  .sticky {
    position: relative;
  }
}
.sticky li{
  font-size: larger;
  list-style: none;
}
.sidebar-links{
  transition: 0;
}
.sidebar-links.h{
  transition: 0.5s;
  margin-left: 10px;
  color: black;
}
</style>