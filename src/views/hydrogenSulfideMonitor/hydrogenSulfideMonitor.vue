<template>
    <div class="hydrogenSulfideMonitor-wrap" :style="{background: 'url('+ equipAssetWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <assetManage class="asset-manage" :assetManageData="assetManage" :style="{ left: assetLeftLen, top: assetTopLen }"/>
        <template v-for="(item, index) in data.toPointData">
            <img class="mark-point" :key="index" :src="item.picUrl" :style="{left:item.leftLen, top: item.TopLen, 'position': 'relative'}" @click="showAsset(index)"/>
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

<script lang="ts" src="./hydrogenSulfideMonitor.ts"></script>

<style lang="less">
    @import './hydrogenSulfideMonitor.less';
</style>

