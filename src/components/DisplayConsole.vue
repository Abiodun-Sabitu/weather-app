<template>
  <section
    class="container col-xl-7 border border-1 border-mute d-flex justify-content-center"
  >
    <div class="mt-4 col border border-1 border-mute">
      <div>
        <h2>{{ city }}, {{ country }}</h2>
        <h3>{{ temperature }} °C</h3>
        <p>{{ condition }} - {{ description }}</p>
        <img :src="'https://openweathermap.org/img/w/' + icon + '.png'" />
        <p>Humidity: {{ humidity }}%</p>
        <p>Min Temp: {{ minTemp }} °C</p>
        <p>Max Temp: {{ maxTemp }} °C</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    minTemp: {
      type: Number,
      required: true,
    },
    maxTemp: {
      type: Number,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style></style>
