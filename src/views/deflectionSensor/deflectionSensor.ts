import { Component, Vue } from "vue-property-decorator"
import { DeflectionSensorData } from '@/types/views/deflectionSensor.interface'
import sensorData from '@/components/sensorData/sensorData.vue'

@Component({
    components: { sensorData }
})
export default class About extends Vue {

    deflectionWrapBackMap: string = require('../../assets/images/acceleraSensorBG.png')

    // data
    data: DeflectionSensorData = {
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

    strainSensorInfoData = [
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '挠度' , value : '30mm' },
                { src : require('../../assets/images/accele-icon.png'), describe : '挠度' , value : '32mm' }
            ],
            keyID: 0
        },
        {
            strainSensorInfo: [
                { src : require('../../assets/images/accele-icon.png'), describe : '挠度' , value : '45mm' },
                { src : require('../../assets/images/accele-icon.png'), describe : '挠度' , value : '41mm' }
            ],
            keyID: 1
        }
    ]

    assetLeftLen: string = '0px'
    assetTopLen: string = '0px'
    

    showAsset(index: number) {
        this.data.current = index
        this.data.isShow = !this.data.isShow
        let dom = (document.getElementsByClassName('mark-point')[index] as HTMLDivElement)
        this.assetTopLen = dom.offsetTop - 101 + 'px'
        this.assetLeftLen = dom.offsetLeft - 55 + 'px'
    }

    toBirdge() {
        this.$router.push('/equipAssetManage/deflectionSensorBridge')
    }
    
}
