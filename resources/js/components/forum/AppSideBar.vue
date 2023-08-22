<template>
    <v-card class="mx-auto" max-width="450">
        <v-toolbar color="grey" dark class="mt-2">
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item v-for="category in categories" :key="category.id">
                        {{ category.name }}
            </v-list-item>
        </v-list>
    </v-card>
</template>
<script>
import axios from "axios";
    export default{
        data(){
            return {
                categories:{}
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => {
                    this.categories = res.data.data
                    console.log(this.categories)
                })
        }
    }
</script>

<style>

</style>
