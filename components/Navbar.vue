<template>
    <div class="navbar-container">
        <nav class="navbar-navigation">
            <NuxtLink to="/">
                <img :src="logo" class="navbar-logo" alt="logo">
            </NuxtLink>
            <ul class="navbar-navigation-list">
                <li>
                    <NuxtLink class="navbar-link" to="/tariff">Тарифы</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="navbar-link" to="/contacts">Контакты</NuxtLink>
                </li>
            </ul>
        </nav>
        <div class="navbar-service">
            <span class="phone"> +7 495 118-44-22</span>
            <Button type="button" className="btn-reg" text="Вход"></Button>
            <Button type="button" className="btn-auth" text="Регистрация"></Button>
        </div>
    </div>
</template>
<script setup lang="ts">
import logo from '@/assets/icon/logo.svg'
import Button from './ui/Button.vue';
</script>
<style lang="scss">
.navbar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1172px;
    height: 60px;

    .navbar-logo {
        height: 26px;
        padding-right: 30px;
        object-fit: cover;
    }

    .navbar-navigation {
        display: flex;
        flex-direction: row;
        font-size: 18px;

        .navbar-navigation-list {
            color: white;
            display: flex;
            flex-direction: row;
            gap: 30px;

            .navbar-link {
                transition: .3s;

                &:hover {
                    @include shadowText;
                }
            }
        }

    }

    .navbar-service {
        display: flex;
        gap: 13px;
        margin-right: 7px;

        .phone {
            font-size: 18px;
            line-height: 37px;
            font-weight: bold;
            color: white;
        }

        .btn-reg {
            color: white;
            @include buttonSmall;
            transition: .3s;
            font-size: 18px;
            width: 80px;

            &:hover {
                @include shadowText;
                transform: scale(1.07);
            }
        }

        .btn-auth {
            color: white;
            background-color: $blue-800;
            font-size: 15px;
            width: 117px;
            transition: .3s;
            @include buttonSmall;

            &:hover {
                transform: scale(1.07);
            }
        }
    }

}
</style>