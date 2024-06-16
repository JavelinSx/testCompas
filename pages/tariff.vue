<template>
    <div class="tariff-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Тарифы</h1>
    </div>
</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Тарифы'
});
</script>



<style lang="scss">
.tariff-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>