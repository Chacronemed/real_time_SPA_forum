<template>
    <v-app>
        <toolbar></toolbar>
        <MyFooter></MyFooter>
    </v-app>
</template>



<script>
import Toolbar from "./Toolbar.vue";
import MyFooter from "./MyFooter.vue";


export default {
    components: { Toolbar,MyFooter}
}

</script>

<style>

</style>
