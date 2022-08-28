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
            <div class="step-content" ref="div5">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" ref="div6">
              <h1>Arduino Nima</h1>
              <img src="@/assets/arduino.png" alt="" />
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto tenetur sit et quod iusto est quia recusandae at
                repellendus nihil? Culpa aspernatur deleniti itaque reiciendis
                consectetur modi voluptas, officiis ullam.
              </h4>
            </div>
            <div class="step-content" ref="div7">
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
                <router-link  to='#intro'>div1</router-link>
              </li>
              <li>
                <router-link  to='#div2'>div1</router-link>
              </li>
              <li>
                <router-link  to='#div3'>div1</router-link>
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
  methods: {

  },
};
</script>

<style>
.section {
  padding: 25px;
}
.section .card {
  padding: 20px;
  border-right: 1px solid #05050520;
}
.card .step-content {
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