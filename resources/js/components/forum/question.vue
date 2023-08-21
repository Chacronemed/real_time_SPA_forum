<template>
    <v-card
        class="mx-auto"
        max-width="344"
        elevation="3"
    >
    <v-card-text>
        <div class="grey--text text-caption"> {{data.created_at}} </div>
        <p class="text-h5">
            <router-link :to="data.path" class="text--primary"> {{ data.title }} </router-link>
        </p>
        <p class="text-subtitle-2">Author: {{data.user}}</p>
        <div class="text--primary">
            {{ data.body }}
        </div>
    </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped>
/* Add scoped styles for this component only */
.v-card {
    /* Adjust card padding and margin */
    padding: 16px;
    margin: 16px;
    /* Add rounded corners */
    border-radius: 8px;
    /* Set a background color */
    background-color: #ffffff;
}

.text-caption {
    font-size: 12px;
}

.text-h5 {
    font-size: 18px;
    margin-top: 8px;
}

.text-subtitle-2 {
    font-size: 14px;
    color: #757575;
    margin-top: 8px;
}

.text--primary {
    color: #1976D2;
    margin-top: 12px;
}

/* Add hover effect for the title link */
.router-link-active {
    color: #1565C0;
    text-decoration: underline;
}

</style>
