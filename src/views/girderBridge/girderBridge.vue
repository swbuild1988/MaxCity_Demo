<template>
    <div class="girderBridge-wrap grid">
        <div class="grid-cell bridge-box" :style="{background: 'url('+ bridgeWrapBackground +') no-repeat',backgroundSize: '100% 98%'}">
            <div class="bridge-back" :style="{background: 'url('+ bridgePic +') no-repeat',backgroundSize: '98% 98%'}">
                <div class="bridge-analyse" :style="{background: 'url('+ bridgeAnalyseBackground +') no-repeat',backgroundSize: 'inherit'}">
                    <div class="bridge-analyse-title">斜拉桥病害分析</div>
                    <ul>
                        <li v-for="(item, index) in bridgeAnalyse" :key="index">{{index+1}}、{{item}}</li>
                    </ul>
                </div>
                <div class="temperature">
                    <info infoDes='温度：32℃' />
                </div>
                <div class="load">
                    <info infoDes='荷载：10KN/㎡'/>
                </div>
            </div>
        </div>    
        <div class="grid-cell echarts-box-2">
            <MultiLine id="tempAndWind" v-bind:data="tempAndWind"/>
        </div>
        <div class="grid-cell echarts-box-1">
            <MultiBar id="MultiBar" v-bind:data="multibar"/>
        </div>
        <div class="grid-cell echarts-box-1">
            <BasicArea id="acceleration" :data="acceleration" /> 
        </div>
    </div>
</template>

<script lang="ts" src="./girderBridge.ts"></script>

<style lang="less">
    @import './girderBridge.less';
</style>

