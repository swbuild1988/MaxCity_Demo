<template>
    <div class="strainSensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./strainSensor.ts"></script>

<style lang="less">
    @import './strainSensor.less';
</style>

