<template>
  <div>
    <section class="curved"></section>
    <div class="resultado-aprendizaje">
    <h1>¿Qué es un resultado de aprendizaje?</h1>
    <p>Un resultado de aprendizaje es una declaración que describe lo que un estudiante será capaz de hacer al completar un curso, programa o actividad de aprendizaje.</p>
    
    <h3>Características de un resultado de aprendizaje:</h3>
    <ul class="caracteristicas-lista">
      <li>Especifica lo que se espera que el estudiante logre.</li>
      <li>Es medible y observable.</li>
      <li>Se centra en el resultado deseado, no en los procesos de aprendizaje.</li>
      <li>Es relevante para el área de estudio o la materia.</li>
    </ul>
    
    <h2>¿Cómo se hace un resultado de aprendizaje?</h2>
    <p>Para crear un resultado de aprendizaje efectivo, se sigue un proceso que incluye:</p>
    <ol>
      <li>Identificar las habilidades, conocimientos o competencias que se espera que los estudiantes adquieran.</li>
      <li>Describir claramente lo que los estudiantes deberían ser capaces de hacer al finalizar el aprendizaje.</li>
      <li>Definir criterios de evaluación para medir el logro del resultado de aprendizaje.</li>
      <li>Revisar y ajustar el resultado de aprendizaje según sea necesario.</li>
    </ol>
    <div class="imagen-horizontal">
      <img src="../assets/grafico.png" alt="Descripción de la imagen">
    </div>
    <!-- Espacio para la imagen horizontal -->

  </div>
  <div class="parrafo-completo">
    <h3>Ejemplo:</h3>
    <h4 class="ra">Resultado de aprendizaje curso: C203427-RA001</h4>
    <h4 class="accion">Describe <span class="mdi mdi-arrow-right-thin"></span>
 <strong>VERBO</strong></h4> 
    <h4 class="objeto">las características de diferentes tipos de agentes inteligentes <span class="mdi mdi-arrow-right-thin"></span><strong>OBJETO</strong><br> y sus interacciones con el ambiente </h4>
    <h4 class="contexto">en el contexto de la inteligencia artificial (C), <span class="mdi mdi-arrow-right-thin"></span><strong>CONTEXTO</strong></h4>
    <h4 class="finalidad">para establecer posibles usos en el campo educativo (F)<span class="mdi mdi-arrow-right-thin"></span><strong>FINALIDAD</strong></h4>
  </div>
  <section class="curved-foot"></section>
  </div>
</template>

<script>


export default {
  components: {
  
  },
  data() {
  return {
  
  }
},
methods: {

}
};
</script>

<style>
/* Estilos específicos para este componente */
.parrafo-completo {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.parrafo-completo h3 {
  color: #333;
}

.parrafo-completo h4 {
  font-size: 16px;
  line-height: 1.6;
  margin: 10;
}

.ra {
  color: #4b4b4b;
  font-weight: bold;
}

.codigo {
  color: #C70039; /* Color para el segundo párrafo */
}

.accion {
  color: #1bb198; /* Color para el tercer párrafo */
}

.objeto {
  color: #ad364e; /* Color para el cuarto párrafo */
}

.contexto {
  color: #f14749; /* Color para el quinto párrafo */
}

.finalidad {
  color: #d96328; /* Color para el sexto párrafo */
}
.curved {
  position: relative;
  background: #5cd1ff;
  height: 10vh;
  border-bottom-left-radius: 50% 30%;
  border-bottom-right-radius: 50% 30%;
}

.curved-foot {
  position: relative;
  background: #5cd1ff;
  height: 10vh;
}

.resultado-aprendizaje ul.caracteristicas-lista {
  list-style-type: disc; /* Cambia el color del punto de la lista */
}


/* Estilos específicos para este componente */
.resultado-aprendizaje {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.resultado-aprendizaje h2 {
  color: #525252;
}

.resultado-aprendizaje h3 {
  color: #525252;
}

.resultado-aprendizaje p,
.resultado-aprendizaje ul,
.resultado-aprendizaje ol {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
}

.resultado-aprendizaje ul,
.resultado-aprendizaje ol {
  margin-left: 20px;
}

.resultado-aprendizaje .imagen-horizontal {
  margin-top: 20px;
  text-align: center;
}

.resultado-aprendizaje .imagen-horizontal img {
  max-width: 100%;
  height: auto;
}
h1 {
  color: #2ac3ff;
}
</style>
