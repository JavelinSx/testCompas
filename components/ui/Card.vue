<template>
    <div class="card">
        <img class="card-img" :src="props.imgIcon" :alt="`icon- ${props.imgIcon}`">
        <div>
            <p class="card-title">{{ props.title }}</p>
            <p class="card-text">{{ props.text }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Card {
    imgIcon: string
    title: string
    text: string
}
const props = defineProps<Card>()
</script>
<style lang="scss">
.card {
    border: 1px solid $gray-400;
    border-radius: 10px;
    background-color: $gray-200;
    padding: 20px;
    padding-top: 27px;
    width: 362px;
    min-height: 151px;
    max-height: 174px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .card-title {
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: $blue-800;
        margin-bottom: 10px;
    }

    .card-text {
        font-size: 15px;
        line-height: 120%;
    }

    .card-img {
        width: 59px;
    }
}
</style>