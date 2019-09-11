import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { CableStayedBridgeData } from '@/types/views/cableStayedBridge.interface'
import info from '@/components/infoBox/infoBox.vue'
import MultiLine from '@/components/Charts/MultiLine.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import MultiLineData from '@/types/components/MultiLine.interface.ts'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import Axios from 'axios'

@Component({
    components: {info, MultiBar, MultiLine}
})
export default class cableStayedBridge extends Vue {
    
    bridgeWrapBackground: string = require('../../assets/images/bridge-background.png')
    bridgeAnalyseBackground: string = require('../../assets/images/dialog-box.png')
    //to prop
    bridgeTypeBackground = require('../../assets/images/bridge-frame.png')
    bridgePic = require('../../assets/images/cableStayedBridge.png')

    bridgeAnalyse: string[] = [
        "斜拉索锈蚀断裂、拉索断丝、索力退化等",
        "主塔变形、变位",
        "主梁病害",
        "伸缩缝病害",
        "斜拉桥支座的病害",
        "桥面铺装病害"
    ]
    

    // data
    data: CableStayedBridgeData = {
        pageName: 'cableStayedBridge'
    }

    tempAndWind: MultiLineData = {
        title: '温度/索力（°C/M）',
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
        title: '混泥土应变数（个）',
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
    observeParams: MultiLineData = {
        title: '传感器类型',
        xData: [],
        legendData: [],
        series: [],
        lineColors: ['#3da6f2', '#df6e77', '#8b6ac9', '#ffa358'],
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
            }
        }
    }

    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        Axios.get("http://localhost:8080/data/tempAndPower.json").then(res => {
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
        // 应变
        Axios.get("http://localhost:8080/data/concreteStains.json").then(res => {
            this.multibar.series = [],
            this.multibar.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.multibar.xData.push(element.key)
                this.multibar.series.push(element.val)
            })
        })
        // 监测参数
        Axios.get("http://localhost:8080/data/sensorType.json").then(res => {
            this.observeParams.legendData = [],
            this.observeParams.series = [],
            this.observeParams.xData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.observeParams.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'line',
                    data: []
                }
                this.observeParams.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.observeParams.xData.push(element.key)
                element.val.map((item: any) => {
                    this.observeParams.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                    
                })
            })
        })
    }
    
}
