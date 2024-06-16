<template>
    <section class="main-container">
        <div class="main-container-form">
            <h1 class="main-container-title">Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
            <Form></Form>
        </div>
        <img :src="pcImg" alt="pc-image" class="main-container-img">
    </section>
    <section class="board-container">
        <Board></Board>
    </section>
    <section class="carousel">
        <Carousel></Carousel>
    </section>


</template>
<script setup lang="ts">
import pcImg from '@/assets/pc-image.png'
import Form from '@/components/Form.vue';
import Board from '@/components/Board.vue';
import Carousel from '~/components/Carousel.vue';
definePageMeta({
    title: 'Главная'
});
</script>
<style lang="scss">
.main-container {
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    gap: 40px;

    .main-container-form {

        .main-container-title {
            font-size: 41px;
            font-weight: bold;
            line-height: 120%;
            margin-bottom: 25px;
        }
    }

    .main-container-img {
        margin-right: 36px;
        padding-bottom: 32px;
    }
}

.board-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
}
</style>