import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { HumiditySensorData } from '@/types/views/humiditySensor.interface'
import sensorData from '@/components/sensorData/sensorData.vue'

@Component({
    components: { sensorData }
})
export default class About extends Vue {

    humidityWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')

    // data
    data: HumiditySensorData = {
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
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '18%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '20%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '19%RH' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '19%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '22%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '17%RH' }
            ],
            keyID: 1
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '18%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '21%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '22%RH' }
            ],
            keyID: 2
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '17%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '23%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '20%RH' }
            ],
            keyID: 3
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '25%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '21%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '21%RH' }
            ],
            keyID: 4
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '25%RH' },
                { src : require('../../assets/images/equip-failure.png'), describe : '湿度传感器' , value : '25%RH' },
                { src : require('../../assets/images/accele-icon.png'), describe : '湿度传感器' , value : '23%RH' }
            ],
            keyID: 5
        },
    ]

    showAsset(index: number) {
        this.data.current = index
        this.data.isShow = !this.data.isShow
        let dom = (document.getElementsByClassName('mark-point')[index] as HTMLDivElement)
        this.assetTopLen = dom.offsetTop - 130 + 'px'
        this.assetLeftLen = dom.offsetLeft - 55 + 'px'
    }

    toBirdge() {
        this.$router.push('/equipAssetManage/humiditySensorBridge')
    }
    
}
