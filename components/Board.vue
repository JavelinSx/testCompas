<template>
    <h2 class="board-title">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="board">
        <Card v-for="item in listCard" :imgIcon="item.imgSrc" :text="item.text" :title="item.title"></Card>
    </div>
</template>
<script setup lang="ts">

import Card from './ui/Card.vue'
import { listCard } from './cardList';

</script>

<style lang="scss">
.board-title {
    font-weight: bold;
    font-size: 34px;
    line-height: 120%;
    margin-top: 100px;
    margin-bottom: 33px;
    margin-right: 36px;
    text-align: center;
}

.board {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 35px;

}
</style>