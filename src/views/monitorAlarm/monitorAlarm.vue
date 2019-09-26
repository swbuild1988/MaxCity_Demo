<template>
    <div class="monitorAlarm-wrap" :style="{background: 'url('+ monitorAlarmWrapBackMap +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <h2 class="title">检测总览</h2>
        <div class="flex-wrap">
            <template v-for="(item, index) in data.monitorData">
                <div class="item-wrap" :key="index">
                    <div class="monitor-item" >
                        <div class="title">{{item.title}}</div>
                        <div class="item-container">
                            <div class="img-wrap">
                                <img :src="item.imgSrc" />
                            </div>
                            <div class="info-wrap">
                                <div v-for="(ele, idx) in item.describeData" :key="idx+'ele'">
                                    <span>{{ele.key}}：{{ele.val}}</span>
                                    <span v-if(ele.contrast) class="contrast">&nbsp;&nbsp;&nbsp;&nbsp;{{ele.contrast}}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="alarm-btn">报警</button>
                            <button class="historyData-btn">历史数据</button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts" src="./monitorAlarm.ts"></script>

<style lang="less">
    @import './monitorAlarm.less';
</style>

