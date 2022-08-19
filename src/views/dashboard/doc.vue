<template>

  <div class="page-data">
    <h1>doc</h1>

    <h1>{{ $route.params.name }}</h1>
    <div>{{ currentRouteName }}</div>
  </div>
</template>
<script>
import { addMeta } from "@/addmeta";
const Meta = {
  title: "Roboschool- Online kurslar 2",
  metaTags: [
    {
      name: "author",
      content: "Solijonov Safarbek",
    },
    {
      property: "description",
      content:
        "Roboschool online robotextnikani O'rganish uchun en yaxshi tanlov",
    },
  ],
};
addMeta(Meta);

export default {
  data() {
    return {
      navbar: true,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.params.name;
    },
  },
};
</script>