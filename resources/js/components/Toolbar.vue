<template>
    <v-card class="toolbar-card">
        <v-toolbar dense class="toolbar" elevation="2">
            <router-link to="/forum" class="nav-link" tag="div">
                <v-toolbar-title>ENSIAS_overflow</v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>

            <app-notification v-if="showNotification"></app-notification>

            <v-row no-gutters class="toolbar-links">
                <v-col v-for="item in items" :key="item.title" >
                    <div v-if="item.show">
                        <router-link :to="item.to" class="nav-link" tag="div" @click="handleLinkClick(item)">
                            <v-btn icon>
                                <v-icon>{{ item.icon }}</v-icon>
                                <span class="link-text">{{ item.title }}</span>
                            </v-btn>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </v-toolbar>
    </v-card>
</template>

<script>
import User from "../Helpers/User.js";
import router from "../Router/router.js";
import AppNotification from "./AppNotification.vue";
import user from "../Helpers/User.js";
export default {
    components : {AppNotification},
    data() {
        return {
            showNotification: false,
            windowWidth: window.innerWidth,
            items: [
                { title: 'Forum', to: '/forum', 'icon': 'mdi-file-document-outline', show: true },
                { title: 'Ask Question', to: '/ask', 'icon': 'mdi-help-circle', show: User.LoggedIn() },
                { title: 'Category', to: '/category', 'icon': 'mdi-book-open-page-variant', show: User.LoggedIn() },
                { title: 'logout', to: '/logout', 'icon': 'mdi-logout', show: User.LoggedIn() },
                { title: 'login', to: '/login', 'icon': 'mdi-login', show: !User.LoggedIn() },
            ]
        };
    },

    created() {
        window.addEventListener('resize', this.handleResize);
        this.updateItemVisibility(); // Update visibility on component creation
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        user() {
            return user
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },

        handleLinkClick(item) {
            if (item.title === 'logout') {
                this.logout();
            }
        },

        async login() {
            try {
                await User.login(formData, this.$route.fullPath); // Provide current route as redirect
            } catch (error) {
                // Handle login error
            }
        },

        logout() {
            User.Logout();
            router.push('/login');
        },

        // Method to update the item visibility based on user's login status
        updateItemVisibility() {
            const loggedIn = User.LoggedIn();
            this.showNotification = loggedIn;
            this.items.forEach(item => {
                if (item.title === 'Ask Question' || item.title === 'Category' || item.title === 'logout') {
                    item.show = loggedIn;
                } else if (item.title === 'login') {
                    item.show = !loggedIn;
                }
            });
        },
    },

    // Call the method to update item visibility when the user's status changes
    watch: {
        '$route'() {
            this.updateItemVisibility();
        },
    },
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
