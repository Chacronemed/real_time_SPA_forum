<template>
    <v-card class="toolbar-card">
        <v-toolbar dense class="toolbar" elevation="2">
            <router-link to="/" class="nav-link" tag="div">
                <v-toolbar-title>ENSIAS_overflow</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>

            <v-row no-gutters class="toolbar-links">
                <v-col>
                    <router-link to="/forum" class="nav-link" tag="div">
                        <v-btn icon>
                            <v-icon>mdi-file-document-outline</v-icon>
                            <span class="link-text">Forum</span>
                        </v-btn>
                    </router-link>
                </v-col>

                <v-col>
                    <router-link to="/ask" class="nav-link" tag="div">
                        <v-btn icon>
                            <v-icon>mdi-help-circle</v-icon>
                            <span class="link-text">Ask a Question</span>
                        </v-btn>
                    </router-link>
                </v-col>

                <v-col>
                    <router-link to="/category" class="nav-link" tag="div">
                        <v-btn icon>
                            <v-icon>mdi-book-open-page-variant</v-icon>
                            <span class="link-text">
                <span v-if="windowWidth >= 1100">Category</span>
              </span>
                        </v-btn>
                    </router-link>
                </v-col>
            </v-row>

            <v-col cols="auto" style="margin-right: 20px">
                <router-link to="/login" class="login-button nav-link" tag="div">
                    <v-btn icon>
                        <v-icon class="login-icon">mdi-login</v-icon>
                        <span class="link-text">Login</span>
                    </v-btn>
                </router-link>
            </v-col>
        </v-toolbar>
    </v-card>
</template>



<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    }
};
</script>


<style>
/* Normal link styling */
.nav-link {
    text-decoration: none;
    color: black;
}

/* Hide the span elements on smaller screens */
@media screen and (max-width: 1100px) {
    .link-text {
        display: none;
    }
}
</style>

