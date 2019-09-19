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
    // data
    data: AcceleraSensorData = {
        pageName: 'acceleraSensor'
    }

    strainSensorInfo = [
        { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '16m/s²' },
        { src : require('../../assets/images/accele-icon.png'), describe : '加速度' , value : '20m/s²' }
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
