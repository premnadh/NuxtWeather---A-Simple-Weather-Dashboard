<template>
  <div class="text-center">
    <h2 class="text-xl font-bold">{{ weather.name }}</h2>
    <p class="text-4xl">{{ weather.main.temp }}°C</p>
    <p>{{ weather.weather[0].description }}</p>
    <p>Humidity: {{ weather.main.humidity }}%</p>
  </div>
</template>

<script setup>
defineProps(['weather'])
</script>
