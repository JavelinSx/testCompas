<template>
    <div class="documents-container">
        <NavigationHistory></NavigationHistory>
        <h1 class="title">Документы</h1>
    </div>

</template>
<script setup lang="ts">
import NavigationHistory from '~/components/NavigationHistory.vue';
definePageMeta({
    title: 'Документы',
});
</script>

<style lang="scss">
.documents-container {
    min-width: 100%;

    .title {
        font-size: 41px;
        line-height: 120%;
        margin-top: 20px;
    }
}
</style>