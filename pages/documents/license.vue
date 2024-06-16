<template>
    <div class="license-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Лицензионный договор</h1>
    </div>
</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Лицензионный договор'
});
</script>

<style lang="scss">
.license-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>