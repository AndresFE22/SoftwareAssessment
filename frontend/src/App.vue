<template>
  <v-app>
    <v-app-bar v-if="!hideAppBar && !$vuetify.breakpoint.smAndDown"
      app
      color="white"
      dar
    >
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          contain
          min-width="100"
          src="./assets/logoassesment.jpg"
          width="140"
          @click="content"
          style="cursor: pointer;"
        />
      </div>

      <v-spacer></v-spacer>
      <router-link to="/content">      
        <v-btn text :class="{ 'color-active': isActiveRoute('/content')}" >Contenido</v-btn>
      </router-link>
      <router-link to="/General">      
        <v-btn text :class="{ 'color-active': isActiveRoute('/General')}" >General</v-btn>
      </router-link>
      <router-link to="/Course">      
        <v-btn text :class="{ 'color-active': isActiveRoute('/Course')}" >Cursos</v-btn>
      </router-link>
      <router-link to="/Moment">      
        <v-btn text :class="{ 'color-active': isActiveRoute('/Moment')}" >Momentos</v-btn>
      </router-link>
      <router-link to="/evaluation">      
      <v-btn text :class="{ 'color-active': isActiveRoute('/evaluation')}" >Evaluación</v-btn>
    </router-link>

    <router-link to="/credit">      
      <v-btn text :class="{ 'color-active': isActiveRoute('/credit')}" >Créditos</v-btn>
    </router-link>
    <v-spacer>
    </v-spacer>


      <v-text-field
        v-model="search"
        :items="results"
        label="Buscar"
        prepend-icon="mdi-magnify"
        variant="outlined"
        style="width: 1px; margin-top: 2em;"
        @input="onInput"
      ></v-text-field>

      <div v-if="showDropdown" class="dropdown">
      <div v-for="item in filteredResults" :key="item" @click="selectItem(item)" class="dropdown-item">{{ item.name }}</div>
    </div>
    <v-spacer></v-spacer>
    <span class="mdi mdi-logout"></span><input type="submit" value="Salir" @click="logout">


    </v-app-bar>

    <v-app-bar v-if="!hideAppBar && $vuetify.breakpoint.smAndDown"
      app
      color="white"
      dar

    >

    <div class="d-flex align-center">
        <v-img
          alt="logo"
          contain
          min-width="100"
          src="./assets/logoassesment.jpg"
          width="140"
          @click="content"
          style="cursor: pointer;"


        />
      </div>

<v-spacer></v-spacer>
<v-text-field
        v-model="search"
        :items="results"
        label="Buscar"
        prepend-icon="mdi-magnify"
        variant="outlined"
        style="width: 1px; margin-top: 2em;"
        @input="onInput"
      ></v-text-field>
      <div v-if="showDropdown" class="dropdown">
      <div v-for="item in filteredResults" :key="item" @click="selectItem(item)" class="dropdown-item">{{ item.name }}</div>
    </div>
<v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon>mdi mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.route)">
            <v-list-item-title>
              <v-btn text :class="{ 'color-active': isActiveRoute(item.route) }">{{ item.text }}</v-btn>

            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-main class="fondo">
      <router-view/>
      <div v-if="dialog" class="modal">
      <div class="model-content"  > 
        <modal v-if="typeModal == 'modal'" @close="closeModal" :parametro="modalParametro" class="modal-above"/>
        <modalCourses v-if="typeModal == 'modalCourses'" @closec="closeModal" :parametro="modalParametro" class="modal-above"/> 
        <modalMoment v-if="typeModal == 'modalMoment'" @closec="closeModal" :parametro="modalParametro" class="modal-above"/>
    </div>
    </div>
    </v-main>
  </v-app>
</template>

<script>

// import axios from 'axios'
import json from './json/informacion.json'
import modal from './components/cardModal.vue';
import modalCourses from './components/cardModalCourses.vue';
import modalMoment from './components/cardModalMoment.vue';



export default {
  name: 'App',
  components: {
      modal,
      modalCourses,
      modalMoment
    },
  data() {
    return {
      drawer: false,
      menuItems: [
        { text: 'Contenido', route: '/content' },
        { text: 'General', route: '/General' },
        { text: 'Cursos', route: '/Course' },
        { text: 'Momentos', route: '/Moment' },
        { text: 'Evaluación', route: '/evaluation' },
        { text: 'Créditos', route: '/credit' }

        
      ],
      search: '',
      results: [],
      showDropdown: false,
      selectedItem: null,
      dialog: false,
      modalParametro: '',
      typeModal: null

        }
  },
  computed: {
    hideAppBar() {
      return this.$route.meta && this.$route.meta.hideAppBar
    },
    filteredResults() {
      if (this.search) {
        return this.results.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
      } else {
        return []
      }

    },
  }, 
  
  mounted() {
    this.loadResultsFromJson();
  },
  methods: {
    isActiveRoute(route) {
      return this.$route.path === route
    },
    navigateTo(route) {
      this.drawer = false; 
      this.$router.push(route); 
    },
    content() {
  if (this.$route.path !== '/content') {
    this.$router.push('/content');
  }
},
logout() {
    localStorage.removeItem('session');
    this.$router.push('/auth');
  },
  onInput() {
 
    this.showDropdown = true;

    },

    selectItem(item) {

      

      this.selectedItem = item;
      this.showDropdown = false;
      console.log("selected", this.selectedItem)
      const parametro = this.selectedItem.id_execute 
      console.log(parametro)
      if (parametro.startsWith('p', 'c', 'r')) {
        this.typeModal = 'modal';
      } else if (parametro.length > 0 && !isNaN(parametro[0])) {
        this.typeModal = 'modalCourses';
      } else {
        this.typeModal = 'modalMoment';
      }      
      this.modalParametro = parametro
      this.dialog = true
      this.$emit('data')
    },

    loadResultsFromJson() {
        this.results = json.nombres
        console.log('json', this.results)

    },

    closeModal() {  
      this.dialog = false
    },

  },



};
</script>

<style>

.nav {
  z-index: 999;
}
.color-active {
  background-color: #00BBDD;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.color-mobile-active {
  font-weight: bold;
  text-decoration: none;
}

.v-toolbar .v-btn.color-active,
.v-toolbar .v-btn.color-active .v-btn__content {
  color: white;
}

.fondo {
  background-image: url('../src/assets/fondo.jpg');
  background-size: cover;
}

.dropdown {
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  max-width: 320px;
  top: 60px;
  right: 10px;
  background-color: white;
}

.dropdown-item {
  padding: 8px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
