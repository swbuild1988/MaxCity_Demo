<template>
    <div class="anemometer-wrap" :style="{background: 'url('+ anemometerWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <!-- <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/> -->
        <assetManage class="asset-manage" :assetManageData="assetManage" :style="{ left: assetLeftLen, top: assetTopLen }"/>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" :key="index" :src="item.picUrl" :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" @click="showAsset(index)"/>
        </template>
    </div>
</template>

<script lang="ts" src="./anemometer.ts"></script>

<style lang="less">
    @import './anemometer.less';
</style>

