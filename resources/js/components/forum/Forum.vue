<template>
    <v-container fluid>
        <v-row>
            <v-col cols="8">
                <question
                v-for="question in questions"
                :key="question.path"
                :data=question
                ></question>
            </v-col>
            SideBar
        </v-row>
    </v-container>
</template>

<script>
import question from "./question.vue";
import axios from "axios";

export default {
    components: { question },
    data() {
        return {
            questions: {} // Initialize your data property
        };
    },
    created() {
        axios.get('/api/question')
            .then(res => {
                this.questions = res.data.data;
                console.log("Questions:", this.questions); // Check the response in the console
            })
            .catch(error => console.log(error.response.data));
    }
}
</script>

<style>
</style>
