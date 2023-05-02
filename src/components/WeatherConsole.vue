<template>
  <div class="col-6 container">
    <div class="input-group mb-3">
      <input
        type="search"
        class="form-control"
        :placeholder="holder"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <button class="input-group-text" id="basic-addon2">Get Weather</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      holder: "Enter a location or IP address to get the weather",
    };
  },
};
</script>
<style></style>
