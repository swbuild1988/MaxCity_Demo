import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { WaterPipeMonitorData } from '@/types/views/waterPipeMonitor.interface'
import tableList from '@/components/tableList/tableList.vue'
import disorderTableList from '@/components/disorderTableList/disorderTableList.vue'

@Component({
    components: { tableList, disorderTableList }
})
export default class About extends Vue {
    
    waterPipeTitleBack: string = require('../../assets/images/feedPipeTitle.png')
    smartBallTitle: string = '智能球简介'
    waterPipeDataBack: string = require('../../assets/images/feedPipeDataBack.png')
    physicalParameterTitle: string = '物理参数'
    operaEnvironmentTitle: string = '运行环境'
    detectCapabilityTitle: string = '检测能力'
    mapBack: string = require('../../assets/images/mapBackground.png')
    waterPipeMap: string = require('../../assets/images/waterPipeMap.png')

    // data
    data: WaterPipeMonitorData = {
        pageName: 'waterPipeMonitor',
        tableHeader: [
            { headerRange: '分析' }
        ],
        tableBody: [
            { range: '表征泄露的异常声波' },
            { range: '表征气囊的异常声波' },
            { range: '智能球追踪' },
            { range: '智能球使用适用性' },
            { range: '智能球技术参数' },
            { range: '智能球技术优势' },
            { range: '具有高风险的主输水管及互联互通管' }
        ],
        disorderTableData: [
            { key: 0, name: '内核外径', properties: ['80cm',  '135cm',  '180cm',  '222cm'] },
            { key: 1, name: '使用管径范围', properties: ['100mm', '125mm', '203mm', '254mm及以上']},
            { key: 2, name: '电源',  properties: ['一次锂电池', '充电锂电池']},
            { key: 3, name: '最长运行时间', properties: ['29.5小时', '55小时', '115小时', '115小时'] }
        ],
        runEnvirData: [
            { key: 0, name: '最大压力', properties: ['138bar（2000psi0）'] },
            { key: 1, name: '温度范围', properties: ['-10℃ or 70℃（-14℃ or 160℃）'] },
            { key: 2, name: '适用对象', properties: ['原油·合成原油·成品油·天然气'] }
        ],
        testAbilityData: [
            { key: 0, name: '测量精度', properties: ['能定位最小漏点0.1每分钟（0.03加仑每分钟）'] },
            { key: 1, name: '可持续运行时间', properties: ['长达115小时'] }
        ]
    }
    
}
