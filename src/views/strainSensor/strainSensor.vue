<template>
    <div class="strainSensor-wrap" :style="{background: 'url('+ strainSensorWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <template v-for="(element, idx) in strainSensorInfoData">
            <sensorData class="sensor-data" 
                :key="element.keyID+'-'+idx" 
                :sensorData="element.strainSensorInfo" 
                v-show="data.current===idx" 
                :style="{ left: assetLeftLen, top: assetTopLen }"
                @click.native="toBirdge()"
                />
        </template>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" 
                :key="index" 
                :src="item.picUrl" 
                :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" 
                @click="showAsset(index)"/>
        </template>
    </div>
</template>

<script lang="ts" src="./strainSensor.ts"></script>

<style lang="less">
    @import './strainSensor.less';
</style>

