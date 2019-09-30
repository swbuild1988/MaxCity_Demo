import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { EquipAssetManageData } from '@/types/views/equipAssetManage.interface'
import leftMenu from '@/components/leftMenu/leftMenu.vue'

@Component({
    components: { leftMenu }
})
export default class About extends Vue {
    
    equipAssetWrapBackgroundW: string = require('../../assets/images/big-map-back-w.png')
    equipAssetWrapBackgroundN: string = require('../../assets/images/big-map-back-n.png')

    data: EquipAssetManageData = {
        pageName: 'equipAssetManage'
    }
    
}
