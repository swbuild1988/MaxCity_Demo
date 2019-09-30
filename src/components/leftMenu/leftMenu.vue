<template>
    <div class="leftMenu-wrap" :style="{background: 'url('+ data.leftMenuBack +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <!-- <Menu ref="side_menu"  :active-name="data.activeName" :open-names="openNames" accordion  @on-select="handleSelect">
            <template v-for="item in data.leftMenu">
                <Submenu :key="item.menuName" :name="item.menuName">
                    <template slot="title">
                        {{item.firstMenu}}
                    </template>
                    <template v-for="ele in item.secondMenu">
                        <MenuItem v-if="!ele.thirdMenu" :key="ele.menuName" :name="ele.menuName">
                        {{ele.title}}
                        </MenuItem>
                        <Submenu v-else :key="ele.menuName" :name="ele.menuName">
                            <template slot="title">
                                {{ele.title}}
                            </template>
                            <template v-for="(temp, orderIndex) in ele.thirdMenu">
                                <MenuItem :key="ele.menuName+'-'+(orderIndex+1)" @click.native="goToModule(temp.path)" :name="ele.menuName+'-'+(orderIndex+1)">
                                    {{temp.title}}
                                </MenuItem>
                            </template>
                        </Submenu>
                    </template>
                </Submenu>
            </template>    
        </Menu> -->
        <ul class="first-menu">
            <li class="first-menu-li" :id="index" v-for="(item, index) in data.leftMenu" :key="index">
                <a :href="'#'+index">{{item.firstMenu}}</a>
                <span></span>
                <ul class="second-menu">
                    <li class="second-menu-li" :id="index+'-'+idx" v-for="(ele,idx) in item.secondMenu" :key="index+'-'+idx">
                        <a :href="'#'+index+'-'+idx">{{ele.title}}</a>
                        <span class="toggle-icon"></span>
                        <ul class="third-menu" v-if="ele.thirdMenu">
                            <li class="third-menu-li" v-for="(temp, order) in ele.thirdMenu" :class="{'active-menu': data.current===order}" :key="index+'-'+idx+'-'+order" @click="goToModule(temp.path, order)">
                                {{temp.title}}
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { LeftMenuData } from '@/types/components/leftMenu.interface'
    import { Menu, Submenu, MenuItem } from 'iview';

    
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuItem', MenuItem)


    @Component({})
    export default class About extends Vue {
        // prop
        @Prop({
        required: false,
            default: ''
        }) name!: string

        // data
        data: LeftMenuData = {
            componentName: 'leftMenu',
            leftMenuBack: require('../../assets/images/leftMeunBack.png'),
            leftMenu: [
                { 
                    firstMenu: '资产分类', 
                    menuName: 1,
                    secondMenu: [
                        { 
                            title: '桥梁', 
                            menuName: 2,
                            thirdMenu: [
                                { title: '应变传感器', path: '/equipAssetManage/starinSensor' },
                                { title: '加速度传感器', path: '/equipAssetManage/acceleraSensor' },
                                { title: '挠度传感器', path: '/equipAssetManage/deflectionSensor' },
                                { title: '温度传感器', path: '/equipAssetManage/temperatureSensor' },
                                { title: '湿度传感器', path: '/equipAssetManage/humiditySensor' },
                                { title: '车辆荷载', path: '/equipAssetManage/vehicleLoadSensor' },
                                { title: '风速仪', path: '/equipAssetManage/anemometer' }
                            ] 
                        },
                        { 
                            title: '燃气', 
                            menuName: 3,
                            thirdMenu: [
                                { title: '甲烷监测仪', },
                                { title: '硫化氢监测仪', path: '/equipAssetManage/hydrogenSulfideMonitor' }
                            ] 
                        },
                        { 
                            title: '供水', 
                            menuName: 4,
                            thirdMenu: [
                                { title: '压力计' },
                                { title: '流量计', path: '/equipAssetManage/waterSupply' }
                            ] 
                        },
                        { title: '热力', menuName: 5 },
                        { title: '中水', menuName: 7 }
                    ] 
                },
            ],
            current: -1,
        }
        goToModule(path: string, index: number) {
            this.data.current = -1
            this.$router.push(path)
            this.data.current = index
        }

    }
</script>

<style lang="less">
    .leftMenu-wrap{
        width: 8vw;
        max-height: 100%;
        .first-menu{
            color: #2d8cf0;
            li{
                list-style: none;
                line-height: 3.5vmin;
            }
            .first-menu-li .toggle-icon,.second-menu-li .toggle-icon{
                content: '';
                display: inline-block;
                width: 0;
                height: 0;
                border: 0.6vh solid transparent;
                border-top: 0.6vh solid #2d8cf0;
                position: relative;
                top: 0.3vh;
                left: 0.5vh;
            }
            .first-menu-li:target .toggle-icon, .second-menu-li:target .toggle-icon{
                border: 0.6vh solid transparent;
                border-bottom: 0.6vh solid #2d8cf0;
                top: -0.3vh;
            }
            .second-menu-li:target{
                .third-menu{
                    min-height: 6vh;
                    .third-menu-li{
                        height: 3vh !important;
                    }
                }
            }
            .first-menu-li{
                font-size: 1.8vh;
                margin-left: 1vh;
                position: relative;
                .second-menu{
                    .second-menu-li{
                        border-bottom: 0.1vh solid #10E2F1;
                        padding-left: 2vh;
                        margin-left: -0.9vh;
                        position: relative;
                        font-size: 1.7vh;
                    }
                    .third-menu{
                        margin-left: -5vh;
                        padding-left: 3vh;
                        .third-menu-li{
                            height: 0;
                            line-height: 3.5vmin;
                            overflow: hidden;
                            font-size     : 1.6vh;
                            cursor: pointer;
                            padding-left: 3vh;
                        }
                        .active-menu{
                            color: @menu-activited;
                            background: #586D8A;
                            line-height: 3.5vmin;
                        }
                    }
                }
            }
        }
    }
</style>

