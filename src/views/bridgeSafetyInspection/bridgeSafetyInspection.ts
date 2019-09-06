import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { BridgeSafetyInspectionData } from '@/types/views/bridgeSafetyInspection.interface'
import bridge from '@/components/bridge/bridge.vue'
import info from '@/components/infoBox/infoBox.vue'
import MultiLine from '@/components/MultiLine/MultiLine.vue'

@Component({
    components: {bridge, info, MultiLine}
})
export default class About extends Vue {
    
    bridgeWrapBackground: string = require('../../assets/images/bridge-background.png')
    bridgeAnalyseBackground: string = require('../../assets/images/dialog-box.png')
    //to prop
    bridgeTypeBackground = require('../../assets/images/bridge-frame.png')
    bridgePic = require('../../assets/images/bradge.png')
    bridgeType = '拱桥'

    bridgeAnalyse: string[] = [
        "吊杆锈蚀断丝",
        "主梁的变形",
        "主拱圆变形",
        "下部结构沉降",
        "伸缩缝病害",
        "支座病害",
        "桥面铺装病害"
    ]
    

    // data
    data: BridgeSafetyInspectionData = {
        pageName: 'bridgeSafetyInspection'
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
