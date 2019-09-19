import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ThermodynamicChartData } from '@/types/views/thermodynamicChart.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {

    equipAssetWrapBackgroundW: string = require('../../assets/images/big-map-back-w.png')
    equipAssetWrapBackgroundN: string = require('../../assets/images/big-map-back-n.png')

    // data
    data: ThermodynamicChartData = {
        pageName: 'thermodynamicChart',
        imgSrc: require('../../assets/images/thermodynamicBack.png')
    }

    created() {
        //
    }
  
    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        //
    }
    
}
