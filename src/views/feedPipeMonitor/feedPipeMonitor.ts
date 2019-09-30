import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { FeedPipeMonitorData } from '@/types/views/feedPipeMonitor.interface'
import tableList from '@/components/tableList/tableList.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import SimplePie from '@/components/Charts/SimplePie.vue'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import SimplePieData from '@/types/components/SimplePie.interface.ts'
import Axios from 'axios'

@Component({
    components: { tableList, MultiBar, SimplePie }
})
export default class About extends Vue {

    feedPipeTitleBack: string = require('../../assets/images/feedPipeTitle.png')
    feedPipeTitle: string = '供水管网安全检测范围'
    feedPipeDataBack: string = require('../../assets/images/feedPipeDataBack.png')
    echartsWrapBack: string = require('../../assets/images/chartsBg.png')
    mapBack: string = require('../../assets/images/mapBackground.png')
    feedPipeMap: string = require('../../assets/images/feedPipeMap.png')

    // data
    data: FeedPipeMonitorData = {
        pageName: 'feedPipeMonitor',
        tableBody: [
            { range: '合肥市北城区地下管网', pipeLength: '53.35公里' },
            { range: '合肥市一环周边老城区部分管网', pipeLength: '157公里' },
            { range: '省、市政务中心周边的供水管网', pipeLength: '200公里' },
            { range: '肥西县', pipeLength: '125公里' },
            { range: '原水管', pipeLength: '176.2公里' },
            { range: '过河或过桥裸露管道', pipeLength: '1.9公里' },
            { range: '具有高风险的主输水管及互联互通管', pipeLength: '0.65公里' }
        ],
        tableHeader: [
            { headerRange: '范围', headerLength: '管网总长' }
        ]
    }

    
    firstEquipments: MultiBarData = {
        title: '一期设备（个）',
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
    secondEquipments: MultiBarData = {
        title: '二期设备（个）',
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
    sensors: SimplePieData = {
        title: '传感器（个）',
        series: [],
        legendData: []
    }

    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        // 一期设备
        Axios.get("http://localhost:8080/data/firstEquipments.json").then(res => {
            this.firstEquipments.series = []
            this.firstEquipments.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.firstEquipments.xData.push(this.formatter(element.key))
                this.firstEquipments.series.push(element.val)
            })
        })
        // 二期设备
        Axios.get("http://localhost:8080/data/secondEquipments.json").then(res => {
            this.secondEquipments.series = []
            this.secondEquipments.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.secondEquipments.xData.push(element.key)
                this.secondEquipments.series.push(element.val)
            })
        })
        Axios.get("http://localhost:8080/data/sensors.json").then(res => {
            this.sensors.legendData = []
            this.sensors.series = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.sensors.legendData.push(element.key)
                let item = {
                    name: element.key,
                    value: element.val
                }
                this.sensors.series.push(item)
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
