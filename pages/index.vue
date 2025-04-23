<template>
  <div class="min-h-screen bg-blue-100 p-6">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-4">
      <input
        v-model="city"
        type="text"
        placeholder="Enter city"
        class="w-full p-2 border rounded"
      />
      <button @click="fetchWeather" class="bg-blue-500 text-white px-4 py-2 rounded">Get Weather</button>

      <div v-if="loading">Loading...</div>
      <div v-if="error" class="text-red-500">Error: {{ error }}</div>
      <WeatherCard v-if="weather" :weather="weather" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WeatherCard from '~/components/WeatherCard.vue'
const city = ref('')
const weather = ref(null)
const error = ref('')
const loading = ref(false)

const fetchWeather = async () => {
  loading.value = true
  error.value = ''
  try {
    const { data } = await useFetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${useRuntimeConfig().public.apiKey}&units=metric`
    )
    weather.value = data.value
  } catch (err) {
    error.value = 'City not found or network issue.'
  } finally {
    loading.value = false
  }
}
</script>
