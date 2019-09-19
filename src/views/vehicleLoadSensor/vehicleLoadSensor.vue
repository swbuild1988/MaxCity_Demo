<template>
    <div class="vehicleLoadSensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./vehicleLoadSensor.ts"></script>

<style lang="less">
    @import './vehicleLoadSensor.less';
</style>

