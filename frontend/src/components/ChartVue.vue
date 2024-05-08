<template>
  <div class="chart-container">
    <svg :width="chartSize" :height="chartSize" viewBox="0 0 100 100">
      <!-- Círculo grande -->
      <circle cx="50" cy="50" :r="outerRadius" fill="rgb(237,125,49)" @click="modalMoment('m1')" />
      <!-- Círculo mediano -->
      <circle cx="50" cy="60" :r="mediumRadius" fill="rgb(165,165,165)" @click="modalMoment('m2')" />
      <!-- Círculo pequeño -->
      <circle cx="50" cy="70" :r="innerRadius" fill="rgb(255,192,0)" @click="modalMoment('m3')" />
      <!-- Texto -->
      <text style="font-weight: bold;" fill="white" x="50" y="23" text-anchor="middle" dominant-baseline="middle" font-size="4">{{ chartTextOuter }}</text>

      <text style="font-weight: bold;" fill="white" x="50" y="42" text-anchor="middle" dominant-baseline="middle" font-size="4">{{ chartTextMedium }}</text>

      <text style="font-weight: bold;" fill="white" x="50" y="70" text-anchor="middle" dominant-baseline="middle" font-size="4">{{ chartTextInner }}</text>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSize: 600,
      outerRadius: 40,
      mediumRadius: 30,
      innerRadius: 20,
      chartTextOuter: 'Ejecución del plan de clase',
      chartTextMedium: 'Plan de clase',
      chartTextInner: 'Recurso educativo',

      
    };
  },
  methods: {
        modalMoment(moment) {
          console.log('ejecutado moment')
        this.$emit('moment', moment)
      },
      }
};
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}




</style>
