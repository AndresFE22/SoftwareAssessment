<template>
    <div class="tooltip-container">
      <span class="tooltip">{{ data.descripcion }}</span>
      <span class="text">{{ data.nombre }}</span>

      
      <div>
  </div>

  <div ref="chartContainer"></div>

    </div>

  </template>
  
  <script>

  // import data from  '../../../json/informacion.json'
  import * as d3 from 'd3';


  export default {
    name: 'r1D',
    mounted() {
      this.renderChart();
  },
    data() {
    return {
      data: 'hola',
      // data2: {}, // Asegúrate de proporcionar los datos necesarios para el árbol
      width: 928,
      dx: 10,
      dy: 10 // Este valor puede ajustarse según tu diseño
  }
},
  methods: {
    renderChart() {
      const root = d3.hierarchy(this.data);
      const tree = d3.tree().nodeSize([this.dx, this.dy]);
      root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
      tree(root);

      let x0 = Infinity;
      let x1 = -x0;
      root.each(d => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
      });

      const height = x1 - x0 + this.dx * 2;

      const svg = d3.select(this.$refs.chartContainer)
        .append("svg")
        .attr("width", this.width)
        .attr("height", height)
        .attr("viewBox", [-this.dy / 3, x0 - this.dx, this.width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");

      const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5)
        
      link.selectAll()
        .data(root.links())
        .join("path")
        .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x));

      const node = svg.append("g")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 3)
        .selectAll()
        .data(root.descendants())
        .join("g")
        .attr("transform", d => `translate(${d.y},${d.x})`);

      node.append("circle")
        .attr("fill", d => d.children ? "#555" : "#999")
        .attr("r", 2.5);

      node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.children ? -6 : 6)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name)
        .attr("stroke", "white")
        .attr("paint-order", "stroke");
    }
  }
  
}

  </script>


  
  <style>
  /* This is an example, feel free to adjust this code */
  
  .tooltip-container {
    width: auto;
    --background: linear-gradient(45deg, #22d3ee, #1f9df5);
    position: relative;
    background: var(--background);
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px; 
    padding: 0.5em 1em; 
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: #fff;
    display: inline-block;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%) scale(0.8);
    transform-origin: bottom;
    padding: 0.3em 0.6em;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    background: var(--background);
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: auto;
    display: inline-block;

  }
  
  .tooltip::before {
    position: absolute;
    content: "";
    height: 0.6em;
    width: 0.6em;
    bottom: -0.2em;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    background: var(--background);
  }
  
  .tooltip-container:hover .tooltip {
    top: -30px; /* Ajusta la posición del tooltip */
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateX(-50%) scale(1);
  }
  .tooltip-container:hover {
    transform: scale(0.95); /* Ajusta el tamaño del contenedor al pasar el mouse */
  }
  </style>
  