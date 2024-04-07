<template>
  <v-app id="inspire"  >
    <MyNavigation /> 

    <v-main  style="background-color:#f8f8f8;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import MyNavigation from '@/components/MyNavigation.vue'
</script>
