import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { AcceleraSensorData, assetManageData } from '@/types/views/acceleraSensor.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import sensorData from '@/components/sensorData/sensorData.vue'
import Axios from 'axios'

@Component({
    components: { assetManage, sensorData }
})
export default class About extends Vue {

    acceleraSensorWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')
    // data
    data: AcceleraSensorData = {
        toPointData: [
            { 
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '24.5vw',
                TopLen: '9.5vh',
                status: 1 
            },
            {
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '23.5vw',
                TopLen: '24vh',
                status: 1
            },
            { 
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '45.5vw',
                TopLen: '18.5vh',
                status: 1 
            },
            { 
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '25.5vw',
                TopLen: '49.5vh',
                status: 1 
            },
            { 
                picUrl: require('../../assets/images/normal-icon.png'),
                leftLen: '39.5vw',
                TopLen: '59.5vh',
                status: 1 
            },
            { 
                picUrl: require('../../assets/images/unnormal-icon.png'),
                leftLen: '58.5vw',
                TopLen: '42vh',
                status: 0
            }
        ],
        unnormalNum: 0,
        normalNum: 0,
        current: -1,
        isShow: false
    }

    assetLeftLen: string = '0vw'
    assetTopLen: string = '0vh'

    strainSensorInfoData = [
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
            ],
            keyID: 1
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
            ],
            keyID: 2
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
            ],
            keyID: 3
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
            ],
            keyID: 4
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
                { src : require('../../assets/images/equip-failure.png'), describe : '加速度' , value : '200m/s²' }
            ],
            keyID: 5
        },
    ]
    
    assetManage: assetManageData = {
        series: [],
        xData: []
    }

    mounted() {
        this.getChartData()
        this.getStatistics()
    }

    getChartData(){
        Axios.get("http://localhost:8080/data/acceleraSensor.json").then(res => {
            this.assetManage.series = [],
            this.assetManage.xData = []
            let{ data } = res
            data.result.forEach((element: any) => {
                this.assetManage.xData.push(this.formatter(element.key, 4))
                this.assetManage.series.push(element.val)
            })
        })
    }

    formatter(val: string, len: number) {
        let strs = val.split(''); //字符串数组  
        let str = ''  
        for (let i = 0, s; s = strs[i++];) { //遍历字符串数组  
            str += s;  
            if (!(i % len)) str += '\n';  
        }  
        return str 
    }

    getStatistics(){
        this.data.toPointData.forEach(item=>{
            if(item.status==0){
                this.data.unnormalNum++
            }else if(item.status==1){
                this.data.normalNum++
            }
        })
    }

    showAsset(index: number){
        this.data.current = index
        this.data.isShow = !this.data.isShow
        let dom = <HTMLDivElement> document.getElementsByClassName('mark-point')[index]
        this.assetTopLen = dom.offsetTop-101 + 'px'
        this.assetLeftLen = dom.offsetLeft-55 + 'px'
    }

    toBirdgeAccele(){
        this.$router.push('/equipAssetManage/bridgeAccelera')
    }
    
}
