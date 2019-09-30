<template>
    <div class="humiditySensorBridge-wrap" :style="{background: 'url('+ humidityBridgeWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <assetManage class="asset-manage" :assetManageData="assetManage" :style="{ left: assetLeftLen, top: assetTopLen }"/>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" :key="index" :src="item.picUrl" :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" @click="showAsset(index)"/>
        </template>
    </div>
</template>

<script lang="ts" src="./humiditySensorBridge.ts"></script>

<style lang="less">
    @import './humiditySensorBridge.less';
</style>

