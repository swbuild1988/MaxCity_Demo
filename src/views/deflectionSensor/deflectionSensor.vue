<template>
    <div class="deflectionSensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./deflectionSensor.ts"></script>

<style lang="less">
    @import './deflectionSensor.less';
</style>

