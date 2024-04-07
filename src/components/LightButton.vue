<template>
    <v-card
      class="mx-auto my-8"
      elevation="2"
    >
      <v-card-item>
        <v-card-title>
          LUZ ESP32
        </v-card-title>
      </v-card-item>
  
      <v-card-actions class="justify-center">
        <v-spacer></v-spacer>
        <v-btn
          :color="lightStatus ? 'green' : 'red'"
          fab
          large
          elevation="2"
          dark
          height="72"
          min-width="164"
          @click="toggleLight"
          class="mb-14"
        >
          <v-icon>
            mdi-lightbulb
          </v-icon>
          <span>{{ lightStatus ? 'ENCENDIDO' : 'APAGADO' }}</span>
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
import { ref, onMounted } from 'vue'
import { $mqtt } from 'vue-paho-mqtt'

export default {
  setup() {
    const lightStatus = ref(0)

    const toggleLight = () => {
      if (lightStatus.value === 0) {
        lightStatus.value = 1
        // $mqtt.publish('ledesp32', lightStatus.value ? '1' : '0', 'B');
        $mqtt.publish('coche/izquierda', '1', 'B');
      } else {
        lightStatus.value = 0
        $mqtt.publish('coche/izquierda', '0', 'B');
      }
    }

    onMounted(() => {
      $mqtt.subscribe('coche/atras', (data) => {
        // lightStatus.value = data === '1' ? 1 : 0
        if (data === '1') {
          lightStatus.value = 1
        } else if (data === '0') {
          lightStatus.value = 0
        }
      })
    })

    return {
      lightStatus,
      toggleLight
    }
  }
}
</script>