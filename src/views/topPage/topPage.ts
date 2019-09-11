import { Component, Vue } from "vue-property-decorator"
import { TopPageData } from '@/types/views/topPage.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {

    dataPageWrapBackground: string = require('../../assets/images/top.png');
    title: string = '合肥市城市生命线安全检测';
    menuItem: any[] = [
        { menuName: '桥梁安全检测', menuPath: '/bridgeMian' },
        { menuName: '供水管监测', menuPath: '/feedPipeMonitor' },
        { menuName: '中水管监测', menuPath: '/waterPipeMonitor' },
        { menuName: '热力管监测', menuPath: '/thermalTubeMonitor' },
        { menuName: '燃气管监测', menuPath: '/gasPipeMonitor' },
        { menuName: '排水管监测', menuPath: '/drainPipeMonitor' }
    ];
    setupImg: string = require('../../assets/images/set-up.png');
    nextPageImg: string = require('../../assets/images/next-page.png');
    current: number = 0
    // data
    data: TopPageData = {
        pageName: 'topPage'
    }
    $router: any;

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
    //选中的菜单
    choosedMenu(index: number, path: string){
        this.current = index
        this.$router.push(path)
    }
    
}
