import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { TemperatureSensorData } from '@/types/views/temperatureSensor.interface'
import sensorData from '@/components/sensorData/sensorData.vue'

@Component({
    components: { sensorData }
})
export default class About extends Vue {

    temperatureSensorWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')

    // data
    data: TemperatureSensorData = {
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
        current: -1,
        isShow: false
    }
    
    assetLeftLen: string = '0px'
    assetTopLen: string = '0px'

    strainSensorInfoData = [
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '18℃' },
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '20℃' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '19℃' },
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '22℃' }
            ],
            keyID: 1
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '18℃' },
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '21℃' }
            ],
            keyID: 2
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '17℃' },
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '23℃' }
            ],
            keyID: 3
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '25℃' },
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '21℃' }
            ],
            keyID: 4
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '温度传感器' , value : '25℃' },
                { src : require('../../assets/images/equip-failure.png'), describe : '温度传感器' , value : '25℃' }
            ],
            keyID: 5
        },
    ]

    showAsset(index: number) {
        this.data.current = index
        this.data.isShow = !this.data.isShow
        let dom = (document.getElementsByClassName('mark-point')[index] as HTMLDivElement)
        this.assetTopLen = dom.offsetTop - 101 + 'px'
        this.assetLeftLen = dom.offsetLeft - 55 + 'px'
    }

    toBirdge() {
        this.$router.push('/equipAssetManage/temperatureSensorBridge')
    }
    
}