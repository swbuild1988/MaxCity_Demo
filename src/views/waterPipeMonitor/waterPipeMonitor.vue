<template>
    <div class="waterPipeMonitor-wrap">
        <div class="top-wrap">
            <div class="item map-wrap"></div>
            <div class="item data-wrap">
                <div :style="{background: 'url('+ waterPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{smartBallTitle}}
                    </div>
                </div>
                <div class="waterPipeData-wrap" :style="{background: 'url('+ waterPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.tableHeader' :tableBody='data.tableBody'/>
                </div>
            </div>
        </div>
        <div class="echarts-wrap">
            <div class="item">
                <div :style="{background: 'url('+ waterPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{physicalParameterTitle}}
                    </div>
                </div>
                <div class="waterPipeData-wrap" :style="{background: 'url('+ waterPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <disorderTableList :disorderTableData="data.disorderTableData" />
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ waterPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{operaEnvironmentTitle}}
                    </div>
                </div>
                <div class="waterPipeData-wrap" :style="{background: 'url('+ waterPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <disorderTableList class="run-environment" :disorderTableData="data.runEnvirData" />
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ waterPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{detectCapabilityTitle}}
                    </div>
                </div>
                <div class="waterPipeData-wrap" :style="{background: 'url('+ waterPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <disorderTableList class="testing-ability" :disorderTableData="data.testAbilityData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./waterPipeMonitor.ts"></script>

<style lang="less">
    @import './waterPipeMonitor.less';
</style>

