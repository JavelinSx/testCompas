<template>
    <button :type="type" :class="className" :disabled="isDisabled">
        <slot name="icon-left"></slot>
        {{ text }}
        <slot name="icon-right"></slot>
        <slot name="additional-text"></slot>
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    type?: 'button' | 'submit' | 'reset';
    className: string;
    text: string;
    isDisabled?: boolean;
}>();

</script>
