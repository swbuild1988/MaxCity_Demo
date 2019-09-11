<template>
    <div>
        <div class="bridge-type" :style="{background: 'url('+ bridgeTypeBackground +') no-repeat', backgroundSize: '100% 100%'}">
            <span class="choosed-birdge" @click="showChoosedBridge()">{{bridgeName}}</span>
            <ul class="choose-bridge-box" v-show="showBirdge">
                <li class="choose-birdge" 
                    v-for="(item, index) in bridgeType" 
                    :key="index" 
                    v-show="item.showBirdgeType" 
                    @click="chooseBirdge(item.typeId)">
                    {{item.typeName}}
                    <router-link  :to="item.path" />
                </li>
            </ul>
        </div>
            <router-view />
    </div>
</template>
<script lang="ts" src="./bridge.ts"></script>

<style lang="less" scope>
    @import './bridge.less';
</style>