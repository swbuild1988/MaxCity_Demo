<template>
    <div v-show="isShow" class="sensorData-wrap" :style="{background: 'url('+ data.sensorDataBack +') 100% 100% no-repeat', backgroundSize: '100%'}">
        <div class="title">{{data.title}}</div>
        <ul>
            <li v-for="(item ,index) in sensorData" :key="index" >
                <span>
                    <img class="describe-icon" :src="item.src"/> 
                </span>
                <span>{{item.describe}}：</span>
                <span>{{item.value}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { SensorDataData } from '@/types/components/sensorData.interface'
    // import {  } from "@/components" // 组件

    @Component({})
    export default class About extends Vue {
        // prop
        @Prop({
        required: false,
            default: ''
        }) name!: string

        @Prop()
        sensorData!: any[]

        @Prop()
        isShow!: boolean

        // data
        data: SensorDataData = {
            componentName: 'sensorData',
            sensorDataBack: require('../../assets/images/data-info-box.png'),
            title: '桥梁传感器数据'
        }

    }
</script>

<style lang="less">

    .sensorData-wrap {
        min-width: 15vmin;
        padding: 1vmin;
        .title{
            color: @asset-manage-main-color;
            text-align: center;
            font-size: 1.5vmin;
        }
        ul{
            li{
                list-style: none;
                line-height: 2.5;
                color: @asset-manage-main-color;
            }
        }
        .describe-icon{
            vertical-align:middle;
            margin-right: 0.5vmin;
        }
    }
</style>

