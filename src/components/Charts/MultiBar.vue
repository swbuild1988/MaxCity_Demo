<template>
    <div ref="multiBar" class="MultiBar-wrap" :id="id">
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'

    @Component({})
    export default class About extends Vue {
        // prop
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
                 tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: {
                    data: this.data.xData,
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    z: 10
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: ['#0f3069'],
                        }
                    }
                },
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#2bfaff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#005559' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                // barBorderRadius:[0,0,0,10]
                            }
                        },
                        // barMaxWidth: '20%',
                        barWidth: 20,
                        data: this.data.series
                    },
                    { 
                        name:'a',
                        tooltip:{
                        show:false 
                        },
                        type: 'bar',
                        // barMaxWidth: '10%',
                        barWidth: 6,
                        itemStyle:{ 
                            normal:{
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#2bfaff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#005559' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                barBorderRadius:[0,0,90,0]
                            }
                        },
                        data: this.data.series,
                        barGap:0
                    },
                    { 
                        name:'b',
                        tooltip:{
                        show:false 
                        },
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: '#2bfaff', 
                                borderWidth:1,
                                borderColor:'#2bfaff'
                            }
                        },
                        symbol: 'triangle',
                        symbolRotate: -20,
                        symbolSize: ['10','10'],
                        symbolOffset:['-6','-8'],
                        symbolPosition: 'end',
                        data: this.data.series,
                        z:3
                    },
                    { 
                        name:'c',
                        tooltip:{
                        show:false 
                        },
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: '#2bfaff', 
                                borderWidth:1,
                                borderColor:'#2bfaff'
                            }
                        },
                        symbol: 'rect',
                        symbolRotate: 0,
                        symbolSize: ['16','10'],
                        symbolOffset:['4.4','-7.8'],
                        symbolPosition: 'end',
                        data: this.data.series,
                        z:3
                    }
                ]
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
                    let height = (this.$refs.multiBar as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    .MultiBar-wrap {
        width: 100%;
        height: 100%;
    }
</style>

