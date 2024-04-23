<template>
    <div>


<div class="movil"  v-if="$vuetify.breakpoint.xsOnly">
<div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">
  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <!-- <image href="../assets/lineasmovil.png" width="400" height="500" /> -->
      <g>
        <rect 
          x="48" 
          y="40" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203437')"
        />
        <rect 
          x="93" 
          y="40" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203458')"
        />

        <!-- <rect 
          x="143" 
          y="40" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p3')"
        />

        <rect 
          x="218" 
          y="40" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p4')"
        />

        <rect 
          x="320" 
          y="40" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p5')"
        />


        /> -->

        <text x="64" y="60" class="texto-rectangulo" @click="openModal('203437')"
></text>
        <text x="109" y="60" class="texto-rectangulo" @click="openModal('203458')"></text>
        <!-- <text x="158" y="60" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="234" y="60" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="335" y="60" class="texto-rectangulo" @click="openModal('p5')">P5</text> -->







      </g>
    </svg>


  </div>
</div>


<div class="movil"  v-if="$vuetify.breakpoint.smOnly">
  <div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">

  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <!-- <image href="../assets/lineasmovil.png" width="700" height="500" /> -->
      <g>
        <rect 
          x="162" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203437')"
        />
        <rect 
          x="220" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203458')"
        />

        <!-- <rect 
          x="283" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p3')"
        />

        <rect 
          x="378" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p4')"
        />

        <rect 
          x="504" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p5')"
        /> -->





        <text x="177" y="20" class="texto-rectangulo" @click="openModal('203437')"
></text>
        <text x="235" y="20" class="texto-rectangulo" @click="openModal('203458')"></text>
        <!-- <text x="300" y="20" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="395" y="20" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="520" y="20" class="texto-rectangulo" @click="openModal('p5')">P5</text> -->

      </g>
    </svg>


  </div>
</div>



<div class="movil"  v-if="$vuetify.breakpoint.mdOnly">
  <div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">

  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <!-- <image href="../assets/lineasmovil.png" width="700" height="500" /> -->
      <g>
        <rect 
          x="162" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203437')"
        />
        <rect 
          x="220" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203458')"
        />

        <!-- <rect 
          x="283" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p3')"
        />

        <rect 
          x="378" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p4')"
        />

        <rect 
          x="504" 
          y="0" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p5')"
        /> -->


        <text x="177" y="20" class="texto-rectangulo" @click="openModal('203437')"
></text>
        <text x="235" y="20" class="texto-rectangulo" @click="openModal('203458')"></text>
        <!-- <text x="300" y="20" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="395" y="20" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="520" y="20" class="texto-rectangulo" @click="openModal('p5')">P5</text> -->


      </g>
    </svg>


  </div>
</div>

<div class="pc" v-if="$vuetify.breakpoint.lgAndUp" >
  <div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">

<div class="svg">
  <svg width="800" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <!-- <image href="../assets/lienas.png" width="800" height="500"/> -->
      <g>
        <rect 
          x="150" 
          y="60" 
          width="140" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203437')"
        />
        <rect 
          x="150" 
          y="187" 
          width="140" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('203458')"
        />
<!-- 
        <rect 
          x="150" 
          y="285" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p3')"
        />

        <rect 
          x="150" 
          y="345" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p4')"
        />

        <rect 
          x="150" 
          y="400" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p5')"
        /> -->


        <text x="170" y="85" class="texto-rectangulo" @click="openModal('203437')"></text>
        <text x="170" y="213" class="texto-rectangulo" @click="openModal('203458')"></text>
        <!-- <text x="170" y="310" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="170" y="370" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="170" y="425" class="texto-rectangulo" @click="openModal('p5')">P5</text> -->



      </g>
    </svg>

</div>
  </div>
</div>
 
  <div>
    </div>
    <div v-if="dialog" class="modal">
      <div class="model-content"  > <modal @closec="closeModal" :parametro="modalParametro" class="modal-above"/> 
    </div>
    </div>
    </div>
  </template>
  
  <script>
  // Importa el componente desde la carpeta "components"
  import modal from '../components/cardModalCourses.vue';

  
  export default {
    components: {
      modal
    },
    data() {
    return {
      modalParametro: '',
      dialog: false,
    }
  },
  methods: {
    openModal(parametro) {
      console.log(parametro)
      this.modalParametro = parametro
      this.dialog = true
      this.$emit('data')


    },
    closeModal() {  
      this.dialog = false
    },

  }
  };
  </script>
  
  <style>

 * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }

.diagrama {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('../assets/fondoGeneral.svg');
  background-size: cover;

}

.text {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  text-align: center

}

.svg {
  background-color: #ffffff;
  width: 60%;
  padding: 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 19px 0px 29px -7px rgba(0, 204, 255, 0.1);
}


.svgint {
  background-color: rgba(255, 255, 255, 0);

}

.mi-rectangulo {
  fill: #3498db; /* Color de relleno del rectángulo */
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s; /* Transición suave al cambiar de color */
  cursor: pointer;
  border-radius: 90px;

}

.p-rectangulo {
  fill: #FFF2CC; /* Color de relleno del rectángulo */
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s; /* Transición suave al cambiar de color */
  cursor: pointer;
  border-radius: 90px;

}



.modal {
  display: block; /* Ocultar el modal inicialmente */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  z-index: 99; /* Colocar el modal por encima del resto del contenido */
  overflow: auto; /* Permitir desplazamiento si el contenido del modal es demasiado grande */
}

/* Estilos para el contenido del modal */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* Centrar vertical y horizontalmente */
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  
}

.modal-above {
  z-index: 1000; /* Ajusta el z-index para que esté por encima del modal principal */
}

.custom-shape-divider-top-1712937765 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1712937765 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1712937765 .shape-fill {
    fill: #ffffff;
}

.c-rectangulo {
  fill: #cae5ff; /* Color de relleno del rectángulo */
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s; /* Transición suave al cambiar de color */
  cursor: pointer;
  border-radius: 90px;

}

.r-rectangulo {
  fill: #E2F0D9; /* Color de relleno del rectángulo */
  stroke-width: 2;
  transition: fill 0.3s, stroke 0.3s; /* Transición suave al cambiar de color */
  cursor: pointer;
  border-radius: 90px;

}
/*FFF2CC amarillo 
DEEBF7 azul
E2F0D9 verde*/


.texto-rectangulo {
  fill: rgb(63, 63, 63); /* Color del texto */
  font-size: 16px; /* Tamaño de la fuente */
  text-anchor: middle; /* Alineación del texto */
  cursor: pointer;
  font-weight: bold;
}

  </style>
  