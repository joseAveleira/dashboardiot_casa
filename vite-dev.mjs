import { createServer } from 'vite';

async function start() {
  const server = await createServer({
    // Configuración de Vite si es necesario
  });
  await server.listen();
  server.printUrls();
}

start();
