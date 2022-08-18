<template>

 <transition name="fade">
  <div class="home container page">
    <img src="@/assets/fixing-robot.png" alt="">
    <h1>Bizning<span class="text-gradient">RoboSchool</span>ga xush kelibsiz</h1>
    <h3>
      Bizning saytda <a href="" class="text-primary">Arduino</a> va <a href="" class="text-primary">Robtotextnikani</a> onlayn o'rganing.
      O'zingizda kerakli buyumlarni bizning <a href="/shop"> sotuv bolimimizdan</a> sotib olishiz mumkin
    </h3>
      <router-link to="learn" class="h3 unstyle text-gradient link">Hoziroq boshlang <i class="fa-light fa-arrow-right-long"></i></router-link>

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
img{
  width: clamp(130px, 80%, 320px);
}
@media (max-width: 768px){
  img{
      width: clamp(130px, 80%, 250px);
  }
}
</style>
