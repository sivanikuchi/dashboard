<template>
    <div class="home">
        <Sidebar @search-input-emit="search"/>
        <h1>This is an Home page</h1>
        <h4>Username: {{ this.userName }}</h4>
        <h4>First Name: {{ this.firstName }}</h4>
        <h4>Last Name: {{ this.lastName }}</h4>
        <h4>Role: {{ this.role }}</h4>
        <div style="width:500px">

                <v-btn @click="logout" color="blue" dark block tile>Log Out</v-btn>
                <v-btn @click="about" color="red" dark block tile>about page</v-btn>
    
        </div>
        <div class="col-lg-7 mb-lg ">
            <!-- line chart -->
            <div class="card z-index-2">
                <Graph />
            </div>
        </div>
      


    </div>
</template>
<script>
import router from '../router'
import Sidebar from "@/components/Sidebar.vue"
import Graph from "@/components/GradientLineChart.vue"

export default{
    name:'Home',
    components: {
    Sidebar,
    Graph
  },
    data(){
        return{
            
            userName: this.$store.getters.getUserName,
            firstName: this.$store.getters.getFirstName,
            lastName: this.$store.getters.getLastName,
            role: this.$store.getters.getUserRole,

            
        }
    },
    mounted() {
        if (!this.$store.getters.isTokenPresent("accessToken")) {
            router.push({ name: "Login" });
        }
    },
    methods:{
        logout() {
            this.$store.commit('destroyState');
            router.push({ name: 'Login'});
            return;
        },
        
        about(){
            console.log("redirecting to about page");
            router.push({name:'About'});
        },
    },
}
</script>
<style>
.home{
    padding-left: 10px;
}
</style>