import { Component, Vue, Provide } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { MainData } from '@/types/views/main.interface'
import topPage from '../topPage/topPage.vue'
// import {  } from "@/components" // 组件

@Component({
    components: {
        topPage
    }
})
export default class About extends Vue {
    // Getter
    // @Getter author
    
    // Action
    // @Action GET_DATA_ASYN

    mainWrapBackground: string = require('../../assets/images/backgroound.png')

    // data
    data: MainData = {
        pageName: 'main'
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
