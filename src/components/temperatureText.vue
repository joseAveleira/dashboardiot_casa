<template>
    <v-card
      class="mx-auto my-8 elevation-2"
    >
      <v-card-title class="headline blue--text text--darken-3">DHT22</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-list-item class="my-7">
              <v-avatar>
                <v-icon color="primary" size="40">mdi-thermometer</v-icon>
              </v-avatar>
              <div>
                <v-list-item-title class="display-1">Temperatura: {{ sensorData.temperature }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-list-item class="my-7">
              <v-avatar>
                <v-icon color="success" size="40">mdi-water-percent</v-icon>
              </v-avatar>
              <div>
                <v-list-item-title class="display-1">Humedad: {{ sensorData.humidity }}</v-list-item-title>
              </div>
            </v-list-item>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>

<script>
import { ref, onMounted } from 'vue'
import { $mqtt } from 'vue-paho-mqtt'

export default {
  setup() {
    const sensorData = ref({ temperature: 0, humidity: 0 })

    onMounted(() => {
      $mqtt.subscribe('salon/aveleira/temperatura', (data) => {
        // Asegúrate de que los datos recibidos son un objeto JSON válido
        try {
          const parsedData = JSON.parse(data)
          if (parsedData.temperature !== undefined) {
            sensorData.value.temperature = parsedData.temperature
          }
          if (parsedData.humidity !== undefined) {
            sensorData.value.humidity = parsedData.humidity
          }
        } catch (error) {
          console.error('Error parsing MQTT data:', error)
        }
      })
    })

    return {
      sensorData
    }
  }
}
</script>