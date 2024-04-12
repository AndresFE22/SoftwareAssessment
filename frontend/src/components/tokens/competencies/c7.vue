<template>
  <v-container class="container" style="width: 60%; border: 10px solid rgb(209, 209, 209); border-radius: 10px;">

    <v-row
      
      no-gutters
    >
    <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r2')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;" >
          <strong>R2</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r3')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R3</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r5')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;" >
          <strong>R5</strong>
        </v-sheet>
      </v-col>





    </v-row>

    <v-row
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c7')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C7</strong>
        </v-sheet>
      </v-col>




    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <center><v-sheet class="pa-2 ma-1" style="background-color: #E4E4E4; border: 1px solid gray; border-radius: 10px; text-align: center; cursor:not-allowed; width: 50%;">
          <strong><span class="mdi mdi-block-helper"></span></strong>
        </v-sheet></center>
      </v-col>

    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <center><v-sheet class="pa-2 ma-1" style="background-color: #E4E4E4; border: 1px solid gray; border-radius: 10px; text-align: center; cursor:not-allowed; width: 50%;">
          <strong><span class="mdi mdi-block-helper"></span></strong>
        </v-sheet></center>
      </v-col>

    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <center><v-sheet class="pa-2 ma-1" style="background-color: #E4E4E4; border: 1px solid gray; border-radius: 10px; text-align: center; cursor:not-allowed; width: 50%;">
          <strong><span class="mdi mdi-block-helper"></span></strong>
        </v-sheet></center>
      </v-col>

    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <center><v-sheet class="pa-2 ma-1" @click="change('p4')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer; width: 50%;">
          <strong>P4</strong>
        </v-sheet></center>
      </v-col>

    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <center><v-sheet class="pa-2 ma-1" @click="change('p5')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer; width: 50%;">
          <strong>P5</strong>
        </v-sheet></center>
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
  