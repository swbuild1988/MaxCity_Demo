import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { BridgeSafetyInspectionData } from '@/types/views/bridgeSafetyInspection.interface'
import MultiLineData from '@/types/components/MultiLine.interface'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import bridge from '@/components/bridge/bridge.vue'
import info from '@/components/infoBox/infoBox.vue'
import MultiLine from '@/components/Charts/MultiLine.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import Axios from 'axios'

@Component({
    components: {bridge, info, MultiLine, MultiBar}
})
export default class About extends Vue {
    
    bridgeWrapBackground: string = require('../../assets/images/bridge-background.png')
    bridgeAnalyseBackground: string = require('../../assets/images/dialog-box.png')
    bridgeTypeBackground = require('../../assets/images/bridge-frame.png')
    bridgePic = require('../../assets/images/bradge.png')
    echartsWrapBack: string = require('../../assets/images/chartsBg.png')

    bridgeAnalyse: string[] = [
        "吊杆锈蚀断丝",
        "主梁的变形",
        "主拱圆变形",
        "下部结构沉降",
        "伸缩缝病害",
        "支座病害",
        "桥面铺装病害"
    ]
    

    // data
    data: BridgeSafetyInspectionData = {
        pageName: 'bridgeSafetyInspection'
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
        title: '应变（M）',
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
        title: '监测参数',
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
        // 应变
        Axios.get("http://localhost:8080/data/strains.json").then(res => {
            this.multibar.series = [],
            this.multibar.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.multibar.xData.push(element.key)
                this.multibar.series.push(element.val)
            })
        })
        // 监测参数
        Axios.get("http://localhost:8080/data/observeParamData.json").then(res => {
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
