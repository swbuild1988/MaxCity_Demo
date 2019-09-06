<template>
    <div class="main-wrap" :style="{background: 'url('+ mainWrapBackground +') 100% 100%'}">
        <topPage />
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" src="./main.ts"></script>

<style lang="less" scope>
    @import './main.less';
</style>

