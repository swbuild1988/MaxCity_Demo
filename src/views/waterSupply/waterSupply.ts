import { Component, Vue } from "vue-property-decorator"
import { WaterSupplyData, AssetManageData } from '@/types/views/waterSupply.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import Axios from 'axios'

@Component({
    components: { assetManage }
})
export default class About extends Vue {

    waterSupplyWrapBackMap: string = require('../../assets/images/big-map.png')

    // data
    data: WaterSupplyData = {
        pageName: 'waterSupply',
        toPointData: [
            {
                picUrl: require('../../assets/images/unnormal-icon.png'),
                leftLen: '14vw',
                TopLen: '31vh',
                status: 0
            },
            {
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '23.5vw',
                TopLen: '20vh',
                status: 1
            },
            {
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '23.8vw',
                TopLen: '39vh',
                status: 1
            },
            {
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '53vw',
                TopLen: '51vh',
                status: 1
            },
            {
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '47.5vw',
                TopLen: '23vh',
                status: 1
            }
        ],
        current: -1
    } 
    assetManage: AssetManageData = {
        series: [],
        xData: [],
        isShow: false,
        title: '流量计m/s'
    }

    assetLeftLen: string = '0px'
    assetTopLen: string = '0px'

    mounted() {
        this.getChartData()
    }

    getChartData() {
        Axios.get("http://localhost:8080/data/waterSupply.json").then(res => {
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
        let strs = val.split('');
        let str = ''  
        for (let i = 0, s; s = strs[i++];) {
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
