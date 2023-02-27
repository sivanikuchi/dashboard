<template>
<div>
  <v-container fluid >
      <v-row aligne="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h2
                          class="text-center"
                        >Student Login</h2>
                        <h4
                          class="text-center  grey--text "
                        >Log in to your account so you can view your attendance</h4>
                        <v-row aligne="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            label="Username"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-16"
                           v-model="loginUsername"
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            v-model="loginPassword"
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <span class="caption red--text">{{this.loginErrMsg}}</span>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">Forgot password</span>
                              </v-col>
                            </v-row>
                          <v-btn @click="loginStudent" color="blue" dark block tile>Log in</v-btn>
                     
                         <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn> 
                         </div>-->
                          </v-col>
                        </v-row>  
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6" class="blue rounded-bl-xl" >
                    <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Are you a Teacher?</h3>
                        <h6
                          class="text-center"
                        >Let's get you all set up so you can Login to your Dashboard</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Teacher</v-btn>
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
                        <h3 class="text-center ">Are you a Student?</h3>
                        <h6
                          class="text-center"
                        >Log in to your account so you can view your attendance</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Student</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h2
                          class="text-center"
                        >Teacher Login</h2>
                        <h4
                          class="text-center  grey--text "
                        >Log in to your account so you can Login to your Dashboard</h4>
                        <v-row aligne="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                          <v-text-field
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-16"
                          />
                          <v-text-field
                            label="Password"
                            outlined
                            dense
                            color="blue"
                          autocomplete="false"
                           type="password"
                          
                          />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <span class="caption red--text">{{this.loginErrMsg}}</span>

                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">Forgot password</span>
                              </v-col>
                            </v-row>
                            
                          <v-btn color="blue" dark block tile>Log in</v-btn>
                     
                         <!-- <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >Or Log in using</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                        <v-btn depressed outlined color="grey">
                          <v-icon color="red">fab fa-google</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="blue">fab fa-facebook-f</v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                          <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                        </v-btn> 
                         </div>-->
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
  
</div>
</template>

<script>
// import axios from 'axios';
import router from "../router";
import axios from 'axios';

  export default {
   data() {
    return{
      step: 1,
      loginUsername:'',
      loginPassword:'',
      loginErrMsg:'',
    }
    
  },
  // mounted(){
  //   if(this.$store.getter.isTokenPresent('accessToken')){
  //     router.push({name:'Home'})
  //   }
  // },

  methods:{

    async loginStudent() {
          // validation
          // this.validateSignInForm();
          console.log("loginStudent_called");
          if(!this.formSubmitErrors) {
            const data = { 
                userName: this.loginUsername,
                userPassword: this.loginPassword
            };
            try {
              let res = await axios.post('http://localhost:9000/authentication', data, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                  });
              if(res.status == 200){
                if(!this.$store.getters.isTokenPresent('accessToken')) {
                    let token = {
                      key: "accessToken",
                      value: res.data.jwtToken
                    };
                    this.$store.commit('addJWT', token);
                }

                // Set Auto Logout time to 30 mits (30 mits = 1800 seconds)
                this.$store.commit('setExpiryDate', 1800);
                this.$store.dispatch('destroyState', 1800 *1000);
                this.setUserDetails(res);
                console.log('username in store: '+this.$store.getters.getUserName);
                //Gather async user details
                router.push({name:'Home'})
                
                } 
              // else{
              //   this.setLoginErrorMessage(res);
              // }  
            } catch(error) {
              if (error.response) {
                this.setLoginErrorMessage(error);
              }
            }
          }
        },
        setLoginErrorMessage(msg){
          this.loginErrMsg='Incorrect Username/ Password';
      
          console.log('error mg:'+msg);
        },
        setUserDetails(res){
          this.$store.commit('setUserName', this.loginUsername.toLowerCase());

          this.$store.commit('setFirstName', res.data.user.userFirstName);
          this.$store.commit('setLastName', res.data.user.userLastName);
          this.$store.commit('setUserRole', res.data.user.role[0].roleName);
          return
        },
  }
    
    
  }
</script>
<style scoped>

.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
    
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
</style>

