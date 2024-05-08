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
                <v-col cols="12">
                  <v-col>
            <v-sheet class="pa-2 ma-1" :style="getBackgroundColor(nuevoParametro)" style="background-color: #FFF2CC; border: 1px solid gray; border-radius: 10px; text-align: center; cursor: pointer; text-transform: uppercase;
    ">
              <strong>{{ nuevoParametro }}
    </strong>
            </v-sheet>
          </v-col>
    
                </v-col>

            </v-container>
          </v-card-text>
        </v-card>
        </div>
        <transition name="slide">
    
        <div class="right-panel">
          <!-- <component :is="card" @change="change" /> -->
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
              <v-row v-if="momento" style="background-color: #ececec; border-radius: 20px;">
                <v-col cols="12">
          <p class="titulo"></p>
          <p class="codigo">{{ momento.curso }}</p>
          <p class="codigo-comp">{{ obtenerClaveMo(momento.PI) }}</p>
          <p class="descripcion"  >{{ obtenerContenidoMo(momento.PI) }}</p>
          <p class="nombre">{{ momento.AIM }}</p>
          <button @click="downloadPDF">Descargar PDF</button>




    
        </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        </div>
        <transition name="slide">
    
        <div class="right-panelw">
          <!-- <component :is="card" @change="change" /> -->
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
    
    // import m1 from './tokens/moment/m1.vue';
    // import m2 from './tokens/moment/m2.vue';
    // import m3 from './tokens/moment/m3.vue';

    import json from '../json/informacion.json'
    
    
    
    export default {
      components: {
        
        // m1,m2,m3
        },
      props: {
        parametro: {
          type: String,
          required: true
        },
    
        },
    
      data() {
        return {
          momento: null,
          dialog: true,
          link: null

    
    
        }
      },
    
      mounted() {
        this.obtenerInformacion();
        this.link = this.$refs.downloadLink;

    
    
      },

      methods: {
        obtenerInformacion() {
          this.momento = json.momentos.find(momento => momento.id === this.parametro)
          console.log('momento', this.momento)
        },
        obtenerClaveMo(mo) {
      return mo.split(":")[0];
    },
    obtenerContenidoMo(mo) {
      return mo.split(":")[1];
    },

    closec() {
      this.$emit('closec')
    },
    
    downloadPDF() {
      console.log("descargar pdf")
      const link = document.createElement('a');
      const fileID = '1Qr59cm0rqC-48No3kkN73hWXRqMEQBpC'
      link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
      link.download = 'AIM1.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
  }
      },


    

      watch: {
        parametro() {
          this.momento = null; // Reiniciar el resultado cuando el parámetro cambia
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

    .embed-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Proporción 16:9 */
}
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    