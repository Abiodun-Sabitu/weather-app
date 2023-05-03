<template>
  <section>
    <div class="col-xl-7 container">
      <div class="input-group mb-3">
        <input
          type="search"
          class="form-control"
          :placeholder="holder"
          aria-label="A city or country"
          aria-describedby="basic-addon2"
          v-model="query"
        />
        <button
          class="input-group-text buttonBG"
          id="basic-addon2"
          type="button"
          @click="getWeatherData"
        >
          Get Weather
        </button>
      </div>
    </div>
  </section>

  <div class="text-center">
    <p v-if="hasError" class="text-danger">{{ hasError }}</p>
    <p v-if="isLoading" class="text-info">Loading...</p>
  </div>
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
      :isLoading="isLoading"
    >
    </display-console>
  </div>
  <display-console
    v-else
    city="Kansas City"
    country="US"
    temperature="20"
    condition="Cloudy"
    description="Overcast skies"
    icon="04d"
    humidity="70"
    minTemp="18"
    maxTemp="22"
  >
  </display-console>
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
      holder: "Enter a city or country to search",
      apiKey: "9f419e2b04d5c128aded9dab3a73f099",
      query: "",
      weatherData: null,
      isLoading: false,
      hasError: null,
    };
  },

  methods: {
    getWeatherData() {
      if (!this.query) {
        return (
          (this.hasError = "Please enter a location or city"),
          (this.weatherData = null)
        );
      } else if (/^\d+$/.test(this.query) || this.query === " ") {
        return (
          (this.hasError = "Please enter a valid location or city"),
          (this.weatherData = null)
        );
      } else {
        this.hasError = null;
        this.isLoading = true;

        setTimeout(() => {
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.apiKey}&units=metric`
            )
            .then((response) => {
              this.weatherData = response.data;
              return this.weatherData;
            })
            .catch((error) => {
              if (error.response && error.response.status === 404) {
                this.hasError = "Location or city not found";
              } else {
                this.hasError = "An error occurred. Please try again later.";
              }
              console.log(error);
            })
            .finally(() => {
              this.isLoading = false;
              this.query = "";
            });
        }, 3000);
      }
    },
  },
};
</script>
<style>
.buttonBG {
  background-color: orangered;
  color: white;
  border-radius: 0px 12px 12px 0px;
}
.form-control {
  border-radius: 12px;
  max-height: auto;
  height: 54px;
}
.form-control:focus {
  border-color: #54b4d3;
}
</style>
