<template>
    <div>
        <edit-question v-if="editingQuestionState" @edit-cancelled="cancelEdit" :question="question"></edit-question>
        <div v-else>
            <show-question
                :data="question"
                v-if="question"
                @edit-clicked="startEditing"
                style="margin-bottom: 20px "
            ></show-question>
            <v-container v-if="question">
                <replies :question="question" @replycreated="handleReplyCreated" style="margin-bottom: 20px"></replies>
                <new-reply :questionSlug="question.slug" @replycreated="handleReplyCreated"></new-reply>
            </v-container>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ShowQuestion from "./showQuestion.vue";
import EditQuestion from "./editQuestion.vue";
import Replies from "../Reply/replies.vue";
import NewReply from "@/components/Reply/newReply.vue";

export default {
    components: {NewReply, Replies, EditQuestion, ShowQuestion },
    data() {
        return {
            question: null,
            editingQuestionState: false,
        };
    },
    created() {
        axios.get(`/api/question/${this.$route.params.slug}`)
            .then((res) => (this.question = res.data.data));
    },
    methods: {
        startEditing() {
            this.editingQuestionState = true;
        },
        cancelEdit() {
            this.editingQuestionState = false;
        },
        handleReplyCreated(newReply) {
            // Update the replies for the current question with the new reply
            this.question.replies.unshift(newReply);
            this.scrollToTop()
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    },
};
</script>
<style>
</style>
