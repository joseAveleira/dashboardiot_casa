<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <LightButton />
      </v-col>
      <v-col cols="12" sm="6">
        <temperatureText />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <graficoHumedad />
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
import LightButton from '@/components/LightButton.vue'
import temperatureText from '@/components/temperatureText.vue';
import graficoHumedad from '@/components/graficoHumedad.vue';

export default {
  components: {
    LightButton
  }
}
</script>