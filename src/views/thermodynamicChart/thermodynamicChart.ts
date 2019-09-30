import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ThermodynamicChartData } from '@/types/views/thermodynamicChart.interface'
import thermodynamicChart from '@/components/Charts/thermodynamic.vue'
import Axios from 'axios'

@Component({
    components: { thermodynamicChart }
})
export default class About extends Vue {

    equipAssetWrapBackgroundW: string = require('../../assets/images/big-map-back-w.png')
    equipAssetWrapBackgroundN: string = require('../../assets/images/big-map-back-n.png')

    // data
    data: ThermodynamicChartData = {
        pageName: 'thermodynamicChart',
        imgSrc: require('../../assets/images/thermodynamicBack.png')
    }

    points: any[] = []

    mounted() {
        this.getData()
    }

    getData() {
        Axios.get("http://localhost:8080/data/anhui-tracks.json").then((res: any) => {
            let data  = res.data
            this.points = [].concat.apply([], data.map( (track: any) => {
                return track.map( (seg: any) => {
                    return seg.coord.concat([1]);
                } )
            } ))
            // this.points = [].concat.apply([], data.map(function(track: any) {
            //     return track.map(function(seg: any) {
            //         return seg.coord.concat([1]);
            //     });
            // }));
        });
    }
    
}
