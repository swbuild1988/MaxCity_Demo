<template>
    <div class="humiditySensor-wrap" :style="{background: 'url('+ humidityWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <!-- <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/> -->
        <assetManage class="asset-manage" :assetManageData="assetManage" :style="{ left: assetLeftLen, top: assetTopLen }"/>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" :key="index" :src="item.picUrl" :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" @click="showAsset(index)"/>
        </template>
    </div>
</template>

<script lang="ts" src="./humiditySensor.ts"></script>

<style lang="less">
    @import './humiditySensor.less';
</style>

