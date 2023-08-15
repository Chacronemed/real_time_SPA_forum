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
                <v-btn type="submit" block="true" class="mt-2">Submit</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>

<script>
import axios from 'axios';
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
        login() {
            axios.post('/api/auth/login', this.form)
                .then(res => console.log(res.data))
                .catch(error => console.log(error.response.data));
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
