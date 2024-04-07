<template>
    <div>
      <v-navigation-drawer v-model="drawer">
        
          <v-list density="compact">
            <v-list-subheader>MENU</v-list-subheader>
  
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              color="primary"
              @click="navigateTo(item.path)"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
  
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        
      </v-navigation-drawer>
  
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title> IoT DashBoard - {{ title }}</v-app-bar-title>
      </v-app-bar>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const router = useRouter()
      const drawer = ref(true)
      const title = ref('Application')
  
      const items = ref([
        { text: 'Inicio', icon: 'mdi-home', path: '/' },
        { text: 'Devices', icon: 'mdi-devices', path: '/devices' }
      ])
  
      const navigateTo = (path) => {
        router.push(path)
        title.value = items.value.find(item => item.path === path).text
        drawer.value = true
      }
  
      return {
        drawer,
        title,
        items,
        navigateTo
      }
    }
  }
  </script>