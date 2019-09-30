import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { VehicleLoadSensorBridgeData, AssetManageData } from '@/types/views/vehicleLoadSensorBridge.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import Axios from 'axios'

@Component({
    components: { assetManage }
})
export default class About extends Vue {
    
    vehicleLoadBridgeWrapBackMap: string = require('../../assets/images/deflectionSensor.png')

    // data
    data: VehicleLoadSensorBridgeData = {
        toPointData: [
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '18.5vw',
                TopLen: '5vh',
                status: 0
            },
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '70vw',
                TopLen: '21vh',
                status: 0
            },
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '57.5vw',
                TopLen: '16vh',
                status: 0
            }
        ],
        current: -1
    }

    assetManage: AssetManageData = {
        series: [],
        xData: [],
        isShow: false,
        title: '车辆荷载kn/㎡'
    }

    assetLeftLen: string = ''
    assetTopLen: string = ''

    mounted() {
        this.getChartData()
    }

    getChartData() {
        Axios.get("http://localhost:8080/data/vehicleLoadSensor.json").then(res => {
            this.assetManage.series = []
            this.assetManage.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.assetManage.xData.push(this.formatter(element.key, 4))
                this.assetManage.series.push(element.val)
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

    showAsset(index: number) {
        this.data.current = index
        this.assetManage.isShow = !this.assetManage.isShow
        // 视窗高度 方便vh vw 与 px的换算
        let clientWidth = document.documentElement.clientWidth
        let clientHeight = document.documentElement.clientHeight
        let dom = (document.getElementsByClassName('mark-point')[index] as HTMLDivElement)
        // 控制左右
        if (dom.offsetLeft <= clientWidth / 2) {
            // 左半部分，往右显示
            if (dom.offsetTop <= clientHeight / 2) {
                // 上半部分，往下显示
                this.assetLeftLen = Number(dom.offsetLeft + 25) + 'px'
                if ( Number(dom.offsetTop + 25) >= clientHeight / 2) {
                    this.assetTopLen = clientHeight / 2 + 'px'
                } else {
                    this.assetTopLen = Number(dom.offsetTop + 25) + 'px'
                }

            } else {
                // 下半部分，往上显示
                this.assetLeftLen = Number(dom.offsetLeft + 25) + 'px'
                this.assetTopLen = Number(dom.offsetTop - 340) + 'px'
            }

        } else {
            // 右半部分，往左显示
            if ( dom.offsetTop <= clientHeight / 2 ) {
                // 上半部分，往下显示
                this.assetLeftLen = Number(dom.offsetLeft - 580) + 'px'
                if (Number(dom.offsetTop + 25) >= clientHeight / 2) {
                    this.assetTopLen = clientHeight / 2 + 'px'
                } else {
                    this.assetTopLen = Number(dom.offsetTop + 25) + 'px'
                }
            } else {
                // 下半部分，往上显示
                this.assetLeftLen = Number(dom.offsetLeft - 580) + 'px'
                this.assetTopLen = Number(dom.offsetTop - 340) + 'px'
            }
        }
    }
    
}
