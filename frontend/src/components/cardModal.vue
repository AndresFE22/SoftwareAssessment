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
      <v-btn @click="dialog = false">
            Disagree
          </v-btn>

          <v-btn @click="dialog = false">
            Agree
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
      dialog: false
    }
  },

    watch: {
    parametro: {
      handler() {
          this.dialog = true; 
      }
    }
  },
}

</script>

<style scoped>

</style>
