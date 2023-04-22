<script>
import { notification } from "@/Extra_lib";
export default {
  props: ["object"],
  methods: {
    copy() {
        navigator.clipboard.writeText(this.$refs.codeblock.innerText);
        notification("Copied to clipboard! 🎉", "success-alert", 1500);
    },
}
};
</script>

<template>
  <div class="step-content" :class="[object.is_code ? '' : 'card', '']" ref="div1" :id="object.slug">
    <h2>{{ object.name }}</h2>
    <img :src="object.image" :alt="object.name" :style="{'width': 'clamp(200px, 60%, 400px)'}" v-if="object.image" />
    <div v-html="object.title" class="h5" v-if="!object.is_code"></div>

    <div class="code-card" v-else>
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
          <code v-html="object.title"></code>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.information .step-content{
    border-radius: 25px;
}
.information .step-content.card{
  padding: 55px;
  margin: 55px 0;
  background-color: var(--nav-color);
}
.step-content h2 {
  font-weight: 700;
  font-size: xx-large;
  transition: all 1s;
}
.step-content h2:hover::before {
  content: "#";
  position: absolute;
  margin-left: -25px;
  color: #42b983;
}
.step-content p {
  font-size: larger;
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
  padding: 10px;
  color: var(--color);
  font-size: larger;
  font-style: oblique;
  overflow: auto;
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
@media (max-width: 576px) {
  .information .step-content.card{
    padding: 30px;
  }
  .step-content h2{
    font-size: x-large;
  }
  .step-content p{
    font-size: medium;
  }
  .step-content .h5{
    font-size: medium;
  }
  
}
</style>