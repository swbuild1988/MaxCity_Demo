<template>
    <div class="humiditySensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./humiditySensor.ts"></script>

<style lang="less">
    @import './humiditySensor.less';
</style>

