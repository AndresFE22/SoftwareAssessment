<template>
    <div>
        <v-dialog
        v-model="dialog"
          max-width="auto"
          persistent
          v-if="$vuetify.breakpoint.mdAndDown"    >
        <transition name="fade">
    
        <div class="container">
        <div class="left-panel">
          <v-card>
          <v-card-title >
            <h1 style="color: gray; margin-left: 20px;">
              Información
            </h1>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-col>
            <v-sheet class="pa-2 ma-1" :style="getBackgroundColor(nuevoParametro)" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer; text-transform: uppercase;
    ">
              <strong>{{ nuevoParametro }}
    </strong>
            </v-sheet>
          </v-col>
    
                </v-col>
              </v-row>
              <v-row v-if="resultado" style="background-color: #ececec; border-radius: 20px;">
                <v-col cols="12">
                  <p class="titulo">CURSO</p>
          <p class="codigo">{{ resultado.codigo }}</p>
          <p class="nombre">{{ resultado.nombre }}</p>
          <p class="codigo-comp" v-if="mostrarCodigoComp" >{{ resultado.codigo_comp }}</p>
          <p class="descripcion" v-if="mostrarCompetencia">{{ resultado.competencia }}</p>
          <p class="codigo-comp" v-if="mostrarClaveRa">{{ obtenerClaveRa(ra) }}</p>
          <p class="descripcion" v-if="mostrarContenidoRa">{{ obtenerContenidoRa(ra) }}</p>
          
        </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        </div>
        <transition name="slide">
    
        <div class="right-panel">
          <component :is="card" @change="change" />
        </div>
      </transition>
    
        <v-btn @click="closec" icon class="absolute top-0 right-0 m-2">
                <v-icon>mdi-close</v-icon>
              </v-btn>
    </div>
    </transition>
    
        </v-dialog>
    
    
        <v-dialog
        v-model="dialog"
          max-width="auto"
          persistent
          v-else>
        <transition name="fade">
    
        <div class="containerw">
        <div class="left-panelw">
          <v-card>
          <v-card-title >
            <h1 style="color: gray; margin-left: 20px;">
              Información
            </h1>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-col>
          </v-col>
    
                </v-col>
              </v-row>
              <v-row v-if="resultado" style="background-color: #ececec; border-radius: 20px;">
                <v-col cols="12">
          <p class="titulo"></p>
          <p class="codigo">{{ resultado.codigo }}</p>
          <p class="nombre">{{ resultado.nombre }}</p>
          <p class="codigo-comp" v-if="mostrarCodigoComp" >{{ resultado.codigo_comp }}</p>
          <p class="descripcion" v-if="mostrarCompetencia">{{ resultado.competencia }}</p>
          <p class="codigo-comp" v-if="mostrarClaveRa">{{ obtenerClaveRa(ra) }}</p>
          <p class="descripcion" v-if="mostrarContenidoRa">{{ obtenerContenidoRa(ra) }}</p>
          <p class="nombre" v-if="nombrera">{{ resultadoAprendizajeFiltro.nombre }}</p>
          <p class="descripcion" v-if="descripcionra">{{ resultadoAprendizajeFiltro.descripcion }}</p>
        </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        </div>
        <transition name="slide">
    
        <div class="right-panelw">
          <component :is="card" @change="change" />
        </div>
      </transition>
    
        <v-btn @click="closec" icon class="absolute top-0 right-0 m-2">
                <v-icon>mdi-close</v-icon>
              </v-btn>
    </div>
    </transition>
    
        </v-dialog>
    
       
      </div>
    </template>
    
    <script>
    
    import m1 from './tokens/moment/m1.vue';
    import m2 from './tokens/moment/m2.vue';
    import m3 from './tokens/moment/m3.vue';

    import json from '../json/informacion.json'
    
    
    
    export default {
      components: {
        
        m1,m2,m3
        },
      props: {
        parametro: {
          type: String,
          required: true
        },
    
        },
    
      data() {
        return {

    
    
        }
      },
    
      mounted() {

    
    
      },
    

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
    
    
    .titulo {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
      text-align: center;
      color: rgb(0, 121, 235)
    
    }
    
    .codigo {
      font-size: 20px;
      color: #d30000;
      text-align: center;
      font-weight: bold
    
    }
    
    .nombre {
      font-size: 24px;
      margin-top: 10px;
      text-align: center;
      font-weight: bold
    
    }
    
    .codigo-comp {
      font-size: 16px;
      color: #555555;
      margin-top: 5px;
      text-align: center;
      font-weight: bold
    
    
    }
    
    .descripcion {
      font-size: 18px;
      color: #575757;
      margin-top: 20px;
    }
    
    .containerw {
      display: flex;
      width: 100%;
      height: 90vh;
      overflow: hidden;
      overflow-y: hidden;
      padding: 20px;
      background-color: white;
      border-radius: 10px
    }
    
    .container {
      display: flex;
      flex-direction: column-reverse;
      height: auto;
      overflow: auto
    }
    
    .transition-enter-active, .transition-leave-active {
      transition: opacity 0.5s;
    }
    
    .transition-enter, .transition-leave-to {
      opacity: 0;
    }
    
    .left-panelw {
      background-size: cover;
      padding: 20px;
      width: 60%;
      height: 100vh;
      border-radius: 20px;
    
    }
    
    .right-panelw {
      padding: 20px;
      width: 40%;
    
      border-radius: 20px;
    
      height: 50vh;
    }
    
    
    .right-panel {
      margin-bottom: 20px;
    }
    
    
    </style>
    