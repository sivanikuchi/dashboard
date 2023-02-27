<template>
    <div>
         <h1>bectagon 2k23</h1>
         <v-btn @click="count" > count</v-btn>
        <h3>{{ n }}</h3>
    </div>
       
</template>
<script>
export default {
    name: "Sample",
    data() {
        return {
            n: "n",
        }
    },
    methods: {
        count(){
            for(let i=0;i<10;i++){
                this.n+='Bec'+i+" ";
                console.log(i);
            }
        }
    },
    components: {

    },

}
</script>
<style>

</style>