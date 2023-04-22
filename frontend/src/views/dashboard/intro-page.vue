<script>
import debounce from "lodash.debounce";
import stepComponetVue from '@/components/step-componet.vue';
import sliderComponetVue from '@/components/slider-shop.vue';
import imgTest from '@/assets/arduino.png'
export default {
  data() {
    return {
      lists: [
        {
          slug: 'intro',
          name: 'Arduino',
          linker: 'Intro',
          image: imgTest,
          is_code: false,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur sit et quod iusto est quia recusandae at repellendus nihil? Culpa aspernatur deleniti itaque reiciendis consectetur modi voluptas, officiis ullam.'
        },
        {
          slug: 'start',
          name: 'Arduino',
          linker: 'Start',
          image: imgTest,
          is_code: false,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur sit et quod iusto est quia recusandae at repellendus nihil? Culpa aspernatur deleniti itaque reiciendis consectetur modi voluptas, officiis ullam.'
        },
        {
          slug: 'build',
          linker: 'Build',
          image: imgTest,
          is_code: false,
          name: 'Arduino',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur sit et quod iusto est quia recusandae at repellendus nihil? Culpa aspernatur deleniti itaque reiciendis consectetur modi voluptas, officiis ullam.'
        },
        {
          slug: 'code',
          linker: 'code',
          name: 'Arduino',
          is_code: true,
          title: `                     void setup() {
                    <br /><br />
                    // put your setup code here, to run once:
                    <br /><br />
                    }
                    <br /><br />
                    void loop() {
                    <br /><br />
                    // put your main code here, to run repeatedly:
                    <br /><br />
                    }`
        },
        {
          slug: 'result',
          linker: 'Result',
          name: 'Result',
          image: imgTest,
          is_code: false,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur sit et quod iusto est quia recusandae at repellendus nihil? Culpa aspernatur deleniti itaque reiciendis consectetur modi voluptas, officiis ullam.'
        },
        {
          slug: 'rules',
          linker: 'rules',
          name: 'Don\'t forgot it',
          is_code: false,
          title: `<div class="rules">
                    <i class="fa-light fa-circle-exclamation"></i>
                    <h4>Tip.1</h4>
                    <br /><br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto tenetur sit et quod iusto est quia recusandae at
                      repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                      consectetur modi voluptas, officiis ullam.
                    </p>
                  </div>`
        },
      ],
      products: [
        {
          title: 'hello',
          price: '444',
          description: 'hello is word',
        },
        {
          title: 'hello',
          price: '444',
          description: 'hello is word',
        },
        {
          title: 'hello',
          price: '444',
          description: 'hello is word',
        },
        {
          title: 'hello',
          price: '444',
          description: 'hello is word',
        },
        {
          title: 'hello',
          price: '444',
          description: 'hello is word',
        },
      ],
      windowWidth: window.innerWidth,
    };
  },
  components: {
    stepComponetVue,
    sliderComponetVue
  },
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
  },
};
</script>

<template>
  <div class="page-data">
    <div class="section">
      <div class="first-intro col-xl-8">
        <h1>What is the page</h1>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          hic quibusdam molestiae aspernatur esse atque illum non rerum id
          voluptatem? Consequuntur molestias perferendis nulla repudiandae.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="information">
            <!-- Step components -->
           <stepComponetVue    
              v-for="post in lists"
              :key="post.id"
              :object="post" /> 

            <!-- Product -->
            <sliderComponetVue :products='products' />        

            <br>   
            <div class="step-content" style="margin-top: 80px;" id="conclusion">
                <div class="row">
                  <div class="col">
                    <div class="box-content">
                      <a href="">
                        <h4>try tutorial</h4>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima, praesentium.
                        </h6>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="box-content">
                      <a href="">
                        <h4>try tutorial</h4>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima, praesentium.
                        </h6>
                      </a>
                    </div>
                  </div>
                  <div class="col">
                    <div class="box-content">
                      <a href="">
                        <h4>try tutorial</h4>
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima, praesentium.
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 rb-md-none">
          <div class="sticky">
            <span class="text-gradient h3 rb-md-none">Bu sahifada</span>
            <ul class="rb-md-none">
              <li v-for='link in lists' :key="link.id">
                <router-link :to="{ hash: '#' +link.slug}" class="sidebar-links">{{link.linker}}</router-link>
              </li>
              <li>
                <router-link to="#div6" class="sidebar-links">buy</router-link>
              </li>
            </ul>
            <div class="associate-section">
              <h3>Sponsor</h3>
              <div class="display-grid">
                <a href="http://">
                  <img src="/images/roboschool.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a.linkActiveClass {
  color: black;
}
.section {
  padding: 25px 0;
}
.section .information {
  padding: 20px 10%;
  border-right: 0.5px solid #05050550;
}
.first-intro {
  padding: 20px 5%;
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
.information img {
  width: clamp(130px, 80%, 600px);
}
.rb-md-none {
  display: block;
}
@media (max-width: 1440px) {
  .section .information {
    padding: 20px;
  }
}
@media (max-width: 1200px) {
  .section .information {
    padding: 20px 10%;
  }
}
@media (max-width: 992px) {
  .sticky {
    position: relative;
  }
  .rb-md-none {
    display: none;
  }
}
@media (max-width: 576px) {
  .section .card {
    padding: 5px;
  }
  .section .information {
    border-right: none;
    padding: 20px;
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
  margin: 30px 0;
}
.associate-section .display-grid {
  display: flex;
  width: 80%;
  flex-wrap: wrap;
}
.associate-section a {
  width: 45%;
  margin: 0 5px;
}

.associate-section img {
  width: 100%;
}
.box-content {
  width: 100%;
  margin: 15px 0;
  background-color: var(--nav-color);
  color: var(--color);
  padding: 28px 36px;
  border-radius: 8px;
  font-weight: 500;
}
.box-content h4 {
  color: #42b983;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.box-content h6 {
  color: var(--color);
}
.box-content:hover {
  box-shadow: 0px 0px 0px 3px #00ca4e;
}
/* @media (max-width: 1200px) {
  .box-content {
    width: 12rem;
    padding: 25px;
  }
}
@media (max-width: 576px) {
  .box-content {
    min-height: 250px;
    padding: 25px 15px;
  }
} */
</style>