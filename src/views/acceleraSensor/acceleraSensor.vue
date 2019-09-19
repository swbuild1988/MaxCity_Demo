<template>
    <div class="acceleraSensor-wrap">
        <assetManage class="asset-manage" :assetManageData="assetManage"/>
        <sensorData class="sensor-data" :sensorData="strainSensorInfo"/>
    </div>
</template>

<script lang="ts" src="./acceleraSensor.ts"></script>

<style lang="less">
    @import './acceleraSensor.less';
</style>

