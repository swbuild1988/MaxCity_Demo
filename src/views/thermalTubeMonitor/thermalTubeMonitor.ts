import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ThermalTubeMonitorData } from '@/types/views/thermalTubeMonitor.interface'
import tableList from '@/components/tableList/tableList.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import MultiBarData from '@/types/components/MultiBar.interface'
import HorizontalBar from '@/components/Charts/HorizontalBar.vue'
import HorizontalBarData from '@/types/components/HorizontalBar.interface'
import Axios from 'axios'

@Component({
    components: { tableList, MultiBar, HorizontalBar }
})
export default class About extends Vue {

    thermalTubeTitleBack: string = require('../../assets/images/feedPipeTitle.png')
    thermalTubeTitle: string = '监测范围选择依据'
    thermalTubeDataBack: string = require('../../assets/images/feedPipeDataBack.png')
    detectionContnet: string = '检测内容'
    equipmentOrganizeTitle: string = '设备布防'
    equipmentStatisticsTitle: string = '设备统计'
    mapBack: string = require('../../assets/images/mapBackground.png')
    thermalTubeMap: string = require('../../assets/images/thermalMap.png')

    // data
    data: ThermalTubeMonitorData = {
        pageName: 'thermalTubeMonitor',
        tableHeader: [
            { headerRange: '区域' }
        ],
        tableBody: [
            { range: '具有高泄露风险的区域' },
            { range: '人口密集区域的地下网管' },
            { range: '敏感区域周围的地下网管' },
            { range: '面积威胁较大的区域的网管' },
            { range: '智能球技术参数' },
            { range: '智能球技术优势' },
            { range: '具有高风险的主输水管及互联互通管' }
        ],
        detectionContnetHeader: [
            { headerRange: '内容及其功能' }
        ],
        detectionContnetBody: [
            { range: '蒸汽介质的热力管道' },
            { range: '热水介质的热力管网' }
        ]
    }

    equipStatistic: MultiBarData = {
        title: '',
        xData: [],
        series: [],
        myChart: {},
        barColors: ['#2bfaff', '#238ede'],
        option: {
            title: {
                text: '',
                padding: 15
            },
            grid: {
                top: '6%'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                saveAsImage: {}
                }
            },
            dataZoom: {
                type: 'inside'
            }
        }
    }
    equipDefence: HorizontalBarData = {
        title: '安装点位',
        yData: [],
        legendData: [],
        series: []
    }

    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        // 设备统计
        Axios.get("http://localhost:8080/data/equipStatistic.json").then(res => {
            this.equipStatistic.series = []
            this.equipStatistic.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.equipStatistic.xData.push(this.formatter(element.key))
                this.equipStatistic.series.push(element.val)
            })
        })
        Axios.get("http://localhost:8080/data/equipDefence.json").then(res => {
            this.equipDefence.series = []
            this.equipDefence.yData = []
            this.equipDefence.legendData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.equipDefence.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'bar',
                    data: []
                }
                this.equipDefence.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.equipDefence.yData.push(element.key)
                element.val.map((item: any) => {
                    this.equipDefence.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                })
            })
        })
    }

    formatter(val: string) {
        let strs = val.split(''); // 字符串数组  
        let str = ''  
        for (let i = 0, s; s = strs[i++];) { // 遍历字符串数组  
            str += s;  
            if (!(i % 4)) {
                str += '\n';
            }   
        }  
        return str 
    }
    
}
