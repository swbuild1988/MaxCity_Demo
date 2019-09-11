<template>
    <div class="thermalTubeMonitor-wrap">
        <div class="top-wrap">
            <div class="item map-wrap">
                <div :style="{background: 'url('+ mapBack +') 100% 100% no-repeat',backgroundSize: '100% 100%'}">
                    <img class="thermal-tube-map" :src="thermalTubeMap" />
                </div>
            </div>
            <div class="item data-wrap">
                <div :style="{background: 'url('+ thermalTubeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{thermalTubeTitle}}
                    </div>
                </div>
                <div class="thermalTubeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.tableHeader' :tableBody='data.tableBody'/>
                </div>
            </div>
        </div>
        <div class="echarts-wrap">
            <div class="item">
                <div :style="{background: 'url('+ thermalTubeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{equipmentOrganizeTitle}}
                    </div>
                </div>
                <div class="thermalTubeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <HorizontalBar id="equipDefence" :data="equipDefence"/>
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ thermalTubeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{equipmentStatisticsTitle}}
                    </div>
                </div>
                <div class="thermalTubeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiBar id="equipStatistic" :data="equipStatistic"/>
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ thermalTubeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{detectionContnet}}
                    </div>
                </div>
                <div class="thermalTubeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.detectionContnetHeader' :tableBody='data.detectionContnetBody'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./thermalTubeMonitor.ts"></script>

<style lang="less">
    @import './thermalTubeMonitor.less';
</style>

