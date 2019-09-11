<template>
    <div class="feedPipeMonitor-wrap">
        <div class="top-wrap">
            <div class="item map-wrap">
                <div :style="{background: 'url('+ mapBack +') 100% 100% no-repeat',backgroundSize: '100% 100%'}">
                    <img class="feed-pipe-map" :src="feedPipeMap" />
                </div>
            </div>
            <div class="item data-wrap">
                <div :style="{background: 'url('+ feedPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{feedPipeTitle}}
                    </div>
                </div>
                <div class="feedPipeData-wrap" :style="{background: 'url('+ feedPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.tableHeader' :tableBody='data.tableBody'/>
                </div>
            </div>
        </div>
        <div class="echarts-wrap">
            <div class="item">
                <div class="echart-wrap" :style="{background: 'url('+ echartsWrapBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiBar id="firstEquip" v-bind:data="firstEquipments"/>
                </div>
            </div>
            <div class="item">
                <div class="echart-wrap" :style="{background: 'url('+ echartsWrapBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiBar id="secondEquip" v-bind:data="secondEquipments"/>
                </div>
            </div>
            <div class="item">
                <div class="echart-wrap" :style="{background: 'url('+ echartsWrapBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <SimplePie id="sensors" :data="sensors"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./feedPipeMonitor.ts"></script>

<style lang="less">
    @import './feedPipeMonitor.less';
</style>

