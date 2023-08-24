<template>
    <div>
        <reply
            v-for="(reply,index) in content"
            :key="reply.id"
            :index=index
            :data="reply"
            @destroyReply="deleteReply"
        ></reply>
    </div>
</template>

<script>
import Reply from "./reply.vue";
import axios from "axios";
export default {
    props: ['question'],
    data() {
        return {
            content: []
        };
    },
    components: { Reply },
    created() {
        this.content = this.question.replies; // Initialize the content with initial replies
    },
    methods: {
        deleteReply(replyId){
            const confirmDelete = confirm("Are you sure you want to delete this reply?");

            if (confirmDelete) {
                axios.delete(`/api/question/${this.question.slug}/reply/${replyId}`)
                    .then(response => {
                        // Remove the deleted reply from the UI
                        const index = this.content.findIndex(r => r.id === replyId);
                        if (index !== -1) {
                            this.content.splice(index, 1);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting reply:", error);
                    });
            }
        },
    }
};
</script>
