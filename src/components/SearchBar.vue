<template>
  <section>
    <div class="col-xl-7 container">
      <div class="input-group mb-3">
        <input
          type="search"
          class="form-control"
          :placeholder="holder"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          v-model="query"
        />
        <button
          class="input-group-text"
          id="basic-addon2"
          @click="getWeatherData"
        >
          Get Weather
        </button>
      </div>
    </div>
  </section>
  <div v-if="weatherData">
    <display-console
      :city="weatherData.name"
      :country="weatherData.sys.country"
      :temperature="weatherData.main.temp"
      :condition="weatherData.weather[0].main"
      :description="weatherData.weather[0].description"
      :icon="weatherData.weather[0].icon"
      :humidity="weatherData.main.humidity"
      :minTemp="weatherData.main.temp_min"
      :maxTemp="weatherData.main.temp_max"
    >
    </display-console>
  </div>
</template>
<script>
import axios from "axios";
import DisplayConsole from "./DisplayConsole.vue";

export default {
  name: "SearchBar",
  components: {
    DisplayConsole,
  },
  data() {
    return {
      holder: "Enter a location or IP address to get the weather",
      apiKey: "9f419e2b04d5c128aded9dab3a73f099",
      query: "",
      weatherData: null,
    };
  },

  methods: {
    getWeatherData() {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.apiKey}&units=metric`;
      axios
        .get(endpoint)
        .then((response) => {
          this.weatherData = response.data;
          console.log(this.weatherData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style></style>
