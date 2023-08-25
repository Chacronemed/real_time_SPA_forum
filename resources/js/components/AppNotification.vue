<template>
    <div class="text-center">
        <v-menu>
            <template v-slot:activator="{ props: menu }">
                <v-tooltip location="top">
                    <template v-slot:activator="{ props: tooltip }">
                        <v-btn color="primary" v-bind="mergeProps(menu, tooltip)">
                            <v-icon color="red">mdi-bell</v-icon>
                            {{ unread_count }}
                        </v-btn>
                    </template>
                    <span>Notification</span>
                </v-tooltip>
            </template>
            <v-list>
                <v-list-item v-for="(notification, index) in unread" :key="index">
                    <v-list-item-title>{{ notification.data.question }}</v-list-item-title>
                    <!-- Display other notification data as needed -->
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import User from "../Helpers/User.js";
import axios from "axios";
import { mergeProps } from "vue";

export default {
    data() {
        return {
            read: [],
            unread: [],
            unread_count: 0,
        };
    },
    created() {
        if (User.LoggedIn()) {
            this.getNotifications();
        }
    },
    methods: {
        mergeProps,
        getNotifications() {
            const token = `Bearer ${localStorage.getItem("token")}`;
            console.log(token);
            const headers = {
                Authorization: token,
            };
            axios
                .get("/api/notifications", { headers })
                .then((res) => {
                    console.log("API Response:", res.data); // Add this line
                    if (res.data && res.data.unread) {
                        this.read = res.data.read;
                        this.unread = res.data.unread;
                        this.unread_count = res.data.unread.length;
                    } else {
                        console.error("Unexpected API response format:", res.data);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching notifications:", error);
                });
        },
    },
};
</script>

<style>
</style>
