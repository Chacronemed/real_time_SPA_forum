<template>
    <v-app>
        <toolbar style="margin-bottom: 8px; " ></toolbar>

        <v-main style="margin-bottom: 80px; overflow: auto">
            <router-view></router-view>
        </v-main>

        <my-footer></my-footer>
    </v-app>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import MyFooter from "./MyFooter.vue";
import Login from "./login/login.vue";


export default {
    components: {Login, Toolbar,MyFooter}
}

</script>

<style>

</style>
