<template>
  <v-container class="container" style="width: 70%; border: 10px solid rgb(209, 209, 209); border-radius: 10px;">
    <v-row
      no-gutters
    >
    <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r1')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R1</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" style="background-color: transparent;">
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" style="background-color: transparent;">
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
        <v-sheet class="pa-2 ma-1" @click="change('r3')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R3</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet @click="change('r2')" class="pa-2 ma-1" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R2</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r1')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R1</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet @click="change('r1')" class="pa-2 ma-1" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R1</strong>
        </v-sheet>
      </v-col>

    </v-row>

    <v-row
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r5')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R5</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r4')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R4</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r3')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R3</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r2')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R2</strong>
        </v-sheet>
      </v-col>

    </v-row>

    <v-row
      
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r6')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;" >
          <strong>R6</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r7')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R7</strong>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r4')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R4</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('r3')" style="background-color: #E2F0D9; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>R3</strong>
        </v-sheet>
      </v-col>


    </v-row>

    <v-row
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c2')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C2</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c3')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C3</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c4')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C4</strong>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-1" @click="change('c5')" style="background-color: #DEEBF7; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>C5</strong>
        </v-sheet>
      </v-col>

    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet class="pa-2 ma-1" @click="change('p2')" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer;">
          <strong>P2</strong>
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
  