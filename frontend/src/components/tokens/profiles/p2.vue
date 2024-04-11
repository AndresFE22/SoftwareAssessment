<template>
    <v-card>
        <v-layout column fill-height>
      <!-- 10 filas con 10 columnas -->
      <v-flex class="filas" v-for="fila in 10" :key="fila">
        <v-layout row>
          <v-flex class="columnas" v-for="columna in 10" :key="columna">
            <v-card class="caja" color="white">
              <v-card-text>
                Cajap2 {{ fila }}, {{ columna }}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

            <!-- Fila de abajo -->
            <v-flex class="fila-abajo">
        <v-layout justify-center align-center>
          <v-flex xs12>
            <v-card class="caja" color="grey darken-3">
              <v-card-text>
                Caja en la parte de abajo
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </v-card>
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
  </style>
  