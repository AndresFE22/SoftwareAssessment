<template>
    <div>


<div class="movil"  v-if="$vuetify.breakpoint.xsOnly">
<div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">
  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../assets/lineasmovil.png" width="400" height="500" />
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
          @click="openModal('p1')"
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
          @click="openModal('p2')"
        />

        <rect 
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



        <rect 
          x="48" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c1')"
        />
        <rect 
          x="92" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c2')"
        />

        <rect 
          x="143" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c3')"
        />

        <rect 
          x="193" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c4')"
        />

        <rect 
          x="245" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c5')"
        />
        
        <rect 
          x="295" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c6')"
        />

        <rect 
          x="348"
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c7')"
        />

        <rect 
          x="22" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r1')"
        />
        <rect 
          x="67" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r2')"
        />

        <rect 
          x="112" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r3')"
        />

        <rect 
          x="160" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r4')"
        />

        <rect 
          x="238" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r5')"
        />
        
        <rect 
          x="315" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r6')"
        />

        <rect 
          x="365" 
          y="430" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r7')"
        />

        <text x="64" y="60" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="109" y="60" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="158" y="60" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="234" y="60" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="335" y="60" class="texto-rectangulo" @click="openModal('p5')">P5</text>


        <text x="63" y="225" class="texto-rectangulo" @click="openModal('c1')">C1</text>
        <text x="107" y="225" class="texto-rectangulo" @click="openModal('c2')">C2</text>
        <text x="158" y="225" class="texto-rectangulo" @click="openModal('c3')">C3</text>
        <text x="208" y="225" class="texto-rectangulo" @click="openModal('c4')">C4</text>
        <text x="260" y="225" class="texto-rectangulo" @click="openModal('c5')">C5</text>
        <text x="310" y="225" class="texto-rectangulo" @click="openModal('c6')">C6</text>
        <text x="365" y="225" class="texto-rectangulo" @click="openModal('c7')">C7</text>3



        <text x="380" y="450" class="texto-rectangulo" @click="openModal('r7')">R7</text>
        <text x="330" y="450" class="texto-rectangulo" @click="openModal('r6')">R6</text>
        <text x="253" y="450" class="texto-rectangulo" @click="openModal('r5')">R5</text>
        <text x="175" y="450" class="texto-rectangulo" @click="openModal('r4')">R4</text>
        <text x="127" y="450" class="texto-rectangulo" @click="openModal('r3')">R3</text>
        <text x="82" y="450" class="texto-rectangulo" @click="openModal('r2')">R2</text>
        <text x="37" y="450" class="texto-rectangulo" @click="openModal('r1')">R1</text>

      </g>
    </svg>


  </div>
</div>


<div class="movil"  v-if="$vuetify.breakpoint.smOnly">
  <div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">

  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../assets/lineasmovil.png" width="700" height="500" />
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
          @click="openModal('p1')"
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
          @click="openModal('p2')"
        />

        <rect 
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
        />



        <rect 
          x="168" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c1')"
        />
        <rect 
          x="222" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c2')"
        />

        <rect 
          x="285" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c3')"
        />

        <rect 
          x="348" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c4')"
        />

        <rect 
          x="413" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c5')"
        />
        
        <rect 
          x="475" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c6')"
        />

        <rect 
          x="538"
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c7')"
        />

        <rect 
          x="132" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r1')"
        />
        <rect 
          x="187" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r2')"
        />

        <rect 
          x="245" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r3')"
        />

        <rect 
          x="307" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r4')"
        />

        <rect 
          x="402" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r5')"
        />
        
        <rect 
          x="498" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r6')"
        />

        <rect 
          x="563" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r7')"
        />

        <text x="177" y="20" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="235" y="20" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="300" y="20" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="395" y="20" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="520" y="20" class="texto-rectangulo" @click="openModal('p5')">P5</text>


        <text x="183" y="225" class="texto-rectangulo" @click="openModal('c1')">C1</text>
        <text x="237" y="225" class="texto-rectangulo" @click="openModal('c2')">C2</text>
        <text x="299" y="225" class="texto-rectangulo" @click="openModal('c3')">C3</text>
        <text x="363" y="225" class="texto-rectangulo" @click="openModal('c4')">C4</text>
        <text x="428" y="225" class="texto-rectangulo" @click="openModal('c5')">C5</text>
        <text x="491" y="225" class="texto-rectangulo" @click="openModal('c6')">C6</text>
        <text x="555" y="225" class="texto-rectangulo" @click="openModal('c7')">C7</text>3



        <text x="580" y="489" class="texto-rectangulo" @click="openModal('r7')">R7</text>
        <text x="513" y="489" class="texto-rectangulo" @click="openModal('r6')">R6</text>
        <text x="416" y="489" class="texto-rectangulo" @click="openModal('r5')">R5</text>
        <text x="321" y="489" class="texto-rectangulo" @click="openModal('r4')">R4</text>
        <text x="260" y="489" class="texto-rectangulo" @click="openModal('r3')">R3</text>
        <text x="202" y="489" class="texto-rectangulo" @click="openModal('r2')">R2</text>
        <text x="146" y="489" class="texto-rectangulo" @click="openModal('r1')">R1</text>

      </g>
    </svg>


  </div>
</div>



<div class="movil"  v-if="$vuetify.breakpoint.mdOnly">
  <div class="text">  <h1>RUTA GENERAL DE APRENDIZAJE</h1>
