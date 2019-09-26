import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { MonitorAlarmData } from '@/types/views/monitorAlarm.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
    
    monitorAlarmWrapBackMap: string = require('../../assets/images/monitor-alarm-wrap-bg.png')

    // data
    data: MonitorAlarmData = {
        monitorData:[
            { 
                title: '排水管网',
                imgSrc: require('../../assets/images/drainage-network.png'),
                describeData: [
                    { key: '流量', val: '30立方米/小时' },
                    { key: '液位', val: '↑10', contrast: '↓-20' },
                ]
            },
            { 
                title: '排水泵',
                imgSrc: require('../../assets/images/drainage-pump.png'),
                describeData: [
                    { key: '水质', val: '良好' },
                    { key: '水位', val: '↑30', contrast: '↓10' },
                    { key: '压力', val: '30kg·f/cm' },
                    { key: '流量', val:'25立方米/小时' }
                ]
            },
            { 
                title: '管道淤积堵塞',
                imgSrc: require('../../assets/images/pipeline-silting.png'),
                describeData: [
                    { key: '是否淤积', val: '是' },
                    { key: '厚度', val: '2m' }
                ]
            },
            { 
                title: '管道腐蚀速率',
                imgSrc: require('../../assets/images/pipeline-corrosion-rate.png'),
                describeData: [
                    { key: '是否腐蚀', val: '是' },
                    { key: '腐蚀状况', val: '轻' }
                ]
            },
            { 
                title: '井盖防盗',
                imgSrc: require('../../assets/images/manhole-cover.png'),
                describeData: [
                    { key: '闭合状态', val: '关' }
                ]
            },
            { 
                title: '水质检测',
                imgSrc: require('../../assets/images/water-quality-inspection.png'),
                describeData: [
                    { key: '水质状况', val: '正常' },
                    { key: '污染情况', val: '↑0', contrast: '↓0' },
                ]
            },
            { 
                title: '积水深度',
                imgSrc: require('../../assets/images/depth-ponding.png'),
                describeData: [
                    { key: '水位状况', val: '正常' }
                ]
            },
            { 
                title: '蓄池水位',
                imgSrc: require('../../assets/images/pool-water-level.png'),
                describeData: [
                    { key: '河道', val: '正常' },
                    { key: '蓄池水位', val: '↑0', contrast: '↓0' },
                ]
            },
            { 
                title: '有毒气体',
                imgSrc: require('../../assets/images/concentration-of-toxic-gases.png'),
                describeData: [
                    { key: ':CH₄', val: '↑30', contrast: '↓-10' },
                    { key: 'H₂S', val: '↑30', contrast: '↓-10' },
                    { key: 'CO', val: '↑30', contrast: '↓-10' },
                    { key: 'O₂', val: '↑30', contrast: '↓-10' }
                ]
            },
        ]
    }

    created() {
        //
    }
  
    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        //
    }
    
}
