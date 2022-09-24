<script>
import debounce from "lodash.debounce";

export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll()
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
          window.pageYOffset <=
            anchors[i].offsetTop + anchors[i].scrollHeight + 10
        ) {
          sidebarLinks.forEach((link) => {
            link.classList.remove("hash-active");
          });
          sidebarLinks[i].classList.add("hash-active");
          history.pushState({}, "", "#" + anchors[i].id);
        }
      }
    },
  },

  // beforeUnmount () {
  //   window.removeEventListener('scroll', this.onScroll)
  // }
};
</script>

<template>
  <div class="page-data">
    <div class="section">
      <br /><br />
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="step-content" ref="div1" id="intro">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div2">
              <h2>Arduino Nima</h2>
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
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div4">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div5">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div6">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" id="div7">
              <h2>Arduino Nima</h2>
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
          <div class="sticky">
            <span class="text-gradient h3">Bo'limlar</span>
            <ul>
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
            <div class="associate-section"></div>
          </div>
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
  width: clamp(130px, 80%, 600px);
}
@media (max-width: 992px) {
  .sticky {
    position: relative;
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
  color: var(--color) + 70;
  transition: 0;
}
.sidebar-links.hash-active {
  transition: all 0.5s;
  color: #213547;
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
  display: flex;
}
</style>