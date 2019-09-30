<template>
    <div class="acceleraSensor-wrap" :style="{background: 'url('+ acceleraSensorWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <template v-for="(element, idx) in strainSensorInfoData">
            <sensorData class="sensor-data" 
                :key="element.keyID+'-'+idx" 
                :sensorData="element.strainSensorInfo" 
                v-show="data.current===idx" 
                :style="{ left: assetLeftLen, top: assetTopLen }"
                @click.native="toBirdgeAccele()"
                />
        </template>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" 
                :key="index" 
                :src="item.picUrl" 
                :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" 
                @click="showAsset(index)"/>
        </template>
        <div class="statistics-wrap">
            <h4 class="title">运行状态</h4>
            <div>
                <img :src="require('../../assets/images/normal-icon.png')" />
                正常：{{data.normalNum}}
            </div>
            <div>
                <img :src="require('../../assets/images/unnormal-icon.png')" />
                故障：{{data.unnormalNum}}
            </div>
        </div>

        
    </div>
</template>

<script lang="ts" src="./acceleraSensor.ts"></script>

<style lang="less">
    @import './acceleraSensor.less';
</style>

