<template>
    <div class="assetManage-wrap">
        <div class="title">{{data.title}}</div>
        <div class="flex-box">
            <div class="flex-item">
                <div class="explain" v-for="(item, index) in data.explainList" :key="index">
                    <img class="explain-img" :src="item.url" />
                    <span>{{item.explain}}</span>
                </div>
                <Button type="error" class="repair-btn">报修</Button>
            </div>
            <div class="flex-item">
                <BasicArea id="assetManage" :data="equipName"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { AssetManageData } from '@/types/components/assetManage.interface'
    import BasicArea from '@/components/Charts/BasicArea.vue'
    import BasicAreaData from '@/types/components/BasicArea.interface.ts'

    @Component({
        components: { BasicArea }
    })
    export default class About extends Vue {
        // prop
        @Prop({
        required: false,
            default: ''
        }) name!: string

        @Prop({ required: true})
        assetManageData: any

        // data
        data: AssetManageData = {
            componentName: 'assetManage',
            title: '资产管理',
            explainList: [
                { url: require('../../assets/images/signal-quality.png'), explain: '信号质量' },
                { url: require('../../assets/images/signal-interruption.png'), explain: '信号中断' },
                { url: require('../../assets/images/equip-failure.png'), explain: '设备故障' },
            ]
        }

        equipName: BasicAreaData = {
            title: '',
            xData: [],
            series: [],
            rangeColors: ['#353f72', '#353f72'],
            lineColor: ['#47edff'],
            yTextColor: '#357594'
        } 

        @Watch('assetManageData', {deep: true})
        onDataChanged(newVal: any, oldVal: any) {
            this.equipName.xData = newVal.xData
            this.equipName.series = newVal.series
        }

    }
</script>

<style lang="less">

    .assetManage-wrap {
        width: 62.8vmin;
        height: 34vmin;
        border: 0.1vmin solid #47edff;
        background: #96a6b6;
        border-radius: 0.4vmin;

        .title{
            color: @asset-manage-main-color;
            line-height: 2;
            text-align: center;
            font-size: 2vmin;
        }
        .flex-box{
            display: flex;
            height: 30vmin;
            position: relative;
            .flex-item:nth-child(1){
                flex: 1;
                .repair-btn{
                    position: absolute;
                    bottom: 2.2vmin;
                    left: 2.2vmin;
                }
            }
            .flex-item:nth-child(2){
                flex: 4
            }
            .explain{
                line-height: 2.5;
                padding-left: 2.2vmin;
                color: @asset-manage-main-color;
                font-size: 1.6vmin;
                .explain-img{
                    vertical-align:middle;
                    margin-right: 0.5vmin;
                }
            }
        }
    }
</style>

