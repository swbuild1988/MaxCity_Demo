import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { GirderBridgeData } from '@/types/views/girderBridge.interface'
import info from '@/components/infoBox/infoBox.vue'
import MultiLine from '@/components/Charts/MultiLine.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import BasicArea from '@/components/Charts/BasicArea.vue'
import MultiLineData from '@/types/components/MultiLine.interface.ts'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import BasicAreaData from '@/types/components/BasicArea.interface.ts'
import Axios from 'axios'

@Component({
    components: { info, MultiLine, MultiBar, BasicArea }
})
export default class girderBridge extends Vue {

    bridgeWrapBackground: string = require('../../assets/images/bridge-background.png')
    bridgeAnalyseBackground: string = require('../../assets/images/dialog-box.png')
    
    bridgeTypeBackground = require('../../assets/images/bridge-frame.png')
    bridgePic = require('../../assets/images/griderBridge.png')

    bridgeAnalyse: string[] = [
        "梁体下挠",
        "梁体开裂",
        "独立墩桥梁常见问题",
        "曲线梁桥病害",
        "支座病害"
    ]

    // data
    data: GirderBridgeData = {
        pageName: 'girderBridge'
    }

    tempAndWind: MultiLineData = {
        title: '温度/力度（M）',
        xData: [],
        legendData: [],
        series: [],
        lineColors: ['#c45df1', '#1095da'],
        option: {
            title: {
                text: '',
                padding: 15
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
    multibar: MultiBarData = {
        title: '扰度（N）',
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
    acceleration: BasicAreaData = {
        title: '加速度（m/s）',
        xData: [],
        series: [],
        rangeColors: [ '#0173a4', '#ffffff'],
        lineColor: ['#0173a4'],
        yTextColor: ''
    } 

    created() {
        //
    }
  
    activated() {
        //
    }

    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        // 温度/力度
        Axios.get("http://localhost:8080/data/tempAndWind.json").then(res => {
            this.tempAndWind.legendData = [],
            this.tempAndWind.series = [],
            this.tempAndWind.xData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.tempAndWind.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'line',
                    data: []
                }
                this.tempAndWind.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.tempAndWind.xData.push(element.key)
                element.val.map((item: any) => {
                    this.tempAndWind.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                    
                })
            })
        })
        // 扰度
        Axios.get("http://localhost:8080/data/strains.json").then(res => {
            this.multibar.series = [],
            this.multibar.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.multibar.xData.push(element.key)
                this.multibar.series.push(element.val)
            })
        })
        // 加速度
        Axios.get("http://localhost:8080/data/accelerationData.json").then(res => {
            this.acceleration.series = [],
            this.acceleration.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.acceleration.xData.push(element.key)
                this.acceleration.series.push(element.val)
            })
        })
    }
    
}
