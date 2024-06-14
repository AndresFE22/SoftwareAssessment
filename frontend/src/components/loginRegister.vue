<template>
    <v-container>
        <v-row align="center" justify="center" >
            <v-col cols="12" sm="10">
              <v-card class="elevation-6 mt-10"  >
               <v-window v-model="step">

                  <v-window-item :value="1">
                    <v-row>


                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">
                          <h4
                            class="text-center"
                          >Ingresa con tu cuenta</h4>
                          <h5
                            class="text-center  grey--text "
                          >Ingresa para iniciar con la ruta de aprendizaje</h5>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                             
                            <v-text-field
                              v-model="UsuarioLogin"
                              label="Nombre de usuario"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-16"
                            />
                            <v-text-field
                              v-model="ContraseñaLogin"
                              label="Contraseña"
                              outlined
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
<br><br>

                              </v-row>
                            <v-btn color="blue" dark block tile @click="login" >Iniciar Sesión</v-btn>
                            <br>
                            <br>
                            <v-alert v-if="alert.visible" :type="alert.type" dismissible @input="alert.visible = false">
      {{ alert.message }}
    </v-alert>
                            <br><br>
                           <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                            <v-btn depressed outlined color="grey">
                            <img src="../assets/Rotulo informatica.png" alt="Logo 1" style="width: 150px;" >
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>

                          <v-btn depressed outlined color="grey">
                            <img src="../assets/logoActualizado.jpg" alt="Logo 2" style="width: 60px;">

                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                           </div>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                      <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                      <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                          <h3 class="text-center ">¿No tienes cuenta?</h3>
                          <h5
                            class="text-center"
                          >Registrate aquí</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step++">Regístrarse</v-btn>
                        </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row >
                      <v-col cols="12" md="6" class="blue rounded-br-xl">
                       <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text" >
                          <h3 class="text-center ">¿Ya tienes cuenta?</h3>
                          <h5
                            class="text-center">
                            Ingresa aqui para iniciar
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step--">Iniciar sesión  </v-btn>
                        </div>
                        </div>
                      </v-col>
  
                      <v-col cols="12" md="6">
                        <v-card-text class="mt-12">

                          <h4
                            class="text-center"
                          >Crea una cuenta</h4>
                          <h5
                            class="text-center  grey--text "
                          >Para iniciar con la ruta de aprendizaje</h5>
                          <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                             <v-row>
                             <v-col cols="12" sm="6">
                              <v-text-field
                              v-model="Nombres"
                              label="Nombres"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                            />
                             </v-col>
                             <v-col cols="12" sm="6">
                              <v-text-field
                              v-model="Apellidos"
                              label="Apellidos"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                            />
                             </v-col>
                             </v-row>
                            <v-text-field
                            v-model="UsuarioRegister"
                              label="Nombre de usuario"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                            />
                            <v-text-field
                            v-model="ContraseñaRegister"
                              label="Contraseña"
                              outlined
                              dense
                              color="blue"
                            autocomplete="false"
                             type="password"
                            
                            />
                              <v-row>
                                <br>
                                <br>
                              </v-row>
                            <v-btn color="blue" dark block tile @click="register">Registrarse</v-btn>
                       
 <br>
 <br>

                            <v-alert v-if="alert.visible" :type="alert.type" dismissible @input="alert.visible = false">
      {{ alert.message }}
    </v-alert>
                            <br><br>
                           <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                          <v-btn depressed outlined color="grey">
                            <img src="../assets/Rotulo informatica.png" alt="Logo 1" style="width: 150px;" >
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>

                          <v-btn depressed outlined color="grey">
                            <img src="../assets/logoActualizado.jpg" alt="Logo 2" style="width: 60px;">

                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                           </div>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
        </v-row>

    </v-container>
  </template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    step: 1,
    UsuarioLogin: '',
    ContraseñaLogin: '',
    Nombres: '',
    Apellidos: '',
    UsuarioRegister: '',
    ContraseñaRegister: '',
    alert: {
        visible: false,
        type: '',
        message: ''
      }
  }),

  created() {
    const session = localStorage.getItem('session');
    if (session) {
      this.$router.push('/content');
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://cuentaapi.pythonanywhere.com/login', {
          user: this.UsuarioLogin,
          password: this.ContraseñaLogin,
        });
        console.log(response.data);
        if (response.data.error) {
          this.showAlert('error', response.data.error);
        } else {
          localStorage.setItem('session', 'iniciada');
          this.$router.push('/content');
        }      } catch (error) {
        console.error('Error en el login:', error);
        this.showAlert('error', 'Error en el servidor. Inténtalo nuevamente más tarde.');
      }
    },

    showAlert(type, message) {
      this.alert.type = type;
      this.alert.message = message;
      this.alert.visible = true;
      setTimeout(() => {
        this.alert.visible = false;
      }, 2000);
    },
    async register() {
      console.log('register')
      try {
        const response = await axios.post('https://cuentaapi.pythonanywhere.com/register', {
          name: this.Nombres + ' ' + this.Apellidos,
          user: this.UsuarioRegister,
          password: this.ContraseñaRegister
        });
        console.log(response.data);
        if (response.data.error) {
          this.showAlert('error', response.data.error);
        } else {
          console.log(response.data);
          this.showAlert('message', response.data.message);
          this.Nombres = '';
          this.Apellidos = '';
          this.UsuarioRegister = '';
          this.ContraseñaRegister = '';
        }    
         } catch (error) {
        console.error('Error en el registro:', error);
        // Aquí puedes manejar el error del servidor
      }
    }
  }
};
</script>+

  <style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important;
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
  }
  </style>