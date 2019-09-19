<template>
    <div class="leftMenu-wrap" :style="{background: 'url('+ data.leftMenuBack +') 100% 100% no-repeat', backgroundSize: '100% 100%'}">
        <Menu :open-names="['1']" accordion>
                <Submenu v-for="(item, index) in data.leftMenu" :key="index" :name=item.level>
                    <template slot="title">
                        {{item.firstMenu}}
                        <!-- {{item.level}} -->
                    </template>
                    <Submenu v-for="(ele, idx) in item.secondMenu" :key="idx" :name="item.level+'-'+(idx+1)">
                        <template slot="title">
                            {{ele.title}}
                            <!-- {{item.level+'-'+(idx+1)}} -->
                        </template>
                        <MenuItem 
                            v-show="ele.thirdMenu" 
                            v-for="(temp, orderIndex) in ele.thirdMenu" 
                            :key="orderIndex" 
                            @click.native="goToModule(temp.path)"
                            :name="item.level+'-'+ele.level+'-'+orderIndex">
                            {{ temp.title }}
                        </MenuItem>
                    </Submenu>
                </Submenu>
            </Menu>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { LeftMenuData } from '@/types/components/leftMenu.interface'
    // import {  } from "@/components" // 组件

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
                    level: 1,
                    secondMenu: [
                        { 
                            title: '桥梁', 
                            level: 2, 
                            thirdMenu: [
                                { title: '应变传感器', level: 3, path: '/equipAssetManage/starinSensor' },
                                { title: '加速度传感器', level: 3, path: '/equipAssetManage/acceleraSensor' },
                                { title: '挠度传感器', level: 3, path: '/equipAssetManage/deflectionSensor' },
                                { title: '温度传感器', level: 3, path: '/equipAssetManage/temperatureSensor' },
                                { title: '湿度传感器', level: 3, path: '/equipAssetManage/humiditySensor' },
                                { title: '车辆荷载', level: 3, path: '/equipAssetManage/vehicleLoadSensor' },
                                { title: '风速仪', level: 3, path: '/equipAssetManage/anemometer' }
                            ] 
                        },
                        { 
                            title: '燃气', 
                            level: 2,
                            thirdMenu: [
                                { title: '甲烷监测仪', level: 3 },
                                { title: '硫化氢监测仪', level: 3, path: '/equipAssetManage/hydrogenSulfideMonitor' }
                            ] 
                        },
                        { 
                            title: '供水', 
                            level: 2,
                            thirdMenu: [
                                { title: '压力计', level: 3 },
                                { title: '流量计', level: 3, path: '/equipAssetManage/waterSupply' }
                            ] 
                        },
                        { title: '热力', level: 2 },
                        { title: '排水', level: 2 },
                        { title: '中水', level: 2 }
                    ] 
                },
            ]
        }

        goToModule(path: string){
            this.$router.push(path)
        }
    }
</script>

<style lang="less">

    .leftMenu-wrap {
        width: 10vw;
        max-height: 100%;
        .ivu-menu-light{
            background: #9BA7B5;
            width: auto !important;
            .ivu-menu-submenu-title{
                color: @asset-manage-main-color;

            }
            .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),.ivu-menu-item-active.ivu-menu-item-selected {
                color: #00d8ff !important;
                background: #586D8A !important;
            }
        }
    }
</style>

