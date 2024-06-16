<template>
    <form class="form-container" @submit.prevent="handleSubmit">
        <Input label-text="Номер автомобиля" input-name="numberCar" placeholder="А 123 БВ" :modelValue="form.numberCar"
            :validate="validateCarNumber" :formatter="formatCarNumber"
            @update:modelValue="value => updateFormField('numberCar', value)" />
        <Input label-text="Регион" input-name="region" placeholder="от 01 до 997" :modelValue="form.region"
            :validate="validateRegion" :formatter="formatRegion"
            @update:modelValue="value => updateFormField('region', value)" />
        <Input label-text="Свидетельство о регистрации ТС" input-name="certificate" placeholder="77 AA 123456"
            :modelValue="form.certificate" :validate="validateCertificate" :formatter="formatCertificate"
            @update:modelValue="value => updateFormField('certificate', value)" />
        <Button class-name="btn-submit" type="submit" text="Проверить штрафы" :disabled="isDisabled || disableFetch">
            <template #icon-right>
                <img class="btn-icon" :src="arrowIcon" alt="icon" />
            </template>
        </Button>
        <Modal></Modal>
        <span class="form-message" v-if="isMessage">{{ message }}</span>
    </form>

    <span class="offert">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту
    </span>

</template>

<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import arrowIcon from '@/assets/icon/arrow-right.svg';
import { validateCarNumber, validateCertificate, validateRegion } from '~/helpers/validate';
import { formatCarNumber, formatCertificate, formatRegion } from '~/helpers/formatters';
import Input from './ui/Input.vue';
import Button from './ui/Button.vue';
import Modal from './Modal.vue';

interface FormField {
    value: string;
    isVerify: boolean;
    error: string;
}

interface FormState {
    numberCar: FormField;
    region: FormField;
    certificate: FormField;
}

const initialFormState: FormState = {
    numberCar: {
        value: '',
        isVerify: false,
        error: ''
    },
    region: {
        value: '',
        isVerify: false,
        error: ''
    },
    certificate: {
        value: '',
        isVerify: false,
        error: ''
    }
};

const form = reactive<FormState>({ ...initialFormState });

const disableFetch = ref(false);
const message = 'Данные успешно отправлены'
const isMessage = ref(false)

const messageDelay = () => {
    isMessage.value = true;
    setTimeout(() => {
        isMessage.value = false;
    }, 5000);
}
const fetchDelay = () => {
    disableFetch.value = true;
    setTimeout(() => {
        disableFetch.value = false;
        resetForm()
        messageDelay()
    }, 1000);
}

const isDisabled = computed(() => !(form.numberCar.isVerify && form.region.isVerify && form.certificate.isVerify));

const handleSubmit = () => {
    fetchDelay()

    console.log('Form data:', form);
};

const resetForm = () => {
    Object.assign(form, initialFormState);
};

const updateFormField = (field: keyof FormState, newValue: Partial<FormField>) => {
    form[field] = { ...form[field], ...newValue };
};
</script>

<style lang="scss">
.form-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 12px;
    position: relative;
}

.form-message {
    color: green;
    position: absolute;
    bottom: -85px;
    left: 0;
}

.offert {
    font-size: 13px;
    line-height: 120%;
    color: $gray-800;
}

.form-container>*:nth-child(1) {
    width: 320px;
}

.form-container>*:nth-child(2) {
    width: 213px;
}

.form-container>*:nth-child(3) {
    margin-top: -16px;
    width: 563px;
}

.form-container>*:nth-child(4) {
    margin-top: -15px;
    width: 210px;
}

.form-container>*:nth-child(5) {
    margin-left: -10px;
    margin-top: -15px;
    width: 258px;
}

.btn-submit {
    background-color: $blue-800;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    @include buttonBig;
    transition: .3s;

    .btn-icon {
        margin-top: 3px;
        margin-left: 6px;
    }

    &:hover {
        @include shadowButton;
        transform: scale(0.95);
    }

    &:disabled {
        background-color: rgb(155, 201, 245);
        cursor: not-allowed;
    }
}
</style>
