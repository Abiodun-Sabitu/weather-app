<template>
  <div>
    <the-header></the-header>
    <search-bar></search-bar>
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
import SearchBar from "./SearchBar.vue";
export default {
  name: "Feeder",
  components: {
    TheHeader,
    SearchBar,
  },
  data() {
    return {
      greeting: "Hello World",
    };
  },
};
</script>
<style></style>
