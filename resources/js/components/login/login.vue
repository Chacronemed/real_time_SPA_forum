<template>
    <v-sheet width="300" class="mx-auto">
        <v-form @submit.prevent>
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
</template>

<script>
export default {
    data() {
        return {
            form :{
                email: '',
                password: '',
            },
            emailRules: [
                v => !!v || 'E-Mail is required',
                v => /.+@.+\..+/.test(v) || 'E-Mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Password must be at least 6 characters',
            ],
        };
    },
}
</script>

<style>

</style>
