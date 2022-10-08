<script>
import debounce from "lodash.debounce";
import { notification } from "@/Extra_lib";
export default {
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
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
          window.pageYOffset <= anchors[i].offsetTop + anchors[i].scrollHeight
        ) {
          sidebarLinks.forEach((link) => {
            link.classList.remove("hash-active");
          });
          history.pushState({}, "", "#" + anchors[i].id);
          sidebarLinks[i].classList.add("hash-active");
        }
      }
    },

    copy() {
      navigator.clipboard.writeText(this.$refs.codeblock.innerText);
      notification('Copied to clipboard! 🎉', 'success-alert', 1500)
    },
  },
};
</script>

<template>
  <div class="page-data">
    <div class="section">
      <br /><br />
      <div class="row">
        <div class="col-xl-8">
          <div class="information">
            <div class="step-content" ref="div1" id="intro">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div2">
              <h2>Arduino Nima</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div3">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div4">
              <h2>Code</h2>
              <div class="code-card">
                <div class="tools">
                  <div class="circle-content">
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
                  <i class="fa-regular fa-copy" @click="copy"></i>
                </div>
                <div class="card__content" ref="codeblock">
                  <pre><code>
void setup() { 
  // put your setup code here, to run once: 
}

void loop() {
    // put your main code here, to run repeatedly:
}
                </code></pre>
                </div>
              </div>
            </div>
            <div class="step-content" id="div5">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div6">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <div class="step-content" id="div7">
              <h2>Arduino Nima</h2>
              <img src="@/assets/arduino.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </p>
            </div>
            <br /><br /><br /><br /><br />
          </div>
        </div>
        <div class="col-xl-4">
          <div class="sticky">
            <span class="text-gradient h3 rb-md-none">Bu sahifada</span>
            <ul class="rb-md-none">
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
    <div class="section"></div>
  </div>
</template>

<style>
a.linkActiveClass {
  color: black;
}
.section {
  padding: 25px 0;
}
.section .information {
  padding: 20px;
  border-right: 1px solid #05050520;
}
.information .step-content {
  padding: 25px;
}
.step-content h2 {
  font-weight: 700;
  font-size: xx-large;
  transition: all 1s;
}
.step-content h2:hover::before {
  content: "#";
  margin-left: -20px;
  color: #42b983;
}
.step-content p {
  font-size: x-large;
}

.sticky {
  position: sticky;
  list-style: none;
  top: 100px;
}
.sticky span {
  font-weight: 700;
}
.w-100 {
  width: 100%;
}
img {
  width: clamp(130px, 80%, 600px);
}
.rb-md-none {
  display: initial;
}
@media (max-width: 768px) {
  .rb-md-none {
    display: none;
  }
}
@media (max-width: 992px) {
  .sticky {
    position: relative;
  }
}
@media (max-width: 576px) {
  .section .card {
    padding: 5px;
  }
  .information .step-content {
    padding: 0px;
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
  color: var(--color);
}
.sidebar-links.hash-active {
  font-weight: 600;
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

.code-card {
  width: 100%;
  height: auto;
  padding: 15px 35px;
  background-color: var(--nav-color);
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px;
}
.circle-content {
  display: flex;
}

.code-card .card__content {
  overflow: auto;
  padding: 20px;
  color: var(--color);
  font-size: larger;
  font-style: oblique;
}
.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
</style>