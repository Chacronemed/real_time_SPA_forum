<template>
    <v-app>
        <toolbar></toolbar>
        <router-view></router-view>
        <MyFooter></MyFooter>
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
