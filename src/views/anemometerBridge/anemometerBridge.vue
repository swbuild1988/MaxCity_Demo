<template>
    <div class="anemometerBridge-wrap" :style="{background: 'url('+ anemometerBridgeWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <assetManage class="asset-manage" :assetManageData="assetManage" :style="{ left: assetLeftLen, top: assetTopLen }"/>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" :key="index" :src="item.picUrl" :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" @click="showAsset(index)"/>
        </template>
    </div>
</template>

<script lang="ts" src="./anemometerBridge.ts"></script>

<style lang="less">
    @import './anemometerBridge.less';
</style>

