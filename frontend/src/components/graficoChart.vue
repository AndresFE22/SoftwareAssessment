<template>
    <div>
      <chart :chartData="data" :options="options" @click="handleClick" @mouseover="handleMouseOver"></chart>
    </div>
  </template>
  
  <script>
  import { Chart } from 'vue-chartjs';
  
  export default {
    extends: Chart,
    data() {
      return {
        data: {
          datasets: [{
            label: 'Círculos',
            data: [
              { x: 50, y: 50, r: 40 }, // Círculo grande
              { x: 100, y: 100, r: 20 }, // Círculo mediano
              { x: 130, y: 130, r: 10 } // Círculo pequeño
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      };
    },
    methods: {
      handleClick(event) {
console.log(event)  
    },
      handleMouseOver(event) {
        console.log(event)  
      }
    },
    mounted() {
      this.renderChart(this.data, this.options);
    }
  };
  </script>
  