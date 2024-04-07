<template>
    <v-card class="elevation-2">
        <v-card-title>Humedad %</v-card-title>
        <v-row class="mt-4">
            <v-col cols="12" sm="6" md="8" lg="12">
                <apexchart type="line" :options="options" :series="series"></apexchart>
            </v-col>
        </v-row>
    </v-card>
</template>
<script>
import { ref, onMounted } from 'vue';
import { $mqtt } from 'vue-paho-mqtt';
import VueApexCharts from 'vue3-apexcharts';

export default {
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const sensorData = ref({ temperature: 0, humidity: 0 });
        const options = ref({
            chart: {
                id: 'vuechart-example',
            },
        stroke: {
            curve: 'smooth' // Añade esta opción
        },
            xaxis: {
                categories: [],
            }
            //,yaxis: {  min: 0, max: 100,}
        });
        const series = ref([
            {
                name: 'series-1',
                data: [],
            },
        ]);

        onMounted(() => {
            $mqtt.subscribe('salon/aveleira/temperatura', (data) => {
                try {
                    const parsedData = JSON.parse(data);
                    if (parsedData.humidity !== undefined) {
                        sensorData.value.humidity = parsedData.humidity;

                        // Añade el nuevo valor de humedad a la serie
                        series.value[0].data.push(sensorData.value.humidity);

                        // Si la serie tiene más de 8 datos, elimina el más antiguo
                        if (series.value[0].data.length > 15) {
                            series.value[0].data.shift();
                        }

                        // Actualiza las categorías del eje x con los últimos 15 intervalos
                        options.value.xaxis.categories = series.value[0].data.map((_, index) => `Intervalo ${index + 1}`);
                    }
                } catch (error) {
                    console.error('Error parsing MQTT data:', error);
                }
            });
        });

        return {
            sensorData,
            options,
            series,
        };
    },
};
</script>