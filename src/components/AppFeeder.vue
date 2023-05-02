<template>
  <div>
    <the-header></the-header>
    <section>
      <weather-console></weather-console>
    </section>
  </div>
</template>
<script>
import TheHeader from "./TheHeader.vue";
import WeatherConsole from "./WeatherConsole.vue";
export default {
  components: {
    TheHeader,
    WeatherConsole,
  },
  data() {
    return {
      greeting: "Hello World",
    };
  },
};
</script>
<style></style>
