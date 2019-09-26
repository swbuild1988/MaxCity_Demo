import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { WaterSupplyData, assetManageData } from '@/types/views/waterSupply.interface'
import assetManage from '@/components/assetManage/assetManage.vue'
import Axios from 'axios'

@Component({
    components: { assetManage }
})
export default class About extends Vue {

    waterSupplyWrapBackMap: string = require('../../assets/images/big-map.png')

    // data
    data: WaterSupplyData = {
        pageName: 'waterSupply'
    } 
    assetManage: assetManageData = {
        series: [],
        xData: [],
        isShow: true,
        title: '流量计m/s'
    }

    mounted() {
        this.getChartData()
    }

    getChartData(){
        Axios.get("http://localhost:8080/data/waterSupply.json").then(res => {
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
