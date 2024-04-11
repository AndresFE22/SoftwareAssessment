<template>
    <div>
      <div class="diagrama">
    <svg width="2080" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../assets/lienas.png" width="1000" height="500"/>
      <g>
        <rect 
          x="250" 
          y="60" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p1')"
        />
        <rect 
          x="250" 
          y="187" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p2')"
        />

        <rect 
          x="250" 
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
          x="250" 
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
          x="250" 
          y="400" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="p-rectangulo" 
          stroke="gray"
          @click="openModal('p5')"
        />



        <rect 
          x="445" 
          y="25" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c1')"
        />
        <rect 
          x="445" 
          y="90" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c2')"
        />

        <rect 
          x="445" 
          y="155" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c3')"
        />

        <rect 
          x="445" 
          y="218" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c4')"
        />

        <rect 
          x="445" 
          y="280" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c5')"
        />
        
        <rect 
          x="445" 
          y="345" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c6')"
        />

        <rect 
          x="445" 
          y="400" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c7')"
        />

        <rect 
          x="720" 
          y="0" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r1')"
        />
        <rect 
          x="720" 
          y="70" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r2')"
        />

        <rect 
          x="720" 
          y="162" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r3')"
        />

        <rect 
          x="720" 
          y="255" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r4')"
        />

        <rect 
          x="720" 
          y="320" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r5')"
        />
        
        <rect 
          x="720" 
          y="378" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r6')"
        />

        <rect 
          x="720" 
          y="430" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r7')"
        />

        <text x="270" y="85" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="270" y="213" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="270" y="310" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="270" y="370" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="270" y="425" class="texto-rectangulo" @click="openModal('p5')">P5</text>


        <text x="465" y="50" class="texto-rectangulo" @click="openModal('c1')">C1</text>
        <text x="465" y="115" class="texto-rectangulo" @click="openModal('c2')">C2</text>
        <text x="465" y="180" class="texto-rectangulo" @click="openModal('c3')">C3</text>
        <text x="465" y="245" class="texto-rectangulo" @click="openModal('c4')">C4</text>
        <text x="465" y="305" class="texto-rectangulo" @click="openModal('c5')">C5</text>
        <text x="465" y="370" class="texto-rectangulo" @click="openModal('c6')">C6</text>
        <text x="465" y="425" class="texto-rectangulo" @click="openModal('c7')">C7</text>3



        <text x="740" y="25" class="texto-rectangulo" @click="openModal('r1')">R1</text>
        <text x="740" y="95" class="texto-rectangulo" @click="openModal('r2')">R2</text>
        <text x="740" y="187" class="texto-rectangulo" @click="openModal('r3')">R3</text>
        <text x="740" y="280" class="texto-rectangulo" @click="openModal('r4')">R4</text>
        <text x="740" y="345" class="texto-rectangulo" @click="openModal('r5')">R5</text>
        <text x="740" y="405" class="texto-rectangulo" @click="openModal('r6')">R6</text>
        <text x="740" y="455" class="texto-rectangulo" @click="openModal('r7')">R7</text>

      </g>
    </svg>
  </div>
  <div>
    </div>
    <div v-if="dialog" class="modal">
      <div class="model-content"> <modal @close="closeModal" :parametro="modalParametro" class="modal-above"/> 
    </div>
    </div>
    </div>
  </template>
  
  <script>
  // Importa el componente desde la carpeta "components"
  import modal from '../components/cardModal.vue';

  
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

    },
    closeModal() {  
      this.dialog = false
    },

  }
  };
  </script>
  
  <style>
.diagrama {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
  width: 80%;
}

.modal-above {
  z-index: 1000; /* Ajusta el z-index para que esté por encima del modal principal */
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
  