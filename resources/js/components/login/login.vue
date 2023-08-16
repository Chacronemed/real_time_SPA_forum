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
                <v-btn type="submit" block class="mt-2">Submit</v-btn>



            </v-form>
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
                console.log(user.id())
                if (response && response.data) {
                    console.log('server stored the response');
                } else {
                    console.log("Invalid response from server no response or response data");
                }
            }
            catch (error) {
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

</style>
