<template>
<div class="text-center pa-4">
    <v-dialog
    v-model="dialog"
      max-width="auto"
      persistent
    >
    <v-btn @click="close">cerrar</v-btn>
    <div>
          <div class="containerw">
    <div class="left-panelw">
      <v-card>
      <v-card-title>
        Información del Parámetro
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              {{ parametro }}
            </v-col>
          </v-row>
          <v-row v-if="resultado">
            <v-col cols="12">
              <h3>Nombre: {{ resultado.nombre }}</h3>
              <p>Descripción: {{ resultado.descripcion }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    </div>
    <div class="right-panelw">
      <card />
    </div>
  </div>        </div>
    </v-dialog>

   
  </div>
</template>

<script>

import card from './cardFichas.vue';
import data from '../json/informacion.json';


export default {
  components: {
    card
    },
  props: {
    parametro: {
      type: String,
      required: true
    }
    },

  data() {
    return {
      dialog: true,
      resultado: null


    }
  },
  mounted() {
    this.obtenerInformacion()
  },

  methods: {
    close() {
      this.$emit('close')
    },
    prueba() {
      console.log("funciona")
    },
    obtenerInformacion() {
      let tipo = null;
      let id = null;
      if (this.parametro.startsWith('p')) {
        tipo = 'perfiles';
        id = this.parametro
        console.log(tipo, id)
      } else if (this.parametro.startsWith('c')) {
        tipo = 'competencias';
        id = this.parametro
      } else if (this.parametro.startsWith('r')) {
        tipo = 'resultados';
        id = this.parametro;
      }
      if (tipo && id) {
        console.log(data)
        let name = id.toUpperCase();
        const info = data[tipo].find(item => item.nombre === name);
        console.log(info)
        if (info) {
          this.resultado = {
            nombre: info.nombre,
            descripcion: info.descripcion
          };
        } else {
          this.resultado = null;
        }
      } else {
        this.resultado = null;
      }
    }
  },

  //   watch: {
  //   parametro: {
  //     handler() {
  //         this.dialog = true; 
  //     }
  //   }
  // },
  watch: {
    parametro() {
      this.resultado = null; // Reiniciar el resultado cuando el parámetro cambia
      this.obtenerInformacion();
    }
  }
}

</script>

<style scoped>
.carta {
  width: 100%; /* La carta ocupará todo el ancho disponible */
}

.ficha {
  margin: 10px; /* Espaciado entre las fichas */
}



.containerw {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.left-panelw {
  padding: 20px;
  background-image: url('../assets/fondoderecha.jpg'); 
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

}

.right-panelw {
  padding: 20px;
  background-image: url('../assets/fondoizquierda.jpg'); 
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}


</style>
