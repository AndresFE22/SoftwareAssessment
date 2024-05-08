<template>
    <div>
        <v-dialog
        v-model="dialog"
          max-width="auto"
          persistent
          v-if="$vuetify.breakpoint.mdAndDown"    >
        <transition name="fade">
    
        <div class="container">
              <v-btn @click="closec" icon class="absolute top-0 right-0 m-2">
                <v-icon>mdi-close</v-icon>
              </v-btn>
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
                  
              <v-row v-if="momento" style="background-color: #ececec; border-radius: 20px;">
                <v-btn v-if="parametro == 'm1'" @click="downloadExcel" icon class="absolute top-0 right-0 m-2" >
                  <span class="mdi mdi-text-box-check icon-size"></span>
              </v-btn>
                <v-col cols="12">
                  <br>

<h1 style="text-align: center; color: gray;">Momento {{ parametro[1] }}</h1>
<br>
                  <p class="codigo">{{ momento.curso }}</p>
          <p class="codigo-comp">{{ obtenerClaveMo(momento.PI) }}</p>
          <br>
          <p class="descripcion"  >{{ obtenerContenidoMo(momento.PI) }}</p>
          <br>
          <br>

          <div class="download-movil">
            <div class="pdf">
              <p class="nombre">{{ momento.AIM }}</p>
            </div>
            <div class="aim">
              <v-btn color="primary" @click="downloadPDF">Descargar PDF</v-btn>
            </div>
          </div>
    
        </v-col>
              </v-row>
          </v-col>
    
                </v-col>

            </v-container>
          </v-card-text>
        </v-card>
        </div>
        <br>
        <br>
        <transition name="slide">
          
    
        <div class="right-panel">
          <div class="menu">
      <v-btn @click="showInfo(1)" :color="key_indicador === 1 ? 'primary' : 'secondary'" class="button-indicador" >Indicador 1</v-btn>
      <v-btn @click="showInfo(2)" :color="key_indicador === 2 ? 'primary' : 'secondary'" class="button-indicador">Indicador 2</v-btn>
      <v-btn @click="showInfo(3)" :color="key_indicador === 3 ?  'primary' : 'secondary'" class="button-indicador">Indicador 3</v-btn>
    </div>
        <br>
    <div class="text" v-if="selectedIndicator">
      <h2>Indicador {{ key_indicador }}</h2>
      <br>
      <p>{{ selectedIndicator.indicador }}</p>
      <br>
      <h2>Evidencia</h2>
      <br>
      <p>{{ selectedIndicator.evidencia }}</p>
    </div>        </div>
      </transition>
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

              </v-row>
              <v-row v-if="momento" style="background-color: #ececec; border-radius: 20px;">
                <v-btn v-if="parametro == 'm1'" @click="downloadExcel" icon class="absolute top-0 right-0 m-2" >
                  <span class="mdi mdi-text-box-check icon-size"></span>
              </v-btn>
                <v-col cols="12">
                  <br>

                  <h1 style="text-align: center; color: gray;">Momento {{ parametro[1] }}</h1>
                  <br>

                  <p class="codigo">{{ momento.curso }}</p>
          <p class="codigo-comp">{{ obtenerClaveMo(momento.PI) }}</p>
          <br>
          <p class="descripcion"  >{{ obtenerContenidoMo(momento.PI) }}</p>
          <br>
          <br>

          <div class="download">
            <div class="pdf">
              <p class="nombre">{{ momento.AIM }}</p>
            </div>
            <div class="aim">
              <v-btn color="primary" @click="downloadPDF">Descargar PDF</v-btn>
            </div>
          </div>
     



    
        </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        </div>

        <div class="right-panelw">
            <div class="menu">
      <v-btn @click="showInfo(1)" :color="key_indicador === 1 ? 'primary' : 'secondary'">Indicador 1</v-btn>
      <v-btn @click="showInfo(2)" :color="key_indicador === 2 ? 'primary' : 'secondary'">Indicador 2</v-btn>
      <v-btn @click="showInfo(3)" :color="key_indicador === 3 ?  'primary' : 'secondary'">Indicador 3</v-btn>
    </div>
        <br>
    <div class="text" v-if="selectedIndicator">
      <h2>Indicador {{ key_indicador }}</h2>
      <br>
      <p>{{ selectedIndicator.indicador }}</p>
      <br>
      <h2>Evidencia</h2>
      <br>
      <p>{{ selectedIndicator.evidencia }}</p>
    </div>
        </div>

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
          link: null,
          selectedIndicator: null,
          key_indicador: null


    
    
        }
      },
    
      mounted() {
        this.obtenerInformacion();
        this.link = this.$refs.downloadLink;
        this.showInfo(1)

    
    
      },

      methods: {
        obtenerInformacion() {
          this.momento = json.momentos.find(momento => momento.id === this.parametro)
          this.indicadores = this.momento['indicadores']
          console.log('momento', this.momento)
          console.log('indicadores', this.indicadores )

        },
        showInfo(param) {
          console.log('funcion indicadores')
      this.selectedIndicator = this.indicadores[param];
      this.key_indicador = param;
      console.log('param', param)
      console.log('selectedIndicador', this.selectedIndicator)

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
      let fileID = ''
      if (this.parametro == 'm1') {
        fileID = '1Qr59cm0rqC-48No3kkN73hWXRqMEQBpC'
      } else if (this.parametro == 'm2') {
        fileID = '1_3_h8v9-3eDjBpIIvk6Y_tKti7h73k21'

      } else {
        fileID = '1SJxT0Do5oOPZg8Wh-TmISL1O_dPo2WKR'

      }
      console.log("descargar pdf")
      console.log("id", fileID)

      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
      link.download = 'AIM1.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
  },
  downloadExcel() {
      let fileID = '1RlSPJ_gqjhFcs-Ivdw66CwVlpgkS-lph'
    
      console.log("descargar pdf")
      console.log("id", fileID)

      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
      link.download = 'Evaluacion Momento';
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


.button-indicador {
  width: 100px; /* Ancho del botón */
  font-size: 12px; /* Tamaño de fuente más pequeño */
  padding: 5px; /* Espaciado interno del botón */
}

.icon-size {
  font-size: 34px; /* Tamaño del ícono más grande */
}
.download 
{
  display: flex;
  width: 100%;
  height: auto;
}

.download-movil {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}

.pdf {
  display: grid;
  place-items: center;
  width: 100%;

}
.aim {
  display: grid;
  place-items: center;
  width: 100%;

}
    
    


    
    .codigo {
      font-size: 22px;
      color: #389fff;
      text-align: center;
      font-weight: bold;
      
    
    }
    
    .nombre {
      font-size: 38px;
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
      color: #389fff;

    
    }
    
    .codigo-comp {
      font-size: 23px;
      color: #6b6b6b;
      margin-top: 5px;
      text-align: center;
      font-weight: bold
    
    
    }
    
    .descripcion {
      font-size: 18px;
      color: #2b2b2b;
      margin-top: 20px;
      text-align: justify;
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
      flex-direction: column;
      height: auto;
      overflow: auto
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
    
    .menu {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu button {
  margin-right: 10px;
}

.info {
  margin-top: 20px;
  display: grid;
  place-items: center;
}

.info h3 {
  margin-top: 10px;
}

.text {
  background-color: rgb(241, 241, 241);
  padding: 10px;
}

.text h2 {
  color: #389fff;
}

.text p {
  font-size: 18px;
      color: #2b2b2b;
}

    
    </style>
    