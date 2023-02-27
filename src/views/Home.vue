<template>
    <div class="home">
        <Sidebar @search-input-emit="search" />
        <!-- <h1>This is an Home page</h1> -->
        <div class="sujectbox">
            <h1>Your Teaching Courses</h1>
            <!-- <v-sheet class="mx-auto" max-width="700">
                <v-slide-group v-model="model" class="pa-4" center-active prev-icon="mdi-minus" next-icon="mdi-plus"
                    show-arrows>
                    <v-slide-item v-for="subject in subjects" :key="subject">
                        <SubjectCard v-bind:subject="subject" />
                    </v-slide-item>
                </v-slide-group>
            </v-sheet> -->

            <div class="subjectslider">
                <div v-for="subject in subjects" :key="subject" class="subject">
                    <SubjectCard  v-bind:subject="subject"/>
                </div>
            </div>
        </div>

        <h4>Username: {{ this.userName }}</h4>
        <h4>First Name: {{ this.firstName }}</h4>
        <h4>Last Name: {{ this.lastName }}</h4>
        <h4>Role: {{ this.role }}</h4>
        <!-- <div role="cell" style="box-sizing:border-box;flex:52 0 auto;min-width:0px;width:52px" class="mx-2 py-[11px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" class="h-[18px] w-[18px] text-green-s dark:text-dark-green-s">
                <path fill-rule="" d="M20 12.005v-.828a1 1 0 112 0v.829a10 10 0 11-5.93-9.14 1 1 0 01-.814 1.826A8 8 0 1020 12.005zM8.593 10.852a1 1 0 011.414 0L12 12.844l8.293-8.3a1 1 0 011.415 1.413l-9 9.009a1 1 0 01-1.415 0l-2.7-2.7a1 1 0 010-1.414z" clip-rule="evenodd">

                </path>
            </svg>
        </div> -->
        <div style="width:100px">

            <v-btn @click="logout" color="blue" dark block tile>Log Out</v-btn>
            <v-btn @click="about" color="red" dark block tile>about page</v-btn>

        </div>
        <div class="col-lg-7 mb-lg ">
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
import SubjectCard from "@/components/SubjectCard.vue"

export default {
    name: 'Home',
    components: {
        Sidebar,
        Graph,
        SubjectCard
    },
    data() {
        return {

            userName: this.$store.getters.getUserName,
            firstName: this.$store.getters.getFirstName,
            lastName: this.$store.getters.getLastName,
            role: this.$store.getters.getUserRole,

            subjects: [
                {
                    id: "18IT401",
                    title: "AI"
                },
                {
                    id: "18IT402",
                    title: "WN"
                },
                {
                    id: "18IT403",
                    title: "OOPS"
                },
                {
                    id: "18IT404",
                    title: "Script Programming"
                },
                {
                    id: "18IT404",
                    title: "Script Programming"
                },

            ],
            model: null,
        }
    },
    // mounted() {
    //     if (!this.$store.getters.isTokenPresent("accessToken")) {
    //         router.push({ name: "Landing" });
    //     }
    // },
    methods: {
        logout() {
            this.$store.commit('destroyState');
            router.push({ name: 'Landing' });
            return;
        },

        about() {
            console.log("redirecting to about page");
            router.push({ name: 'About' });
        },
    },
}
</script>
<style>
.home {
    padding-left: 10px;
}

.subjectslider {
    position: relative;
    overflow-x: auto;
    width: 100%;
    display: flex;
    justify-content: left;
}

.subject {
    padding: 10px;
    margin: 10px;
}
</style>