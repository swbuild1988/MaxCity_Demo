import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { GasPipeMonitorData } from '@/types/views/gasPipeMonitor.interface'
import tableList from '@/components/tableList/tableList.vue'
import MultiLine from '@/components/Charts/MultiLine.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import MultiLineData from '@/types/components/MultiLine.interface'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import LabelRotationBar from '@/components/Charts/LabelRotationBar.vue'
import LabelRotationBarData from '@/types/components/LabelRotationBar.interface.ts'
import Axios from 'axios'

@Component({
    components: { tableList, MultiLine, MultiBar, LabelRotationBar }
})
export default class About extends Vue {

    gasPipeTitleBack: string = require('../../assets/images/feedPipeTitle.png')
    gasPipeTitle: string = '监测范围选择原则'
    thermalTubeDataBack: string = require('../../assets/images/feedPipeDataBack.png')
    scopeConstructTitle: string = '建设范围（公里/个）'
    sewagePipelineTitle: string = '污水管线'
    monitorPointTitle: string = '监测点数量统计（个）'

    // data
    data: GasPipeMonitorData = {
        pageName: 'gasPipeMonitor',
        tableHeader: [
            { headerRange: '区域' }
        ],
        tableBody: [
            { range: '具有高泄露风险的区域' },
            { range: '人口密集区域的地下网管' },
            { range: '敏感区域周围的地下网管' },
            { range: '面临威胁较大区域的网管' },
            { range: '泄露发生后危害较大区域网管' },
            { range: '智能球技术优势' },
            { range: '具有高风险的主输水管及互联互通管' }
        ]
    }

    buildRange: MultiBarData = {
        title: '',
        xData: [],
        series: [],
        myChart: {},
        barColors: ['#2bfaff', '#238ede'],
        option: {}
    }
    sewagePipeline: MultiLineData = {
        title: '',
        xData: [],
        legendData: [],
        series: [],
        lineColors: ['#3da6f2', '#df6e77', '#8b6ac9', '#ffa358'],
        option: {}
    }
    observeStation: LabelRotationBarData = {
        title: '',
        legendData: [],
        xData: [],
        series: [],
        barColors: []
    }

    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        Axios.get("http://localhost:8080/data/buildRange.json").then(res => {
            this.buildRange.series = [],
            this.buildRange.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.buildRange.xData.push(this.formatter(element.key))
                this.buildRange.series.push(element.val)
            })
        })
        Axios.get("http://localhost:8080/data/sewagePipeline.json").then(res => {
            this.sewagePipeline.legendData = [],
            this.sewagePipeline.series = [],
            this.sewagePipeline.xData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.sewagePipeline.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'line',
                    data: []
                }
                this.sewagePipeline.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.sewagePipeline.xData.push(this.formatter(element.key))
                element.val.map((item: any) => {
                    this.sewagePipeline.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                    
                })
            })
        })
        Axios.get("http://localhost:8080/data/observeStationCount.json").then(res => {
            this.observeStation.series = [],
            this.observeStation.xData = [],
            this.observeStation.legendData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.observeStation.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'bar',
                    barMaxWidth: '20%',
                    data: []
                }
                this.observeStation.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.observeStation.xData.push(element.key)
                element.val.map((item: any) => {
                    this.observeStation.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                })
            })
        })
    }

    formatter(val: string) {
        let strs = val.split(''); //字符串数组  
        let str = ''  
        for (let i = 0, s; s = strs[i++];) { //遍历字符串数组  
            str += s;  
            if (!(i % 4)) str += '\n';  
        }  
        return str 
    }
    
}
