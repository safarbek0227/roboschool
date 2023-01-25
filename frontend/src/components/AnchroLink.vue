<script>
export default {
  props: ["href"],
  data() {
    return {
      active: '',
    };
  },
};
</script>

<template>
  <router-link v-bind:to="href" :class="this.$route.hash == href ? '':'active2'"  ><slot />{{ href }}</router-link>
</template>