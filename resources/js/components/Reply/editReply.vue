<template>
    <div>
        <v-md-editor
            v-model="reply.reply"
            class="custom-md-editor reply-form"
            height="250px"
        ></v-md-editor>
        <div class="button-group">
            <v-btn class="reply-button" color="primary" @click="update">
                <v-icon left>mdi-reply</v-icon> <!-- Add icon with the mdi-reply icon from Material Design Icons -->
                Update Reply
            </v-btn>
            <v-btn class="cancel-button" color="error" @click="cancel">Cancel</v-btn>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    props : ['reply'],

    methods : {
        cancel(reply){
            this.$emit('CancelEditing',reply)
        },
        update() {
            console.log("Type of this.reply:", typeof this.reply);
            console.log("and this.reply is as follows:", this.reply);
            console.log(this.reply.question_slug)
            console.log(this.reply.id)

            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body:this.reply.reply} )
                .then(res => {
                    this.cancel(this.reply.reply);
                })
                .catch(error => {
                    console.error("Error updating reply:", error);
                    // Handle the error or show an error message to the user
                });
        }
    }
}
</script>
<style>
.reply-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.button-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 5px;
}

.reply-button, .cancel-button {
    padding: 10px 20px;
    border-radius: 5px;
    text-transform: none;
    font-weight: bold;
}

.reply-button {
    background-color: #4caf50; /* Green color */
    color: white;
}

.cancel-button {
    background-color: #f44336; /* Red color */
    color: white;
}
</style>
