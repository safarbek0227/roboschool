<template>

 <transition name="fade">
  <div class="page ">
    <div class="home container">
      <img src="@/assets/fixing-robot.png" alt="">
      <h1>Bizning<span class="text-gradient">RoboSchool</span>ga xush kelibsiz</h1>
      <h3>
        Bizning saytda <a href="">Arduino</a> va <a href="">Robtotextnikani</a> onlayn o'rganing.
      <strong> O'zingizda kerakli</strong> buyumlarni bizning <a href="/shop"> sotuv bolimimizdan</a> sotib olishiz mumkin
      </h3>
      <br>
        <router-link to="learn" class="h3 unstyle text-gradient link">Hoziroq boshlang <i class="fa-light fa-arrow-right-long"></i></router-link>

    </div>
    <div class="special-sponsor">
        <span>Special Sponsor</span>
        <div class="logo-content">
          <img src="@/assets/logo.png" alt="" >
          <span class="text-gradient">RoboSchool</span>
        </div>
        <span>the best way</span>
    </div>
  </div>
</transition>

</template>

<script>
export default {
}
</script>

<style>

.home{
  margin-top: 50px;
}
.home img{
  width: clamp(130px, 80%, 320px);
}

.special-sponsor {
  margin-top: 50px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #3c3c3c1f;
  border-bottom: 1px solid #3c3c3c1f;
}
.special-sponsor span{
  font-size: x-large;
  margin-right:  15px;
  margin-top: 5px;
  color: #3c3c3cb3;
}
.special-sponsor  img{
  width: 40px ;
  height: 40px;
}
.logo-content{
  display: flex;
  align-items: center;
}
@media (max-width: 768px){
  img{
      width: clamp(130px, 80%, 250px);
  }
}
@media (max-width: 576px){
  .special-sponsor{
      flex-direction: column;
  }
  .special-sponsor span{
    font-size: large;
  }
}
</style>
