<template>
    <v-container class="d-flex align-center justify-center">
        <v-sheet width="300" class="mx-auto login-form">
            <v-form @submit.prevent="signUp">

                <v-text-field
                    v-model="form.name"
                    :rules="namesRules"
                    label="Name"
                    required
                ></v-text-field>

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

                <v-text-field
                    v-model="form.password_confirmation"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>

                <v-btn type="submit" block class="mt-2">Sign Up</v-btn>



            </v-form>
            <div class="login-section">
                <div class="login-text">Already have an account? Sign in here:</div>
                <router-link to="/login" class="login-link">
                    <v-btn text block class="mt-2 login-button">
                        Log In <v-icon right>mdi-login</v-icon>
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
import router from "../../Router/router.js";
import {useRouter} from "vue-router";
export default {

    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
            },
            namesRules: [
                (v) => !!v || "E-Mail is required",
                (v) => v.length >= 3 || "name must have at least 3 characters",
            ],
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
    created() {
        window.addEventListener('resize', this.handleResize);
        if(User.LoggedIn()){
            router.push({name: 'forem'})
        }
    },

    methods: {
        async signUp() {
            try {
                // const router = useRouter();
                const response = await User.signUp(this.form); // Use the signUp method from User.js
                if (response && response.data) {
                    console.log('User registered successfully');
                     await router.push({name: 'forem'});
                } else {
                    console.log("Invalid response from server: no response or response data");
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
        }
    }



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

.login-link {
    text-decoration: none;
    color: inherit; /* Keep the same color as the parent element */
}

.login-link:hover {
    text-decoration: none;
    color: inherit; /* Keep the same color as the parent element */
}

.login-link v-icon {
    color: inherit; /* Keep the same color as the parent element */
}

.login-link v-icon:hover {
    color: inherit; /* Keep the same color as the parent element */
}
</style>
