<template>
    <show-question
    :data= question
    ></show-question>
</template>
<script>
import axios from "axios";
import ShowQuestion from "./showQuestion.vue";
export default{
    components: {ShowQuestion},
    data(){
        return{
            question:{}
        }
    },
    created(){
        axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
    }
}
</script>
<style>
</style>
