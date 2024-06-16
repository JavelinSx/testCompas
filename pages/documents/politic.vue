<template>
    <div class="politic-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Политика обработки персоональных данных</h1>
    </div>
</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Политика обработки персоональных данных'
});
</script>

<style lang="scss">
.politic-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>