<template>
    <div class="contact-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Контакты</h1>
    </div>
</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Контакты'
});
</script>


<style lang="scss">
.contact-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>