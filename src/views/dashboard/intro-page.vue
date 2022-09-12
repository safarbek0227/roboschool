<template>
  <div class="page-data">
    <div class="section">
      <br /><br />
      <div class="row">
        <div class="col-xl-8">
          <div class="card">
            <div class="step-content header-anchor" ref="div1" id="intro">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content header-anchor" id="div2">
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
            <div class="step-content header-anchor" id="div3">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content header-anchor" id="div4">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content header-anchor" id="div5">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content header-anchor" id="div6">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content header-anchor" id="div7">
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
          <div class="sticky">
            <ul>
              <li>
                <router-link to="#intro">intro</router-link>
              </li>
              <li>
                <router-link to="#div7">div7</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    // const el = document.querySelector(this.$route.hash)
    // el && el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",})
    window.onload = () => {
      window.onscroll = () => {
        let anchors = document.querySelectorAll(".step-content");
        for(let i = 0; i < anchors.length; i++){
        if (
          window.pageYOffset >= anchors[i].offsetTop &&
          window.pageYOffset <=
            anchors[i].offsetTop + anchors[i].scrollHeight
        ) {
          history.pushState({}, "", "#" + anchors[i].id);
          console.log("#" + anchors[i].id);
          console.log(i);
        }
      }
      };
    };
  },
};
</script>

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
</style>