</div>
  <div class="diagrama">

  <svg width="800" style="background-color: white" class="svgint" height="500" viewBox="0 0 ancho alto" xmlns="http://www.w3.org/2000/svg">
      <image href="../assets/lineasmovil.png" width="700" height="500" />
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
          @click="openModal('p1')"
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
          @click="openModal('p2')"
        />

        <rect 
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
        />



        <rect 
          x="168" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c1')"
        />
        <rect 
          x="222" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c2')"
        />

        <rect 
          x="285" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c3')"
        />

        <rect 
          x="348" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c4')"
        />

        <rect 
          x="413" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c5')"
        />
        
        <rect 
          x="475" 
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c6')"
        />

        <rect 
          x="538"
          y="205" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="c-rectangulo" 
          stroke="gray"
          @click="openModal('c7')"
        />

        <rect 
          x="132" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r1')"
        />
        <rect 
          x="187" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r2')"
        />

        <rect 
          x="245" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r3')"
        />

        <rect 
          x="307" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r4')"
        />

        <rect 
          x="402" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r5')"
        />
        
        <rect 
          x="498" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r6')"
        />

        <rect 
          x="563" 
          y="470" 
          width="30" 
          height="30"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r7')"
        />

        <text x="177" y="20" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="235" y="20" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="300" y="20" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="395" y="20" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="520" y="20" class="texto-rectangulo" @click="openModal('p5')">P5</text>


        <text x="183" y="225" class="texto-rectangulo" @click="openModal('c1')">C1</text>
        <text x="237" y="225" class="texto-rectangulo" @click="openModal('c2')">C2</text>
        <text x="299" y="225" class="texto-rectangulo" @click="openModal('c3')">C3</text>
        <text x="363" y="225" class="texto-rectangulo" @click="openModal('c4')">C4</text>
        <text x="428" y="225" class="texto-rectangulo" @click="openModal('c5')">C5</text>
        <text x="491" y="225" class="texto-rectangulo" @click="openModal('c6')">C6</text>
        <text x="555" y="225" class="texto-rectangulo" @click="openModal('c7')">C7</text>3



        <text x="580" y="489" class="texto-rectangulo" @click="openModal('r7')">R7</text>
        <text x="513" y="489" class="texto-rectangulo" @click="openModal('r6')">R6</text>
        <text x="416" y="489" class="texto-rectangulo" @click="openModal('r5')">R5</text>
        <text x="321" y="489" class="texto-rectangulo" @click="openModal('r4')">R4</text>
        <text x="260" y="489" class="texto-rectangulo" @click="openModal('r3')">R3</text>
        <text x="202" y="489" class="texto-rectangulo" @click="openModal('r2')">R2</text>
        <text x="146" y="489" class="texto-rectangulo" @click="openModal('r1')">R1</text>

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
      <image href="../assets/lienas.png" width="800" height="500"/>
      <g>
        <rect 
          x="150" 
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
          x="150" 
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
        />



        <rect 
          x="345" 
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
          x="345" 
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
          x="345" 
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
          x="345" 
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
          x="345" 
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
          x="345" 
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
          x="345" 
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
          x="620" 
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
          x="620" 
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
          x="620" 
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
          x="620" 
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
          x="620" 
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
          x="620" 
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
          x="620" 
          y="430" 
          width="40" 
          height="40"
          rx="10"
          ry="10" 
          class="r-rectangulo" 
          stroke="gray"
          @click="openModal('r7')"
        />

        <text x="170" y="85" class="texto-rectangulo" @click="openModal('p1')"
>P1</text>
        <text x="170" y="213" class="texto-rectangulo" @click="openModal('p2')">P2</text>
        <text x="170" y="310" class="texto-rectangulo" @click="openModal('p3')">P3</text>
        <text x="170" y="370" class="texto-rectangulo" @click="openModal('p4')">P4</text>
        <text x="170" y="425" class="texto-rectangulo" @click="openModal('p5')">P5</text>


        <text x="365" y="50" class="texto-rectangulo" @click="openModal('c1')">C1</text>
        <text x="365" y="115" class="texto-rectangulo" @click="openModal('c2')">C2</text>
        <text x="365" y="180" class="texto-rectangulo" @click="openModal('c3')">C3</text>
        <text x="365" y="245" class="texto-rectangulo" @click="openModal('c4')">C4</text>
        <text x="365" y="305" class="texto-rectangulo" @click="openModal('c5')">C5</text>
        <text x="365" y="370" class="texto-rectangulo" @click="openModal('c6')">C6</text>
        <text x="365" y="425" class="texto-rectangulo" @click="openModal('c7')">C7</text>3



        <text x="640" y="25" class="texto-rectangulo" @click="openModal('r1')">R1</text>
        <text x="640" y="95" class="texto-rectangulo" @click="openModal('r2')">R2</text>
        <text x="640" y="187" class="texto-rectangulo" @click="openModal('r3')">R3</text>
        <text x="640" y="280" class="texto-rectangulo" @click="openModal('r4')">R4</text>
        <text x="640" y="345" class="texto-rectangulo" @click="openModal('r5')">R5</text>
        <text x="640" y="405" class="texto-rectangulo" @click="openModal('r6')">R6</text>
        <text x="640" y="455" class="texto-rectangulo" @click="openModal('r7')">R7</text>

      </g>
    </svg>

</div>
  </div>
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
  