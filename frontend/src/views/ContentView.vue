<template>
    <div>
      <h1>App principal</h1>
      <!-- Importando el componente desde la carpeta "components" -->
      <MiComponente />
    </div>
  </template>
  
  <script>
  // Importa el componente desde la carpeta "components"
  import MiComponente from '../components/tokens/results/r1.vue';
  
  export default {
    components: {
      MiComponente
    }
  };
  </script>
  
  <style>
  /* Estilos para el componente principal */
  </style>
  