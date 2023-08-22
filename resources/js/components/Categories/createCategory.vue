<template>
    <v-container>
        <v-form style="max-width: 400px; margin: 0 auto;" class="text-center" @submit.prevent="submit" v-if="admin">
            <v-text-field v-model="form.name" label="Category's Name" required></v-text-field>
            <v-btn type="submit" color="teal" v-if="!editSlug">Create</v-btn>
            <v-btn type="submit" color="blue" v-else>Update</v-btn>
        </v-form>
        <v-card>
            <v-toolbar color="indigo" dark density="comfortable" class="mt-2">
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <div v-for="(category, index) in categories" :key="category.id">
                    <v-list-item>
                        <v-row align="center">
                            <v-col cols="10">
                                <v-icon class="mr-2" @click="editCategory(index)" v-if="admin">mdi-pencil</v-icon>
                                {{ category.name }}
                            </v-col>
                            <v-col cols="2" class="text-right">
                                <v-icon @click="destroy(category.slug,index)" v-if="admin">mdi-delete</v-icon>
                            </v-col>
                        </v-row>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
import axios from "axios";
import User from "../../Helpers/User.js";

export default {
    data() {
        return {
            form: {
                name: "",
            },
            categories: [],
            editSlug:"",
        };
    },
    computed: {
        admin() {
            return User.admin(); // Use the admin method from the User.js helper class
        },
    },
    methods: {
        submit() {
            if (this.editSlug) {
                this.update();
            } else {
                this.create();
            }
        },
        create(){
            axios.post('/api/category', this.form)
                .then(res => {
                    this.categories.unshift(res.data); // Add the new category to the list
                    this.form.name = ""; // Clear the input field
                    console.log(this.categories)
                })
                .catch(error => {
                    console.error('Error adding category:', error.response ? error.response.data : error.message);
                });
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
                .then(res => {
                    const updatedCategory = res.data;
                    const index = this.categories.findIndex(category => category.slug === this.editSlug);
                    if (index !== -1) {
                        this.categories[index] = updatedCategory;
                    }
                    this.form.name = ""; // Clear the input field
                    this.editSlug = ""; // Reset the editSlug
                    console.log(this.categories);
                })
                .catch(error => {
                    console.error('Error updating category:', error.response ? error.response.data : error.message);
                });

        },
        editCategory(index) {
            this.form.name = this.categories[index].name
            this.editSlug = this.categories[index].slug
        },
        destroy(slug, index) {
            axios.delete(`/api/category/${slug}`)
                .then(() => {
                    // Remove the category from the categories array using the provided index
                    this.categories.splice(index, 1);
                })
                .catch(error => {
                    console.error('Error deleting category:', error.response ? error.response.data : error.message);
                });
        },
    },
    created() {
        axios.get('/api/category')
            .then(res => {
                this.categories = res.data.data;
            })
    },
};
</script>

<style>
</style>
