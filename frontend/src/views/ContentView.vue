<template>
    <div>
      <h1>App principal</h1>
    <diagram @ficha="handleOpenModal"/>
    <modal :parametro="modalParametro" :dialog="dialog"/> 
    </div>
  </template>
  
  <script>
  // Importa el componente desde la carpeta "components"
  import diagram from '../components/tokens/results/r1.vue';
  import modal from '../components/cardModal.vue';

  
  export default {
    components: {
      diagram,
      modal
    },
    data() {
    return {
      modalParametro: '',
      dialog: ''
    }
  },
  methods: {
    handleOpenModal(parametro) {
      this.modalParametro = parametro
      this.dialog = true

    },

  }
  };
  </script>
  
  <style>
  /* Estilos para el componente principal */
  </style>
  