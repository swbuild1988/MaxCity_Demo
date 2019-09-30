import { Component, Vue, Watch } from "vue-property-decorator"
import { TopPageData } from '@/types/views/topPage.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {

    dataPageWrapBackground: string = require('../../assets/images/top.png');
    title: string = 'XX市城市生命线安全检测';
    menuItem: any[] = [
        { 
            menuName: '前端感知系统', 
            menuPath: '',
            secondMenu: [
                { secondMenuName: '桥梁安全检测', secondMenuPath: '/bridgeMian' },
                { secondMenuName: '供水管监测', secondMenuPath: '/feedPipeMonitor' },
                { secondMenuName: '中水管监测', secondMenuPath: '/waterPipeMonitor' },
                { secondMenuName: '热力管监测', secondMenuPath: '/thermalTubeMonitor' },
                { secondMenuName: '燃气管监测', secondMenuPath: '/gasPipeMonitor' },
                { secondMenuName: '排水管监测', secondMenuPath: '/drainPipeMonitor' }
            ] 
        },
        {
            menuName: '网络传输系统', 
            menuPath: ''
        },
        {
            menuName: '数据工程建设', 
            menuPath: ''
        },
        {
            menuName: '应用系统设计', 
            menuPath: ''
        },
        {
            menuName: '运维管理系统', 
            menuPath: '',
            secondMenu: [
                { secondMenuName: '设备资产管理', secondMenuPath: '/equipAssetManage' },
                { secondMenuName: '巡视可视化', secondMenuPath: '' },
                { secondMenuName: '维护维修', secondMenuPath: '' },
                { secondMenuName: '风险热力图', secondMenuPath: '/thermodynamicChart' },
                { secondMenuName: '检测报警', secondMenuPath: '/monitorAlarm' }
            ]
        },
        {
            menuName: '基础支撑系统', 
            menuPath: ''
        }
    ];
    setupImg: string = require('../../assets/images/set-up.png');
    nextPageImg: string = require('../../assets/images/next-page.png');
    currentIndex: number = 0
    currentLevel: number = 0
    secondMunuCurrent: number = 0
    secondMenuLevel: number = 0

    // data
    data: TopPageData = {
        pageName: 'topPage'
    }
    $router: any;
    choosedSecondMenu(path: string) {
        this.$router.push(path)
    }
    
}
