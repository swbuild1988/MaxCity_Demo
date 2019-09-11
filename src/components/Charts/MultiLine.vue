<template>
    <div ref="element" class="MultiLine-wrap" :id="id">
        <!-- {{data.componentName}} -->
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    // import {  } from "@/components" // 组件\
    import Axios from 'axios'

    @Component({})
    export default class About extends Vue {
        // prop
        // @Prop({ required: false,default: ''}) name!: string
        @Prop({ required: true, default: '1'}) id!: string
        @Prop({ required: true}) data!: any

        options: any = {}
        myChart: any = {}

        @Watch('data', {deep: true})
        onDataChanged(val: any, oldVal: any) {
            this.drawMultiLine()
        }

        mounted() {
            this.drawMultiLine()
        }

        drawMultiLine() {
            this.myChart = (this as any).$echarts.init(
                <HTMLDivElement | HTMLCanvasElement> document.getElementById(this.id)
            );
            this.options = {
                title: {
                    text: this.data.title,
                    top: '2%',
                    left: '2%',
                    textStyle: {
                        color: '#32fdff'
                    }
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "5%",
                    top: '16%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: this.data.legendData,
                    right: '2%',
                    top: '2%',
                    textStyle: { 
                        // fontSize: this.getFontSize('3%') ,
                        color: '#fff'
                    },
                    // padding: this.getFontSize('6%')
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: this.data.xData,
                    axisLabel: {
                        show: true,
                        width: '20%',
                        textStyle: {
                            color: '#fff',
                            // fontSize : this.getFontSize('3%')
                        },                            
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            // fontSize : this.getFontSize('3%'),
                            // top: 10
                        },                            
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: ['#0f3069'],
                        }
                    }
                },
                series: this.data.series,
                color: this.data.lineColors && this.data.lineColors.length ? this.data.lineColors : ['#c45df1','#1095da']
                // 缩放
                // dataZoom: [{
                //     type: "inside"
                // }]
            },
            // 加载默认参数
            (this as any).myChart.setOption(this.options);
            // 加载新的参数
            // if (this.parameters.option) {
            //     this.myChart.setOption(this.parameters.option);
            // }
            window.addEventListener("resize", (this as any).myChart.resize);
        }

        getFontSize(val: string|number) {
            if ( <number> val ) {
                return val
            } else {
                if (( <string> val ).indexOf('%') > 0) {
                    let tmp = parseFloat(( <string> val).replace('%', '')) / 100;
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

