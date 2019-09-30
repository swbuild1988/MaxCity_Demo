import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { AnemometerBridgeData, AssetManageData } from '@/types/views/anemometerBridge.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import Axios from 'axios'

@Component({
    components: { assetManage }
})
export default class About extends Vue {
    
    anemometerBridgeWrapBackMap: string = require('../../assets/images/temperaturWrap.png')

    // data
    data: AnemometerBridgeData = {
        toPointData: [
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '13vw',
                TopLen: '9vh',
                status: 0
            },
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '62.5vw',
                TopLen: '49vh',
                status: 0
            },
            {
                picUrl: require('../../assets/images/markpoint-blue-icon.png'),
                leftLen: '35vw',
                TopLen: '61vh',
                status: 0
            }
        ],
        current: -1
    }

    assetLeftLen: string = '0px'
    assetTopLen: string = '0px'

    assetManage: AssetManageData = {
        series: [],
        xData: [],
        isShow: false,
        title: '风速仪km/h'
    }

    mounted() {
        this.getChartData()
    }

    getChartData() {
        Axios.get("http://localhost:8080/data/anemometer.json").then(res => {
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
            if (dom.offsetTop <= clientHeight / 2 ) {
                // 上半部分，往下显示
                this.assetLeftLen = Number(dom.offsetLeft + 25) + 'px'
                if (Number(dom.offsetTop + 25) >= clientHeight / 2) {
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
            if (dom.offsetTop <= clientHeight / 2) {
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
