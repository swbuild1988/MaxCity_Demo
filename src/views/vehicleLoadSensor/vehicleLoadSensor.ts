import { Component, Vue } from "vue-property-decorator"
import { VehicleLoadSensorData } from '@/types/views/vehicleLoadSensor.interface'
import sensorData from '@/components/sensorData/sensorData.vue'

@Component({
    components: { sensorData }
})
export default class About extends Vue {

    vehicleLoadWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')

    // data
    data: VehicleLoadSensorData = {
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
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '500kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '560kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '550kn/㎡' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '480kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '600kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '560kn/㎡' }
            ],
            keyID: 1
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '580kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '720kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '460kn/㎡' }
            ],
            keyID: 2
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '540kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '560kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '520kn/㎡' }
            ],
            keyID: 3
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '480kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '380kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '620kn/㎡' }
            ],
            keyID: 4
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '500kn/㎡' },
                { src : require('../../assets/images/equip-failure.png'), describe : '车辆荷载' , value : '500kn/㎡' },
                { src : require('../../assets/images/accele-icon.png'), describe : '车辆荷载' , value : '560kn/㎡' }
            ],
            keyID: 5
        },
    ]


    showAsset(index: number) {
        this.data.current = index
        this.data.isShow = !this.data.isShow
        let dom = document.getElementsByClassName('mark-point')[index] as HTMLDivElement
        this.assetTopLen = dom.offsetTop - 131 + 'px'
        this.assetLeftLen = dom.offsetLeft - 55 + 'px'
    }

    toBirdge() {
        this.$router.push('/equipAssetManage/vehicleLoadSensorBridge')
    }

}
