<template>
    <div class="input-container">
        <label :for="inputName" class="input-label">{{ labelText }}</label>
        <input :id="inputName" :name="inputName" :placeholder="placeholder"
            :class="`input ${inputValue.error ? 'input-error' : ''} ${inputValue.isVerify ? 'input-verify' : ''}`"
            :value="inputValue.value" @input="handleInput" @blur="handleBlur" />
        <span v-if="inputValue.error" class="error">{{ inputValue.error }}</span>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
const props = defineProps<{
    inputName: string;
    labelText: string;
    placeholder: string;
    modelValue: { value: string, isVerify: boolean, error: string };
    validate: (value: string) => boolean;
    formatter: (value: string) => string;
}>();

const emit = defineEmits(['update:modelValue']);

const inputValue = reactive({ ...props.modelValue });

watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue.value;
    inputValue.isVerify = newValue.isVerify;
    inputValue.error = newValue.error;
});

const validateInput = (value: string) => {
    if (!props.validate(value)) {
        inputValue.error = 'Неверный формат ввода';
        inputValue.isVerify = false;
    } else {
        inputValue.error = '';
        inputValue.isVerify = true;
    }
};

const handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    inputValue.value = target.value;
    emit('update:modelValue', { ...inputValue });
};

const handleBlur = () => {
    inputValue.value = props.formatter(inputValue.value);
    validateInput(inputValue.value);
    emit('update:modelValue', { ...inputValue });
};
</script>

<style lang="scss">
.input-container {
    display: flex;
    flex-direction: column;

    .input {
        border: 1px solid $gray-600;
        border-radius: 5px;
        transition: .3s;
        height: 40px;
        padding-left: 7px;
        font-size: 18px;

        &:focus {
            border-color: $blue-800;
        }

        &:disabled {
            background-color: $gray-200;
            /* Adjust as needed for better UX */
            cursor: not-allowed;
        }
    }

    .input-label {
        font-size: 12px;
        line-height: 120%;
        margin-bottom: 5px;
    }

    .input-error {
        border-color: red;

        &:focus {
            border-color: red;
        }
    }

    .input-verify {
        border-color: green;

        &:focus {
            border-color: green;
        }
    }

    .error {
        margin-top: 5px;
        margin-left: 5px;
        font-size: 12px;
        color: red;
    }
}
</style>
