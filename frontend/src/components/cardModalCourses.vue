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
import p2 from './tokens/profiles/p2.vue';
import p3 from './tokens/profiles/p3.vue';
import p4 from './tokens/profiles/p4.vue';
import p5 from './tokens/profiles/p5.vue';
import c1 from './tokens/courses/c1.vue';
import c2 from './tokens/courses/c2.vue';
import c3 from './tokens/competencies/c3.vue';
import c4 from './tokens/competencies/c4.vue';
import c5 from './tokens/competencies/c5.vue';
import c6 from './tokens/competencies/c6.vue';
import c7 from './tokens/competencies/c7.vue';
import r1 from './tokens/results/r1.vue';
import r2 from './tokens/results/r2.vue';
import r3 from './tokens/results/r3.vue';
import r4 from './tokens/results/r4.vue';
import r5 from './tokens/results/r5.vue';
import r6 from './tokens/results/r6.vue';
import r7 from './tokens/results/r7.vue';

import json from '../json/informacion.json'



export default {
  components: {
    
    c1,p2,p3,p4,p5,
    c2,c3,c4,c5,c6,c7,
    r1,r2,r3,r4,r5,r6,r7
    },
  props: {
    parametro: {
      type: String,
      required: true
    },

    },

  data() {
    return {
      dialog: true,
      resultado: null,
      nuevoParametro: '',
      card: null,
      mostrarCodigoComp: true,
      mostrarCompetencia: true,
      mostrarClaveRa: false,
      mostrarContenidoRa: false,
      ra: null


    }
  },

  mounted() {
    this.update()

    this.obtenerInformacion()


  },

  methods: {
    update() {
      this.nuevoParametro = this.parametro;

    },
    closec() {
      this.$emit('closec')
    },
    prueba() {
      console.log("funciona")
    },
    obtenerInformacion() {
      if (this.nuevoParametro == '203437') {
        this.card = 'c1'
      } else if ( this.nuevoParametro == '203458') {
        this.card = 'c2'
      }
      let tipo = 'cursos';
      let id = this.nuevoParametro;
      console.log('nuevo en funcion obtener',this.nuevoParametro)

      if (tipo && id) {
        console.log(json)
        const info = json[tipo].find(item => item.codigo === id);
        console.log(info)
        if (info) {
          this.resultado = {
            codigo: info.codigo,
            nombre: info.nombre,
            codigo_comp: info.codigo_comp,
            competencia: info.competencia,
            RA: info.RA,
          };
        } else {
          this.resultado = null;
        }
      } else {
        this.resultado = null;
      }
    },

    obtenerClaveRa(ra) {
      return ra.split(":")[0];
    },
    obtenerContenidoRa(ra) {
      return ra.split(":")[1];
    },
    change(change) {
      if (change == 'RA-203437-U1') {
        this.ra = this.resultado.RA['RA-203437-U1']
        console.log('ra',this.ra)
        console.log('ra',this.resultado.RA)
        this.activatep()

      } else if (change == 'RA-203437-U2') {
        this.ra = this.resultado.RA['RA-203437-U2']
        this.activatep()

      } else if (change == 'RA-203437-U3') {
        this.ra = this.resultado.RA['RA-203437-U3']
        this.activatep()

      } else if (change == 'RA-203437') {
        this.ra = this.resultado.RA['RA-203437']
        console.log('ra2',this.ra)

        this.activatep()

      }

    },

    activatep() {
      this.mostrarCodigoComp = false
        this.mostrarCompetencia = false
        this.mostrarClaveRa = true
        this.mostrarContenidoRa = true
    },

    getBackgroundColor(parametro) {
      // Obtener el primer carácter del parámetro
      const primerCaracter = parametro.charAt(0);
      // Definir el color según el primer carácter
      let colorFondo = '#FFFFF'; // Color por defecto
      switch (primerCaracter) {
        case 'p':
          colorFondo = '#FFF2CC'; 
          break;
        case 'c':
          colorFondo = '#DEEBF7'; // Azul claro
          break;
        case 'r':
          colorFondo = '#E2F0D9'
        // Añade más casos según sea necesario
      }
      // Retornar el objeto de estilo con el color de fondo dinámico
      return {
        backgroundColor: colorFondo
      };
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
