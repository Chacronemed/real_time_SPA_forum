<template>
    <v-container class="d-flex align-center justify-center">
        <v-sheet width="300" class="mx-auto login-form">
            <v-form @submit.prevent="login">
                <v-text-field
                    v-model="form.email"
                    :rules="emailRules"
                    label="E-Mail"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="form.password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>
                <v-btn type="submit" block class="mt-2">Login</v-btn>
            </v-form>

            <div class="signup-section">
                <div class="signup-text">Don't have an account? Sign up here:</div>
                <router-link to="/signup" class="signup-link">
                    <v-btn text block class="mt-2 signup-button">
                        register here <v-icon right>mdi-account-plus</v-icon>
                    </v-btn>
                </router-link>
            </div>
        </v-sheet>
    </v-container>
</template>

<script>
import User from "../../Helpers/User.js";
import Token from "../../Helpers/Token.js";
import user from "../../Helpers/User.js";


export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            emailRules: [
                (v) => !!v || "E-Mail is required",
                (v) => /.+@.+\..+/.test(v) || "E-Mail must be valid",
            ],
            passwordRules: [
                (v) => !!v || "Password is required",
                (v) => v.length >= 3 || "Password must be at least 3 characters",
            ],
        };
    },
    methods: {
        async login() {
            try {
                const response = await User.login(this.form);
                if (response && response.data) {
                    console.log("server stored the response");
                     const { default: router } = await import("../../Router/router.js");
                     await router.push({name: 'forem'});
                } else {
                    console.log("Invalid response from server no response or response data");
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    console.log("Error response:", error.response.data);
                } else if (error.request) {
                    console.log("No response received from server.");
                } else {
                    console.log("Error occurred during API call:", error.message);
                }
            }
        },
    },
};
</script>

<style>
.login-form {
    margin-top: 20px;
}

.d-flex {
    display: flex;
}

.align-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.signup-section {
    text-align: center;
    margin-top: 20px;
}

.signup-text {
    margin-bottom: 8px;
}

.signup-link {
    text-decoration: none;
}

.signup-button {
    width: 100%;
}
</style>
