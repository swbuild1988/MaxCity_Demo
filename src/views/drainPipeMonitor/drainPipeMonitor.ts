import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { DrainPipeMonitorData } from '@/types/views/drainPipeMonitor.interface'
import tableList from '@/components/tableList/tableList.vue'
import MultiBar from '@/components/Charts/MultiBar.vue'
import MultiBarData from '@/types/components/MultiBar.interface.ts'
import BasicArea from '@/components/Charts/BasicArea.vue'
import BasicAreaData from '@/types/components/BasicArea.interface.ts'
import LabelRotationBar from '@/components/Charts/LabelRotationBar.vue'
import LabelRotationBarData from '@/types/components/LabelRotationBar.interface.ts'
import Axios from 'axios'

@Component({
    components: { tableList, MultiBar, BasicArea, LabelRotationBar }
})
export default class About extends Vue {
    
    drainPipeTitleBack: string = require('../../assets/images/feedPipeTitle.png')
    drainPipeTitle: string = '重点区域列表'
    drainPipeDataBack: string = require('../../assets/images/feedPipeDataBack.png')
    pumpTypeTitle: string = '泵站种类'
    equipemtNameTitle: string = '设备名称'
    equipmentStatisticsTitle: string = '排水管网设备统计（个）'
    drainPipeMap: string = require('../../assets/images/drainPipeMap.png')
    mapBack: string = require('../../assets/images/mapBackground.png')

    data: DrainPipeMonitorData = {
        pageName: 'drainPipeMonitor',
        tableHeader: [
            { headerRange: '所属区', headerLength: '区内重点区域' }
        ],
        tableBody: [
            { range: '庐阳区', pipeLength: '明光路汽车站周边50米' },
            { range: '庐阳区', pipeLength: '和平广场及周边50米' },
            { range: '庐阳区', pipeLength: '安徽省委、省政府周边50米' },
            { range: '蜀山区', pipeLength: '三里庵国购广场及周边50米' },
            { range: '蜀山区', pipeLength: '泄露发生后危害较大区域管网' },
            { range: '包河区', pipeLength: '安徽大剧院周边50米' },
            { range: '包河区', pipeLength: '包公祠周边50米' }
        ]

    }

    pumpStationType: MultiBarData = {
        title: '',
        xData: [],
        series: [],
        myChart: {},
        barColors: ['#2bfaff', '#238ede'],
        option: {}
    }
    equipName: BasicAreaData = {
        title: '',
        xData: [],
        series: [],
        rangeColors: ['#353f72', '#353f72'],
        lineColor: ['#ab90df'],
        yTextColor: '#357594'
    } 
    pumpEquip: LabelRotationBarData = {
        title: '',
        legendData: [],
        xData: [],
        series: [],
        barColors: ['#5f45ff', '#02cdff', '#6a005f']
    }
    
    mounted() {
        this.getChartsData()
    }

    getChartsData() {
        // 泵站种类
        Axios.get("http://localhost:8080/data/pumpStationType.json").then(res => {
            this.pumpStationType.series = []
            this.pumpStationType.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.pumpStationType.xData.push(this.formatter(element.key, 3))
                this.pumpStationType.series.push(element.val)
            })
        })
        Axios.get("http://localhost:8080/data/equipName.json").then(res => {
            this.equipName.series = []
            this.equipName.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.equipName.xData.push(this.formatter(element.key, 4))
                this.equipName.series.push(element.val)
            })
        })
        Axios.get("http://localhost:8080/data/pumpEquip.json").then(res => {
            this.pumpEquip.series = []
            this.pumpEquip.xData = []
            this.pumpEquip.legendData = []
            let{ data } = res
            data.result[0].val.map((type: any) => {
                this.pumpEquip.legendData.push(type.key)
                let value = {
                    name: type.key,
                    type: 'bar',
                    barMaxWidth: '20%',
                    data: []
                }
                this.pumpEquip.series.push(value)
            })
            data.result.forEach((element: any) => {
                this.pumpEquip.xData.push(element.key)
                element.val.map((item: any) => {
                    this.pumpEquip.series.forEach((value: any) => {
                        if (value.name === item.key) {
                            value.data.push(item.val)
                        }
                    })
                })
            })
        })
    }

    formatter(val: string, len: number) {
        let strs = val.split(''); // 字符串数组  
        let str = ''  
        for (let i = 0, s; s = strs[i++];) { // 遍历字符串数组  
            str += s;  
            if (!(i % len)) {
                str += '\n';
            }   
        }  
        return str 
    }
    
}
