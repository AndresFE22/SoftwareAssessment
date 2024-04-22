<template>
    <v-container>
        <div v-if="$vuetify.breakpoint.mdAndDown" style="background-color: white; width: 100%; padding: 30px;">
    <!-- Sección de Colaboradores -->
    <v-row class="mb-6">
        <v-col>
            <h1 style="font-size: 40pt;">Créditos</h1>
            <h1 style="color: gray;" >Colaboradores</h1>

          <!-- Lista de Colaboradores -->
          <v-list>
            <v-list-item-group>
              <v-list-item class="list" v-for="colaborador in colaboradores" :key="colaborador.id">
                <v-list-item-content>
                  <v-list-item-title style="flex: 1;
                  font-family: 'Raleway, sans-serif';
                   color: gray; font-size: 14pt;">{{ colaborador.nombre }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <!-- Sección de Logos -->
      <v-row>
        <v-col>
          <!-- Espacios para Logos -->
          <v-row>
            <v-col class="text-center mb-4">
              <img src="../assets/banner.png" alt="Logo" height="70px" />

            </v-col>
            <v-col class="text-center mb-4">
              <img src="../assets/edutlan.jpg" alt="Logo" height="100px" />
            </v-col>

          </v-row>
        </v-col>
      </v-row>
    </div>
  
    <div v-if="$vuetify.breakpoint.lgAndUp" style="background-color: white; width: 100%; padding: 30px;">
    <!-- Sección de Colaboradores -->
    <v-row class="mb-6">
        <v-col>
            <h1 style="font-size: 40pt;">Créditos</h1>
            <h1 style="color: gray;" >Colaboradores</h1>

          <!-- Lista de Colaboradores -->
          <v-list>
            <v-list-item-group>
              <v-list-item class="list" v-for="colaborador in colaboradores" :key="colaborador.id">
                <v-list-item-content>
                  <v-list-item-title style="flex: 1;
                  font-family: 'Raleway, sans-serif';
                   color: gray" class="text-h6">{{ colaborador.nombre }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
      </v-row>
      <!-- Sección de Logos -->
      <v-row>
        <v-col>
          <!-- Espacios para Logos -->
          <v-row>
            <v-col class="text-center mb-4">
              <img src="../assets/banner.png" alt="Logo" height="140px" />

            </v-col>
            <v-col class="text-center mb-4">
              <img src="../assets/edutlan.jpg" alt="Logo" height="140px" />
            </v-col>

          </v-row>
        </v-col>
      </v-row>
    </div>
  
  
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        colaboradores: [
          { id: 1, nombre: 'Manuel Fernando Caro Piñeres' },
          { id: 2, nombre: 'Danilsa Del Carmen Lorduy Arellano' },
          { id: 2, nombre: 'Isabel Cristina Muñoz Sierra' },
        ],
        logos: [
          { id: 1, url: '../assets/UNICOR.png' },
          { id: 2, url: '../assets/edutlan.jpg' },
          { id: 3, url: '../assets/liemav.png' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Raleway:wght@600&family=Roboto:wght@300;900&display=swap');
  /* Estilos personalizados */
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  
  .mb-6 {
    margin-bottom: 2.5rem;
  }

  /* Agrega estilos para separar los nombres en columnas */
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px; /* Ajusta el relleno según sea necesario */
  border-bottom: 1px solid #ccc; /* Línea divisoria entre nombres */
}


  </style>
  