<template>
    <div class="drainPipeMonitor-wrap">
        <div class="top-wrap">
            <div class="item map-wrap"></div>
            <div class="item data-wrap">
                <div :style="{background: 'url('+ drainPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{drainPipeTitle}}
                    </div>
                </div>
                <div class="drainPipeData-wrap" :style="{background: 'url('+ drainPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <tableList :tableHeader='data.tableHeader' :tableBody='data.tableBody'/>
                </div>
            </div>
        </div>
        <div class="echarts-wrap">
            <div class="item">
                <div :style="{background: 'url('+ drainPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{pumpTypeTitle}}
                    </div>
                </div>
                <div class="drainPipeData-wrap" :style="{background: 'url('+ drainPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <MultiBar id="pumpStationType" :data="pumpStationType"/>
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ drainPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{equipemtNameTitle}}
                    </div>
                </div>
                <div class="drainPipeData-wrap" :style="{background: 'url('+ drainPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <BasicArea id="equipName" :data="equipName"/>
                </div>
            </div>
            <div class="item">
                <div :style="{background: 'url('+ drainPipeTitleBack +') 1% 100% no-repeat',backgroundSize: 'inherit'}">
                    <div class="title-wrap">
                        {{equipmentStatisticsTitle}}
                    </div>
                </div>
                <div class="drainPipeData-wrap" :style="{background: 'url('+ drainPipeDataBack +') no-repeat',backgroundSize: '100% 100%'}">
                    <LabelRotationBar id="pumpEquip" :data="pumpEquip"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./drainPipeMonitor.ts"></script>

<style lang="less">
    @import './drainPipeMonitor.less';
</style>

