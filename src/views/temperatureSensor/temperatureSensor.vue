<template>
    <div class="temperatureSensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./temperatureSensor.ts"></script>

<style lang="less">
    @import './temperatureSensor.less';
</style>

