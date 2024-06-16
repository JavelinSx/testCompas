<template>
    <div class="info-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Информация об оплате</h1>
    </div>
</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Информация об оплате'
});
</script>
<style lang="scss">
.info-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>