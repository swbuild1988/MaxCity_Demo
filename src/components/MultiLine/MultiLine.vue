<template>
    <div ref="element" class="MultiLine-wrap" :id="id">
        <!-- {{data.componentName}} -->
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { MultiLineData } from '@/types/components/MultiLine.interface'
    // import {  } from "@/components" // 组件\
    import Axios from 'axios'

    @Component({})
    export default class About extends Vue {
        // prop
        // @Prop({ required: false,default: ''}) name!: string
        @Prop({ required: true,default: '1'}) id!: string
        // // data
        data: MultiLineData = {
            componentName: 'MultiLine',
            xData: [],
            yData: [],
            legendData: [],
            series: [],
            myChart: {},
            option: {
                title: {
                    text: '',
                    padding: 15
                },
                tooltip: {
                    trigger: 'axis'
                },
                toolbox: {
                    show: true,
                    feature: {
                    saveAsImage: {}
                    }
                },
                dataZoom: {
                    type: 'inside'
                }
            }
        }
        mounted() {
            this.drawMultiLine()
            this.fetchData()
        }

        drawMultiLine(){
            this.data.myChart = (this as any).$echarts.init(
                <HTMLDivElement | HTMLCanvasElement>document.getElementById(this.id)
            );
            this.data.option = {
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "5%",
                    top: '10%',
                    containLabel: true
                },
                legend: {
                    data: [],
                    textStyle: { 
                        fontSize: this.getFontSize('3%') ,
                        color: '#fff'
                    },
                    padding: this.getFontSize('6%')
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: [],
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize : this.getFontSize('3%')
                        },                            
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize : this.getFontSize('3%'),
                            top: 10
                        },                            
                    }
                },
                //缩放
                dataZoom: [{
                    type: "inside"
                }]
            },
            // 加载默认参数
            (this as any).data.myChart.setOption(this.data.option);
            // 加载新的参数
            // if (this.parameters.option) {
            //     this.myChart.setOption(this.parameters.option);
            // }
            window.addEventListener("resize", (this as any).data.myChart.resize);
        }

        fetchData(){
            console.log("(this as any).Api", (this as any).Api)
            Axios.get("http://localhost:8080/data/multiLineData.json").then(res=>{
                this.data.legendData = [],
                this.data.series = [],
                this.data.xData = []
                let{ data } = res
                data.result.forEach((element: any) => {
                    console.log("element", element)
                    // this.data.legendData.push(element.key)
                })
            })
        }

        getFontSize(val: string|number) {
            if(<number>val){
                return val
            }else{
                if ((<string>val).indexOf('%') > 0) {
                    var tmp = parseFloat((<string>val).replace('%', '')) / 100;
                    let height = (this.$refs.element as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    // @import "@/assets/less/variables.less";

    .MultiLine-wrap {
        width: 100%;
        height: 100%;
    }
</style>

