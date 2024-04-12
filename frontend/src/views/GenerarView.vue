<template>
    <div>
      <div class="custom-shape-divider-top-1712937765">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
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
      <div class="model-content"  > <modal @close="closeModal" :parametro="modalParametro" class="modal-above"/> 
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
  height: 100%;
  width: 100%;
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
  