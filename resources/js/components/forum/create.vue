<template>
    <v-container class="d-flex align-center justify-center">
        <v-sheet width="300" class="mx-auto login-form">
            <v-form @submit.prevent="ask">
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
                <v-btn type="submit" block class="mt-2">Share it</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>
<script>
    import axios from "axios";

    export default{
        data(){
            return {
                form :{
                    title:"",
                    category_id:null,
                },
                categories : [],
                selectedCategory: null
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => {this.categories = res.data.data
                        console.log(this.categories)})
        },
        computed: {
            categoryNames() {
                console.log(this.categories.map(category => category.name));
                return this.categories.map(category => category.name);
            }
        },
        methods : {
            ask() {
                if (this.selectedCategory !== null) {
                    this.form.category_id = this.categoryNames.indexOf(this.selectedCategory) + 1;
                }
            }
        }
    }
</script>

<style>

</style>
