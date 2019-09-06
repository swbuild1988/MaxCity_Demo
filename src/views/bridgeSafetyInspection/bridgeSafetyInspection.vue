<template>
    <div class="bridgeSafetyInspection-wrap grid">
        <div class="grid-cell bridge-box" :style="{background: 'url('+ bridgeWrapBackground +') no-repeat',backgroundSize: '100% 98%'}">
            <bridge :bridgeTypeBackground="bridgeTypeBackground" :bridgeType="bridgeType" :bridgePic="bridgePic"/>
            <div class="bridge-analyse" :style="{background: 'url('+ bridgeAnalyseBackground +') no-repeat',backgroundSize: 'inherit'}">
                <div class="bridge-analyse-title">拱式桥病害分析</div>
                <ul>
                    <li v-for="(item, index) in bridgeAnalyse" :key="index">{{index+1}}、{{item}}</li>
                </ul>
            </div>
            <div class="wind-speed">
                <info infoDes='风速：16km/小时' />
            </div>
            <div class="load">
                <info infoDes='荷载：50KN/㎡'/>
            </div>
        </div>    
        <div class="grid-cell echarts-box-2">
            <MultiLine id="MultiLine"/>
        </div>
        <div class="grid-cell echarts-box-1"></div>
        <div class="grid-cell echarts-box-1"></div>
    </div>
</template>

<script lang="ts" src="./bridgeSafetyInspection.ts"></script>

<style lang="less" scope>
    @import './bridgeSafetyInspection.less';
</style>

