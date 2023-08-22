<template>
    <v-container class="d-flex align-center justify-center">
        <v-sheet width="800px" class="mx-auto login-form">
            <v-form @submit.prevent="ask">
                <div style="width: 400px; margin: 0 auto;">
                <v-text-field
                    v-model="form.title"
                    type="text"
                    label="Title"
                    required
                ></v-text-field>
                <v-autocomplete
                    v-model="selectedCategory"
                    label="Category"
                    :items="categoryNames"
                    item-text="name"
                    item-value="id"
                    variant="underlined"
                ></v-autocomplete>
                </div>
                <v-md-editor
                    v-model="form.body"
                    class="custom-md-editor"
                    height="250px"
                ></v-md-editor>
                <v-btn type="submit" block class="mt-2">Share it</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            form: {
                title: "",
                category_id: null,
                body: "",
            },
            categories: [],
            selectedCategory: null,
            errors:{}
        };
    },
    created() {
        axios.get('/api/category')
            .then(res => {
                this.categories = res.data.data;
            });
    },
    computed: {
        categoryNames() {
            return this.categories.map(category => category.name);
        }
    },
    methods: {
        ask() {
            const token = `Bearer ${localStorage.getItem('token')}`;
            console.log('Token:', token); // Check the token value in the console

            if (this.selectedCategory !== null) {
                this.form.category_id = this.categoryNames.indexOf(this.selectedCategory) + 1;
            }

            const headers = {
                Authorization: token,
            };

            axios.post('/api/question', this.form, { headers })
                .then(res => {
                    this.$router.push(res.data.path)
                    console.log(res)
                })
                .catch(error => this.errors = error.response.data);
        }
    },
};
</script>
<style>
.custom-md-editor {
    width: 1100px !important; /* Adjust the width as needed */
}
</style>
