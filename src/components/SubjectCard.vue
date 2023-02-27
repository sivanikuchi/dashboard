<template>
    <v-hover v-slot="{ hover }">
        <v-card 
            :elevation="hover ? 10 : 2"
            :outlined="hover ? true : false"
            :class="{ 'on-hover': hover }"
            class="mx-auto" 
            max-width="300"
        >
            <v-img class="white--text align-end" height="150px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-card-title>{{subject.id}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
                {{subject.title}}
            </v-card-subtitle>

        <!-- <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text> -->

            <v-card-actions>
                <v-btn color="orange" text>
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    props:['subject'],
    data() {
    return {
      
    }
  }
}
</script>