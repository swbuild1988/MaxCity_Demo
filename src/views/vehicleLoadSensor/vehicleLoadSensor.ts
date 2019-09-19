import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { VehicleLoadSensorData, assetManageData } from '@/types/views/vehicleLoadSensor.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import sensorData from '@/components/sensorData/sensorData.vue'
import Axios from 'axios'

@Component({
    components: { assetManage, sensorData }
})
export default class About extends Vue {
    // data
    data: VehicleLoadSensorData = {
        pageName: 'vehicleLoadSensor'
    }

    strainSensorInfo = [
        { src : require('../../assets/images/temperatrue-icon.png'), describe : '车辆荷载' , value : '32KN/m²' },
        { src : require('../../assets/images/temperatrue-icon.png'), describe : '车辆荷载' , value : '52KN/m²' }
    ]
    
    assetManage: assetManageData = {
        series: [],
        xData: []
    }

    mounted() {
        this.getChartData()
    }

    getChartData(){
        Axios.get("http://localhost:8080/data/equipName.json").then(res => {
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
    
}
