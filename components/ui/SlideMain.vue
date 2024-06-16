<template>
    <div class="slide">
        <div>
            <p class="slide-title">{{ title }}</p>
            <p class="slide-text">{{ text }}</p>
        </div>
        <NuxtLink class="slide-btn" :to="link">Перейти</NuxtLink>
    </div>
</template>

<script setup lang="ts">
interface SlideProps {
    title: string;
    text: string;
    link: string;
}

const props = defineProps<SlideProps>();
</script>

<style lang="scss">
.slide {
    max-width: 340px;
    height: 455px;
    border-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @include shadowCarousel;

    .slide-title {
        font-weight: bold;
        font-size: 31px;
        line-height: 120%;
        color: $blue-800;
    }

    .slide-text {
        margin-top: 15px;
        font-size: 18px;
        line-height: 120%;
    }

    .slide-btn {
        width: 100%;
        height: 45px;
        background-color: $blue-800;
        border-radius: 7px;
        color: white;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;

        &:hover {
            @include shadowButton;
        }
    }
}
</style>