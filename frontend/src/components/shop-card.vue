<script>
import arduinoimg from "@/assets/arduino.png";
export default {
  props: ["detail"],
  data() {
    return { arduinoimg };
  },
};
</script>
<template>
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
    <div class="detail card">
      <div
        class="card-img bg-image"
        :style="{ 'background-image': `url(${arduinoimg})` }"
      ></div>
      <a href="" target="_blank" class="card-info">
        <p class="text-title">Arduino</p>
        <p class="text-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, beatae!.</p>
      </a>
      <div class="card-footer">
        <span class="text-title">$12</span>
        <div :style="{'display':'flex'}">
            <button href="" class="card-button">
                <i class="fa-solid fa-cart-circle-plus"></i>
                <!-- <i class="fa-solid fa-cart-circle-check"></i> -->
            </button>
            <button class="card-button">
                <i class="fa-solid fa-heart-circle-plus"></i>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.detail.card {
  width: 100%;
  padding: 0.8em;
  border-radius: 10px;
  background: var(--nav-color);
  position: relative;
  overflow: visible;
  text-align: left;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
.detail.card a {
  color: var(--color);
}
.detail.card .card-img {
  width: 100%;
  height: 150px;
  background-color: #EEEEEE;
  border-radius: 15px;
  margin-bottom: 20px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.detail.card .card-info {
  padding-top: 10%;
}



.detail.card .card-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid var(--border-color);
}

.detail.card .text-title {
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
}

.detail.card .text-body {
  font-size: 0.9em;
  padding-bottom: 10px;
}

.detail.card .card-button {
    border: 1px solid #252525;
    display: flex;
    padding: 10px 8px;
    margin: 5px;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease-in-out;
    font-size: larger;
}

.detail.card .card-img:hover {
  transform: translateY(-15%);
  box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
    rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}
.detail.card .card-button:first-child {
  border: 1px solid #42b983;
  background-color: #42b983;
  color: #fff;
}
.detail.card .card-button:nth-child(2) {
  border: 1px solid #FF0032;
  background-color: #FF0032;
  color: #fff;
}
</style>