<template>
  <div class="about">
    <Sidebar />
    <h1>This is an about page</h1>

  
      <div style="width:100px">

             <v-btn @click="logout" color="blue" dark block tile>Log Out</v-btn>
             <v-btn @click="home" color="red" dark block tile>Home page</v-btn>
 
      </div>

  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import router from '../router';
export default{
    name: "Home",
    mounted() {
        if (!this.$store.getters.isTokenPresent("accessToken")) {
            router.push({ name: "Landing" });
        }
    },
    methods: {
        logout() {
            this.$store.commit("destroyState");
            router.push({ name: "Login" });
            return;
        },
        home() {
            router.push({ name: "Home" });
        }
    },
    components: { Sidebar }
}
</script>
<style>
.about{
  padding: 10px;
}
</style>
