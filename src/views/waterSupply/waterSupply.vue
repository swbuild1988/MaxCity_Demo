<template>
    <div class="waterSupply-wrap" :style="{background: 'url('+ waterSupplyWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
    </div>
</template>

<script lang="ts" src="./waterSupply.ts"></script>

<style lang="less">
    @import './waterSupply.less';
</style>

