<template>
    <div class="thermodynamicChart-wrap" :style="{background: 'url('+ equipAssetWrapBackgroundW +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <div class="thermodynamicChart-wrap-N" :style="{background: 'url('+ equipAssetWrapBackgroundN +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
            <!-- <img class="img" :src="data.imgSrc" /> -->
            <thermodynamicChart id="thermodynamicChartID" :points="points"/>
        </div>    
    </div>
</template>

<script lang="ts" src="./thermodynamicChart.ts"></script>

<style lang="less">
    @import './thermodynamicChart.less';
</style>

