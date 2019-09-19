<template>
    <div class="anemometer-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./anemometer.ts"></script>

<style lang="less">
    @import './anemometer.less';
</style>

