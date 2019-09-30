import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { AnemometerData } from '@/types/views/anemometer.interface'
import sensorData from '@/components/sensorData/sensorData.vue'


@Component({
    components: { sensorData }
})
export default class About extends Vue {

    anemometerWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')

    // data
    data: AnemometerData = {
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
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '15km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '26km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '22km/h' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '18km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '22km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '26km/h' }
            ],
            keyID: 1
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '50km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '48km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '52km/h' }
            ],
            keyID: 2
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '45km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '48km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '52km/h' }
            ],
            keyID: 3
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '42km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '39km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '40km/h' }
            ],
            keyID: 4
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '35km/h' },
                { src : require('../../assets/images/equip-failure.png'), describe : '风速仪' , value : '37km/h' },
                { src : require('../../assets/images/accele-icon.png'), describe : '风速仪' , value : '32km/h' }
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
        this.$router.push('/equipAssetManage/anemometerBridge')
    }
    
}
