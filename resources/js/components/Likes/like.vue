<template>
    <v-btn @click="likeIt">
        <v-icon :color="liked ? 'red' : 'black'" icon="mdi-heart"></v-icon>
        {{ count }} Likes
    </v-btn>
</template>
<script>
import User from "../../Helpers/User.js";
import axios from "axios";
import Echo from "laravel-echo";
import Pusher from 'pusher-js';

export default {
    props : ['content'],
    data() {
        return {
            liked: this.content.liked,
            count : this.content.like_count
        };
    },
    created() {
        // Initialize Echo instance
        window.Pusher = Pusher;

        window.Echo = new Echo({
            broadcaster: 'pusher',
            key: '8233e38cac34de1b61e2',
            cluster: 'eu',
            encrypted: true,
        });

        // Subscribe to the channel
        window.Echo.channel('LikeChannel')
            .listen('LikeEvent', (e) => {
                console.log('Received LikeEvent:', e);
                if(this.content.id === e.id){
                    e.type==1 ? this.count++ : this.count--
                }
            });
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
