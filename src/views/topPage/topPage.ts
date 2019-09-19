import { Component, Vue } from "vue-property-decorator"
import { TopPageData } from '@/types/views/topPage.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {

    dataPageWrapBackground: string = require('../../assets/images/top.png');
    title: string = 'XX市城市生命线安全检测';
    menuItem: any[] = [
        { 
            level: 1,
            menuName: '前端感知系统', 
            menuPath: '', 
            seccondMenu:[
                { level: 2, secondMenuName: '桥梁安全检测', secondMenuPath: '/bridgeMian' },
                { level: 2, secondMenuName: '供水管监测', secondMenuPath: '/feedPipeMonitor' },
                { level: 2, secondMenuName: '中水管监测', secondMenuPath: '/waterPipeMonitor' },
                { level: 2, secondMenuName: '热力管监测', secondMenuPath: '/thermalTubeMonitor' },
                { level: 2, secondMenuName: '燃气管监测', secondMenuPath: '/gasPipeMonitor' },
                { level: 2, secondMenuName: '排水管监测', secondMenuPath: '/drainPipeMonitor' }
            ] 
        },
        {
            level: 1,
            menuName: '网络传输系统', 
            menuPath: '', 
            seccondMenu:[
                { level: 2, secondMenuName: '桥梁安全检测', secondMenuPath: '/bridgeMian' },
                { level: 2, secondMenuName: '供水管监测', secondMenuPath: '/feedPipeMonitor' }
            ] 
        },
        {
            level: 1,
            menuName: '数据工程建设', 
            menuPath: '', 
        },
        {
            level: 1,
            menuName: '应用系统设计', 
            menuPath: '', 
        },
        {
            level: 1,
            menuName: '运维管理系统', 
            menuPath: '', 
            seccondMenu: [
                { level: 2, secondMenuName: '设备资产管理', secondMenuPath: '/equipAssetManage' },
                { level: 2, secondMenuName: '巡视可视化', secondMenuPath: '' },
                { level: 2, secondMenuName: '维护维修', secondMenuPath: '' },
                { level: 2, secondMenuName: '风险热力图', secondMenuPath: '/thermodynamicChart' },
                { level: 2, secondMenuName: '检测报警', secondMenuPath: '' }
            ]
        },
        {
            level: 1,
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

    //选中的菜单
    choosedMenu(index: number, item: any){
        this.currentIndex = index
        this.currentLevel = item.level
    }
    //划出隐藏二级菜单
    hiddenMenu(index: number){
        let obj =  <HTMLDivElement | HTMLCanvasElement> document.getElementsByClassName('menu-item')[index]
        let childObj = <HTMLUListElement> obj.getElementsByTagName('ul')[0]
        if(obj.className.indexOf('menu-item-activited')>-1){

            childObj.classList.add('hide')
            childObj.classList.remove('open')
        }
    }
    choosedSecondMenu(idx: number, element: any){
        this.secondMunuCurrent = idx
        this.secondMenuLevel = element.level
        this.$router.push(element.secondMenuPath)
    }
    
}
