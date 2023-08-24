<template>
    <div class="reply-form">
        <v-md-editor
            v-model="body"
            className="custom-md-editor"
            height="250px"
        ></v-md-editor>
        <v-btn class="reply-button" color="primary" @click="submit">
            <v-icon left>mdi-reply</v-icon> <!-- Add icon with the mdi-reply icon from Material Design Icons -->
            Reply
        </v-btn>
    </div>
</template>

<script>
import axios from "axios";
export default {
    props: ['questionSlug'],
    data() {
        return {
            body: ""
        };
    },
    methods: {
        submit() {
            axios.post(`/api/question/${this.questionSlug}/reply`, { body: this.body })
                .then(res => {
                    this.body = "";
                    this.$emit('replycreated', res.data.reply); // Emit the custom event
                });
        }
    }
};
</script>


<style scoped>
.reply-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.reply-button {
    margin-top: 10px;
}
</style>
