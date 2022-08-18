<template>
    <h1>doc</h1>
    
      <h1>{{ $route.params.name }}</h1>
      <div>{{ currentRouteName }}</div>
</template>
<script>
export default {
  data() {
    return {
      navbar: true,
    };
  },
  computed: {
    currentRouteName() {
        return this.$route.params.name;
    }
}
};
</script>