<template>
    <div class="gasPipeMonitor-wrap">
        <div class="top-wrap">
            <div class="item map-wrap"></div>
            <div class="item data-wrap">
                <div :style="{background: 'url('+ gasPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{gasPipeTitle}}
                    </div>
                </div>
                <div class="gasPipeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.tableHeader' :tableBody='data.tableBody'/>
                </div>
            </div>
        </div>
        <div class="echarts-wrap">
            <div class="item">
                <div :style="{background: 'url('+ gasPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{scopeConstructTitle}}
                    </div>
                </div>
                <div class="gasPipeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiBar id="buildRange" :data="buildRange" />
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ gasPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{sewagePipelineTitle}}
                    </div>
                </div>
                <div class="gasPipeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiLine id="sewagePipeline" :data="sewagePipeline" />
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ gasPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{monitorPointTitle}}
                    </div>
                </div>
                <div class="gasPipeData-wrap" :style="{background: 'url('+ thermalTubeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <LabelRotationBar id="observeStation" :data="observeStation" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./gasPipeMonitor.ts"></script>

<style lang="less">
    @import './gasPipeMonitor.less';
</style>

