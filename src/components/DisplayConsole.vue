<template>
  <section class="container col-xl-7 d-flex justify-content-center">
    <div class="mt-4 col border border-1 border-mute glass p-4 shadow">
      <div class="d-sm-flex justify-content-between gap-4">
        <article>
          <h2>{{ city }}, {{ country }}</h2>
          <h3>{{ temperature }} °C</h3>
          <p>{{ condition }} - {{ description }}</p>
          <img
            :src="`https://openweathermap.org/img/w/${icon}.png`"
            :style="{ width: iconSize + 'px' }"
          />
        </article>
        <article class="d-flex flex-column mt-4 fs-6 fw-normal">
          <p>Humidity: {{ humidity }}%</p>
          <p>Min Temp: {{ minTemp }} °C</p>
          <p>Max Temp: {{ maxTemp }} °C</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      iconSize: 70,
    };
  },
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
<style>
.glass {
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.11);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(2.8px);
  border: 1px solid rgba(255, 255, 255, 0.31);
}
</style>
