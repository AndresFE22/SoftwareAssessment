<template>
  <div class="diagrama">
    <svg width="1080" height="1080" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../../../assets/lienas.png" width="500" height="500"/>
      <g>
        <rect 
          x="190" 
          y="25" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="mi-rectangulo" 
          @mouseover="showTooltip" 
          @mouseout="hideTooltip"
        />
        <text x="210" y="50" class="texto-rectangulo">C1</text>

      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'DiagramaA',
  data() {
    return {
      showTooltipRect: false
    };
  },
  methods: {
    showTooltip() {
      clearTimeout(this.tooltipTimeout); // Limpiar el retardo si ya se inició uno previamente
      this.showTooltipRect = true;
    },
    hideTooltip() {
      this.tooltipTimeout = setTimeout(() => {
        this.showTooltipRect = false;
      }, 1000); // Retardo de 200 milisegundos para ocultar el tooltip
    }
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

.mi-rectangulo:hover {
  fill: #2980b9; /* Nuevo color de relleno en hover */
}

.texto-rectangulo {
  fill: white; /* Color del texto */
  font-size: 16px; /* Tamaño de la fuente */
  text-anchor: middle; /* Alineación del texto */
  cursor: pointer;
}


</style>
