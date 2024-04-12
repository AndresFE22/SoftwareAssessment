<template>
  <v-container class="bg-surface-variant" style="width: 60%; border: 1px solid gray; border-radius: 10px;">


    <v-row
      no-gutters
    >

      <v-col>
        <v-sheet class="pa-2 ma-1" style="background-color: transparent;">
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet @click="change('p2')" class="pa-2 ma-1" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P2</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" style="background-color: transparent;">
        </v-sheet>
      </v-col>


    </v-row>

    <v-row
      no-gutters
    >


      <v-col>
        <v-sheet @click="change('p2')" class="pa-2 ma-1" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P2</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('p3')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P3</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('p4')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P4</strong>
        </v-sheet>
      </v-col>
    </v-row>

    <v-row
      
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('p5')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;" >
          <strong>P5</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('p4')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P4</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('p5')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;" >
          <strong>P5</strong>
        </v-sheet>
      </v-col>


    </v-row>

    <v-row
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c3')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C3</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c6')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C6</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c7')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C7</strong>
        </v-sheet>
      </v-col>

    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-1" @click="change('r2')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R2</strong>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
  </template>
  <script>


  export default {
    name: 'CartaDinamica',
    props: {
      perfiles: Array
    },
    data() {
      return {
        perfilSeleccionado: null
      };
    },
    methods: {
      change(change) {
        console.log('ejecutado')
      this.$emit('change', change)
    },
    }
  };
  </script>
  
  <style>
  /* Estilos específicos para este componente */
  .carta {
    width: 100%; /* La carta ocupará todo el ancho disponible */
  }
  
  .ficha {
    margin: 10px; /* Espaciado entre las fichas */
  }

  .flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1; /* Equal width for all items */
  padding: 20px;
  text-align: center;
}


/*FFF2CC amarillo 
DEEBF7 azul
E2F0D9 verde*/
  </style>
  