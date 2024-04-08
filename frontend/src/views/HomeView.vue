<template>
  <v-app id="inspire">
    <v-content>
      <!-- Contenido para dispositivos móviles -->
      <div v-if="$vuetify.breakpoint.smAndDown">
        <v-container>
          <v-row>
            <v-col cols="12" class="left-panel">
              <!-- Contenido del panel izquierdo -->
              <div class="top-logos">
                <img src="../assets/Rotulo informatica.png" alt="Logo 1" class="logo">
                <img src="../assets/logoActualizado.jpg" alt="Logo 2" class="logo">
              </div>
              <v-card-text class="mt-12">
                <img src="../assets/logoassesment.jpg" alt="Logo 3" class="center-logo">
                <div class="bottom-block">
                </div>       
                <h3 class="text-center mt-4" style="color: #757575;">Medir, analizar y mejorar: el camino hacia la excelencia a través del plan de evaluación.</h3>
      </v-card-text>
              <div class="buttom">
        <button class="animated-button">
          <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span class="text">ENTRAR</span>
          <span class="circle"></span>
          <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
            </v-col>
            <v-col cols="12" md="4" class="right-panel">

</v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Contenido para pantallas grandes -->
      <div v-else>
        <div>
          <div class="containerw">
    <div class="left-panelw">
      <div class="top-logosw">
        <img src="../assets/Rotulo informatica.png" alt="Logo 1" class="logow">
        <img src="../assets/logoActualizado.jpg" alt="Logo 2" class="logow">
      </div>
      <img src="../assets/logoassesment.jpg" alt="Logo 3" class="center-logow">
      <div class="bottom-blockw"></div>
      <h3 class="text-center mt-4" style="color: #757575;">Medir, analizar y mejorar: el camino hacia la excelencia a través del plan de evaluación.</h3>
      <div class="buttomw">
        <button class="animated-button">
          <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span class="text">ENTRAR</span>
          <span class="circle"></span>
          <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="right-panelw">
    </div>
  </div>        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.right-panel {
  padding: 20px;
  background-image: url('../assets/fondoizquierda.jpg'); 
  background-size: cover;
  background-position: center;
  height: 500px;
}

.left-panel {
  padding: 20px;
  background-image: url('../assets/fondoderecha.jpg'); 
  background-size: cover;
  background-position: center;
}

.top-logos {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.bottom-block {
  height: 2px;
  background-color: #00BBDD;
  border-radius: 20px;
  margin-bottom: 20px;

}

.logo {
  width: auto;
  height: 50px;
}

.center-logo {
  display: block;
  margin: 0 auto;
  width: auto;
  height:150px;
  margin-bottom: 20px;
}


.buttom {
  display: grid;
  place-items: center;
  margin: 30px;
}



.containerw {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.left-panelw {
  padding: 20px;
  background-image: url('../assets/fondoderecha.jpg'); 
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;

}

.right-panelw {
  padding: 20px;
  background-image: url('../assets/fondoizquierda.jpg'); 
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

.top-logosw {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.logow {
  width: auto;
  height: 50px;
  margin-bottom: 50px;
}

.center-logow {
  display: block;
  margin: 0 auto;
  width: auto;
  height:190px;
  margin-bottom: 20px;
}

.bottom-blockw {
  height: 2px;
  background-color: #00BBDD;
  border-radius: 0 20px 20px 0;
  margin-bottom: 20px;

}

.buttomw {
  display: grid;
  place-items: center;
  margin: 60px;
}

.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 36px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: #00BBDD;
  box-shadow: 0 0 0 2px #00BBDD;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  align-self: center; /* Centrar el botón en el eje horizontal */
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: #00BBDD;
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: #00BBDD;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #212121;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
  color: white;
}

.animated-button:hover svg {
  fill: #ffffff;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px #00BBDD;
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}
</style>
