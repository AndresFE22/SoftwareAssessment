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
    </v-main>
  </v-app>
</template>

<script>



export default {
  name: 'App',

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
        
      ]
    }
  },
  computed: {
    hideAppBar() {
      return this.$route.meta && this.$route.meta.hideAppBar
    }
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
}
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

</style>
