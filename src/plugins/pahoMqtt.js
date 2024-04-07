// plugins/pahoMqtt.js
import { createPahoMqttPlugin } from 'vue-paho-mqtt';

export default createPahoMqttPlugin({
  PluginOptions: {
    autoConnect: true,
    showNotifications: true,
  },
  MqttOptions: {
    host: 'joseaveleira.es/mqtt',
    protocol: 'wss',
    useSSL: true,
    clientId: `MyID-${Math.random() * 9999}`,
    enableMainTopic: false,
    username: 'alumnoIoT',
    password: 'cursoIoT_24',
  },
});