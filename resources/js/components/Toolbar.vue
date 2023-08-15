<template>
    <v-card color="grey-lighten-4" height="200px" rounded="0">
        <v-toolbar density="compact">
            <v-toolbar-title>ENSIAS_overflow</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-row no-gutters class="toolbar-links">
                <v-col>
                    <v-btn icon>
                        <v-icon>mdi-file-document-outline</v-icon>
                        <span>Forum</span>
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn icon>
                        <v-icon>mdi-help-circle</v-icon>
                        <span>Ask a Question</span>
                    </v-btn>
                </v-col>

                <v-col>
                    <v-btn icon>
                        <v-icon>mdi-book-open-page-variant</v-icon>
                        <span>Category</span>
                    </v-btn>
                </v-col>
            </v-row>

            <v-col cols="auto" style="margin-right: 20px">
                <v-btn icon class="login-button">
                    <v-icon class="login-icon">mdi-login</v-icon>
                    <span>Login</span>
                </v-btn>
            </v-col>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
