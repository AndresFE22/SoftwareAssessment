<template>
  <div class="diagrama">
    <svg width="2080" height="2080" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../../../assets/lienas.png" width="1000" height="500"/>
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

        />


        <text x="270" y="85" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="270" y="213" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="270" y="310" class="texto-rectangulo">P3</text>
        <text x="270" y="370" class="texto-rectangulo">P4</text>
        <text x="270" y="425" class="texto-rectangulo">P5</text>


        <text x="465" y="50" class="texto-rectangulo">C1</text>
        <text x="465" y="115" class="texto-rectangulo">C2</text>
        <text x="465" y="180" class="texto-rectangulo">C3</text>
        <text x="465" y="245" class="texto-rectangulo">C4</text>
        <text x="465" y="305" class="texto-rectangulo">C5</text>
        <text x="465" y="370" class="texto-rectangulo">C6</text>
        <text x="465" y="425" class="texto-rectangulo">C7</text>3



        <text x="740" y="25" class="texto-rectangulo">R1</text>
        <text x="740" y="95" class="texto-rectangulo">R2</text>
        <text x="740" y="187" class="texto-rectangulo">R3</text>
        <text x="740" y="280" class="texto-rectangulo">R4</text>
        <text x="740" y="345" class="texto-rectangulo">R5</text>
        <text x="740" y="405" class="texto-rectangulo">R6</text>
        <text x="740" y="455" class="texto-rectangulo">R7</text>

      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DiagramaA',
  data() {
    return {

    };
  },
  methods: {
    openModal(ficha) {
      const open = true
      console.log(ficha)
      console.log(open)

      this.$emit('ficha', ficha)
      this.$emit('open-modal', open)


    },
  }
};
</script>

<style scoped>
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
