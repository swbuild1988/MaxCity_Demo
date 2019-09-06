<template>
    <div>
        <div class="bridge-type" :style="{background: 'url('+ bridgeTypeBackground +') no-repeat', backgroundSize: 'contain'}">
            {{bridgeType}}
        </div>
        <div class="bridge-pic-box">
            <img :src="bridgePic" class="bridge-pic"/>
        </div>
    </div>
</template>
<script lang="ts" src="./bridge.ts"></script>

<style lang="less" scope>
    @import './bridge.less';
</style>