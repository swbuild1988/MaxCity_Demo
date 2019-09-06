<template>
    <div class="info">
        <img :src="info" class="info-img"/>
        <div class="info-describe">{{infoDes}}</div>
    </div>
</template>
<script lang="ts" src="./infoBox.ts"></script>

<style lang="less" scope>
    @import './infoBox.less';
</style>