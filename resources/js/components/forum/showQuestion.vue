<template>
    <div class="d-flex align-center justify-center" style="height: 50vh;">
        <v-card
            class="mx-auto"
            color="#f5f5f7"
            max-width="1100"
            prepend-icon="mdi-comment-question"
            prepend-icon-color="black"
        >
            <v-card-actions>
                <v-list-item class="w-100">
                    <template v-slot:prepend>
                        <v-avatar
                            color="grey darken-3"
                            image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                        ></v-avatar>
                    </template>
                    <v-list-item-title class="subtitle text--black">{{ data.user }}</v-list-item-title>
                    <v-list-item-subtitle class="caption text--black">{{ data.created_at }}</v-list-item-subtitle>
                </v-list-item>
            </v-card-actions>

            <v-card-title class="headline text--black">{{ data.title }}</v-card-title>

            <v-card-text class="text text-body-1 py-2 text--black">
                {{ data.body }}
            </v-card-text>

            <v-card-actions>
                <div class="d-flex align-center">
                    <v-icon class="me-1" color="red" icon="mdi-heart"></v-icon>
                    <span class="subheading text--black">10{{ data.likes }}</span>
                    <v-icon class="me-1" color="grey" icon="mdi-comment"></v-icon>
                    <span class="subheading me-2 text--black">5{{ data.replies }}</span>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    props: ['data'],
};
</script>

<style>
.text--black {
    color: black;
}
</style>
