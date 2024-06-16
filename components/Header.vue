<template>
    <div class="navigation">
        <Navbar class="navbar"></Navbar>
    </div>
</template>
<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>
<style lang="scss">
.navigation {
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>