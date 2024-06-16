<template>
    <div>
        <Button @click="openModal" class-name="btn-youtube" type="button" text="О сервисе">
            <template #icon-left>
                <img class="btn-icon" :src="youtubeIcon" alt="icon" />
            </template>
            <template #additional-text>
                <p class="btn-additional-text">(1 мин.20 сек.)</p>
            </template>
        </Button>

        <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <iframe width="960" height="532" src="https://www.youtube.com/embed/JMX9G_z5fK4?si=JhJRImCvcwNHdJKv"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <button class="btn-close" @click="closeModal">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import youtubeIcon from '@/assets/icon/youtube.svg';
import Button from './ui/Button.vue';
const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};
</script>

<style lang="scss">
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {

    position: relative;
}

.btn-youtube {
    background-color: inherit;
    color: black;
    border: 1px solid $blue-800;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: .3s;
    width: 258px;
    @include buttonBig;

    &:hover {
        @include shadowButton;
        transform: scale(0.95);
    }

    .btn-additional-text {
        font-size: 15px;
        color: $blue-800;
    }
}

.btn-close {
    position: absolute;
    top: -35px;
    right: -35px;
    width: 30px;
    height: 30px;

    span {
        position: absolute;
        display: block;
        width: 80%;
        height: 2px;
        background-color: white;
    }

    &>:nth-child(1) {
        transform: rotate(45deg);
    }

    &>:nth-child(2) {
        transform: rotate(-45deg);
    }
}
</style>