<template>
    <div>
        <v-card class="mt-3" max-width="900px" style="margin: 0 auto; background: #f5f2e6">
            <v-card-title class="reply-header">
                <div class="headline">{{ data.user }}</div>
                <div class="reply-timestamp">said {{ data.created_at }}</div>
                <like :content="data"></like>
            </v-card-title>
            <v-divider></v-divider>
            <edit-reply
                v-if="editing"
                :reply = data
                @CancelEditing="handleCancelEditing"
            ></edit-reply>

            <v-card-text class="reply-content" v-else>{{ data.reply }}</v-card-text>
            <div v-if="!editing">
                <v-card-actions class="justify-end" v-if="own">
                    <v-btn @click="editReply">
                        <v-icon class="me-3" color="black" icon="mdi-pencil"  style="margin-right: 10px"></v-icon>
                    </v-btn>
                    <v-btn @click="destroy">
                        <v-icon class="me-3" color="red" icon="mdi-delete" @click="destroy"  style="margin-right: 5px"></v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
import User from "../../Helpers/User.js"
import axios from "axios";
import EditReply from "./editReply.vue";
import Like from "../Likes/like.vue";
export default {
    components: {Like, EditReply},
    data(){
        return{
            editing : false,
            beforeEditReplyBody : ""
        }
    },
    props: ['data','index'],
    computed :{
        own(){
            return User.own(this.data.user_id)
        }
    },
    methods : {
        destroy(){
            this.$emit('destroyReply',this.data.id)
        },
        editReply(){
            this.editing= true
            this.beforeEditReplyBody = this.data.reply
        },
        handleCancelEditing(reply){
            this.editing = false
            if(reply!==this.data.reply){
                this.data.reply = this.beforeEditReplyBody
                this.beforeEditReplyBody = ""
            }
        }
    }
};

</script>

<style scoped>
.reply-header {
    background-color: #f5f5f7;
    padding: 8px 16px;
    border-bottom: 1px solid #a4c1e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.reply-timestamp {
    font-size: 12px;
    color: #757575;
}

.reply-content {
    padding: 16px;
    font-size: 14px;
}
</style>
