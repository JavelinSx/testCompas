<template>
    <div class="main-layout">
        <Header></Header>
        <main class="page-content">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
</script>
<style lang="scss">
.main-layout {
    width: 100%;
    height: 2160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    overflow: hidden;

    .page-content {
        width: 100%;
        max-width: 1172px;
        display: flex;
        flex-direction: column;
        margin-right: -20px;
    }
}
</style>