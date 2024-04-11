<template>
<div class="text-center pa-4">
    <v-dialog
    v-model="dialog"
      max-width="400"
      persistent
    >


      <v-card
        prepend-icon="mdi-map-marker"
        text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        title="Use Google's location service?"
      >  
      {{ parametro }}


          <v-btn @click="close">
            cerrar
          </v-btn>
       
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    parametro: {
      type: String,
      required: true
    }
    },

  data() {
    return {
      dialog: true
    }
  },

  methods: {
    close() {
      this.$emit('close')
    }
  }

  //   watch: {
  //   parametro: {
  //     handler() {
  //         this.dialog = true; 
  //     }
  //   }
  // },
}

</script>

<style scoped>

</style>
