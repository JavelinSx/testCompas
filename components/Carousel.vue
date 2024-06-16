<template>
    <h2 class="carousel-title">Документы</h2>
    <swiper :modules="[SwiperPagination, SwiperNavigation]" :slides-per-view="3" :pagination="{ clickable: true }"
        :navigation="true">
        <swiper-slide v-for=" (slide, index) in slides" :key="index">
            <SlideMain :title="slide.title" :text="slide.text" :link="slide.link"></SlideMain>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { ref } from 'vue';
import SlideMain from './ui/SlideMain.vue';

const slides = ref([
    { title: 'Лицензионный договор', text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ', link: '/documents/license' },
    { title: 'Политика обработки персональных данных', text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.', link: '/documents/info' },
    { title: 'Информация об оплате', text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.', link: '/documents/politic' },
    { title: 'Лицензионный договор', text: 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. ', link: '/documents/license' },
    { title: 'Политика обработки персональных данных', text: 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.', link: '/documents/info' },
    { title: 'Информация об оплате', text: 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.', link: '/documents/politic' },
]);
</script>

<style lang="scss">
.swiper {
    min-width: 1148px;

    padding-top: 22px;
    padding-bottom: 22px;
    padding-right: 45px;
    height: 80%;
}

.swiper-pagination {
    top: 478px;
}

.swiper-pagination-bullet {
    width: 10px;
    height: 10px;
}

.swiper-wrapper {
    margin-left: 30px;
}

.swiper-button-next {
    color: white;
    background-color: $blue-400;
    width: 40px;
    height: 80px;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    top: 48%;
    right: 20px;
    transition: .3s;

    &:hover {
        transform: scale(1.1);
    }

    &::after {
        font-size: 30px;
    }


}

.swiper-button-prev {
    color: white;
    background-color: $blue-400;
    width: 40px;
    height: 80px;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
    top: 48%;
    left: 0;
    transition: .3s;

    &:hover {
        transform: scale(1.1);
    }

    &::after {
        font-size: 30px;
    }


}

.carousel-title {
    font-size: 34px;
    font-weight: bold;
    line-height: 120%;
    margin-top: 86px;
    margin-bottom: 23px;
    margin-left: 33px;
    text-align: center;
}
</style>