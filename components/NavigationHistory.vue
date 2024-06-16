<template>
    <div class="navigation-history">
        <ul class="history-list">
            <li v-for="(item, index) in history" :key="index">
                <NuxtLink :to="item.path" exact-active-class="active" active-class="active">{{ item.name }}</NuxtLink>
                <span class="history-dot">●
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useHistory } from '~/utils/history';

const { history } = useHistory();
</script>

<style lang="scss">
.navigation-history {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .history-list {
        display: flex;
        gap: 15px;

        a {
            color: black;
            font-size: 13px;
            line-height: 120%;

            &.active {
                color: $gray-800;
                font-weight: bold;
                text-decoration: underline;
            }
        }

        .history-dot {
            margin-left: 10px;
        }
    }
}

.navigation-history ul {
    list-style: none;
    padding: 0;
}

.navigation-history li {
    margin: 5px 0;
}

.navigation-history a {
    text-decoration: none;
    color: #007bff;
}

.navigation-history a:hover {
    text-decoration: underline;
}
</style>