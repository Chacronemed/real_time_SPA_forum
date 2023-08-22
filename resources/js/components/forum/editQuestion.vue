<template>
    <v-container>
        <v-form>
            <v-text-field
                v-model="form.title"
                type="text"
                label="Title"
                required
            ></v-text-field>
            <v-md-editor
                v-model="form.body"
                class="custom-md-editor"
                height="250px"
            ></v-md-editor>
            <v-btn type="button" block @click="cancelEdit">Cancel</v-btn>
            <v-btn type="submit" block class="mt-2" @click="submitEdit">edit</v-btn>

        </v-form>

    </v-container>
</template>
<script>
import axios from "axios";

export default{
    props: ['question'], // Add a prop to receive the question data
    data() {
        return {
            form: {
                title: this.question.title, // Pre-fill the form with existing data
                body: this.question.body,
            },
        };
    },
    methods: {
        cancelEdit() {
            this.$emit('edit-cancelled');
        },
        submitEdit() {
            const token = `Bearer ${localStorage.getItem('token')}`;
            console.log('Token:', token);
            const headers = {
                Authorization: token,
            };
            const updatedQuestion = {
                title: this.form.title,
                body: this.form.body,
            };

            axios.put(`/api/question/${this.question.slug}`, updatedQuestion, { headers })
                .then(() => {
                    this.$router.push(`/question/${this.question.slug}`);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        },
    },

}
</script>
<style>
</style>
