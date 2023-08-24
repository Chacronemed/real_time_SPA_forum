<template>
    <v-btn @click="likeIt">
        <v-icon :color="liked ? 'red' : 'black'" icon="mdi-heart"></v-icon>
        {{ count }} Likes
    </v-btn>
</template>
<script>
import User from "../../Helpers/User.js";
import axios from "axios";

export default {
    props : ['content'],
    data() {
        return {
            liked: this.content.liked,
            count : this.content.like_count
        };
    },
    methods: {
        likeIt() {
            if(User.LoggedIn()){
                this.liked ? this.decr() : this.incr()
                this.liked = !this.liked
            }
            // Toggle the like state and emit the event
            // this.liked = !this.liked;
            // this.$emit('likeClicked');
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
                .then(res => this.count++)
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
                .then(res => this.count--)
        }
    }
};
</script>
<style>

</style>
