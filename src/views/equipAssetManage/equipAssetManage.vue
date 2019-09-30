<template>
    <div class="equipAssetManage-wrap" :style="{background: 'url('+ equipAssetWrapBackgroundW +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <div class="equipAssetManage-wrap-N" :style="{background: 'url('+ equipAssetWrapBackgroundN +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
            <leftMenu class="left-menu" />
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" src="./equipAssetManage.ts"></script>

<style lang="less">
    @import './equipAssetManage.less';
</style>

