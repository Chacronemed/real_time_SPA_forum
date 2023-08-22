<template>
    <v-footer class="bg-grey-lighten-1" id="footer">
        <v-row justify="center" no-gutters>
            <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                variant="text"
                class="mx-2"
                rounded="xl"
            >
                {{ link }}
            </v-btn>
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>ENSIAS_Overflow</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<script>
export default {

}
</script>

<style>
/* Apply sticky footer styles */
#footer {
    margin-top: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: auto;
}
</style>
