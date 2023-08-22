<template>
    <div>
        <edit-question v-if="editingQuestionState" @edit-cancelled="cancelEdit" :question="question"></edit-question>
        <div v-else>
            <show-question
                :data="question"
                v-if="question"
                @edit-clicked="startEditing"
            ></show-question>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import ShowQuestion from "./showQuestion.vue";
import EditQuestion from "./editQuestion.vue";

export default {
    components: { EditQuestion, ShowQuestion },
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
    },
};
</script>
<style>
</style>
