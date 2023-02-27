<style scoped>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Rancho&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            scroll-behavior: smooth;
            
        }
        #body{
            overflow-x: hidden;
            background: #fff;
            min-height: 100vh;
            scroll-behavior: smooth;
        }
        #header{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 30px 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            /* background: #3890ce; */
        }
        #header .logo{
            color: #094b65;
            font-weight: 700;
            font-size: 2em;
            text-decoration: none;
            /* font-family: 'Rancho', cursive; */

        }
        #header ul{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        #header ul li{
            list-style: none;
            margin-left: 20px;
        }
        #header ul li a{
            text-decoration: none;
            padding: 6px 15px;
            color: #094b65 ;
            border-radius: 20px;
        }
        #header ul li a:hover, #header ul li a.active{
            background: #094b65;
            color: #fff;
        }
        section{
            position: relative;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;

        }
        section #text
        {
            position: absolute;
            color: #00415a;
            /* color: black; */
            font-size: 6vw;
            /* -webkit-text-stroke: 1px yellow ; */
            text-align:center;
            line-height: 1em;
            
        }
        #auto-type{
            font-size: 10vw;
            font-family: 'Rancho', cursive;
        }

        section #text #pretext{
            background-color: #fff;
            padding: 0px 20px;
            border-radius: 30px;
            border: 2px solid #094b65;
            font-size: 3vw;
            letter-spacing: 2px;
            font-weight: 900;
            font-family: 'Rancho', sans-serif;
        }
        #btn{
            text-decoration: none;
            display: inline-block;
            margin-top:10px;
            padding: 8px 30px;
            background: yellow;
            color: #094b65;
            font-size: 1vw;
            font-weight: bold;
            letter-spacing: 2px;
            border-radius: 40px;
            border: 2px solid #094b65;
            transform: translateY(130px);

        }
        .sec{
            position: relative;
            padding: 100px;
            background: #879a02;
        }
        .sec h2{
            font-size: 3.5em;
            color: #fff;
            margin-bottom: 10px;
        }
        .sec p{
            font-size: 1em;
            color: #fff;
        }
        section{
            background-color: #879a02;
            margin: 0px;
        }
        section img{
            position: absolute;
            /* top: 0;
            left: 0; */
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            
        }
        /* #college{
            width: 100%;
            height: 101%;
        } */
        #bird1,#bird2{
            z-index: 1;
        }
        #facescan,#tree,#anlysis{
            width: 30%;
            height: 30%;
            object-fit: scale-down;
        }
        #mark{
            width: 50%;
            height: 50%;
            bottom: 1%;
            left: 0;
            object-fit: scale-down;
        }
        #tree{
            width: 70%;
            height: 70%;
            bottom: 0;
            right: 0;
        }
        #grass{
            object-fit:cover;
            bottom: 0;
            right: 0;
            height: 30%;
        }
        #skateboard1{
            width: 20%;
            height: 20%;
            object-fit:scale-down;
            bottom: 10%;
            left:50%
        }
        #mobile{
            width: 400px;
            height: 400px;
            object-fit:scale-down;
            left: -30px;
            bottom: 0;
        }
        #mobile2{
            width: 400px;
            height: 400px;
            object-fit:scale-down;
            left: -90px;
            bottom: 0;
        }
        #garden{
            bottom:1 ;
            width: 101%;
            

        }
        #cable{
            right : -50px;
        }
        #login{
            background-color: #879a02;
            padding-bottom: 10vh;
            border: none;
        }
        
</style>
<template>
    <div id="body">
    <!-- <header id="header">
        <a href="#" class="logo">BEC SAM</a>
        <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="typing.html">Manage</a></li>
            <li><a href="#">Students</a></li>
            <li><a href="clock.html">Settings</a></li>
        </ul>
    </header> -->
    <section >
        <img src="../assets/images/bird1.png" :style="{top : this.value * -0.5 +'px',left : this.value * 1 + 'px'}" id="bird1" alt="">
        <img src="../assets/images/bird2.png" :style="{top : this.value * -0.5 +'px',left : this.value * -2.5 + 'px'}"  id="bird2" alt="">
        <img src="../assets/images/college.png"  id="college" alt="">
        <img src="../assets/images/skateboard1.png" :style="{left : 50+ this.value*-0.06+'%'}"  id="skateboard1" alt="">
        
        
        <vue-typed-js 
            :strings="['Attendance', 'Automation']" 
            id="text"
            :typeSpeed="100"
            :backSpeed="100"
            :backDelay="1000"
            :loop="true"
            :style="{top : 35+ this.value * -0.1 + '%'}">
            <h2>
                <span id="pretext" > It's time for</span><br> 
                <span  id="auto-type"  class="typing"></span> 
            </h2>
        </vue-typed-js>
        <!-- <a href="#login" :style="{marginTop : this.value*1.5+'px'}" id="btn"> Login</a> -->
        <a href="#login"  id="btn"> Login</a>
        <img src="../assets/images/cable_cars.png" :style="{left : 50 + this.value* -0.2+'px'}"  id="cable" alt="">
        <img src="../assets/images/mobile2.png" :style="{left: -90 + value* 0.3+'px'}"  id="mobile2" alt="">
        <img src="../assets/images/mobile.png"   id="mobile" alt="">
        <!-- <img src="../assets/images/tree.png"   id="tree" alt=""> -->
    </section>
    <div id="login"><Login /></div>
</div>
</template>
<!-- <script setup src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script> -->


<script>
import Login from '../components/Login.vue';
import Vue from 'vue'
import VueTypedJs from 'vue-typed-js'
Vue.use(VueTypedJs)
export default{
    name: 'Landing',
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    
    components: { Login },
    data(){
        return{
         value: 0
        }
    },
    methods:{
        handleScroll () {
            this.value = Math.round(window.pageYOffset)
        },
    }

}

</script>