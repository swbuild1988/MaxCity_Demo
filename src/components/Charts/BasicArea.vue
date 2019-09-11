<template>
    <div ref="basicArea" class="basicArea-wrap" :id="id">
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
                xAxis: {
                    data: this.data.xData,
                    type: 'category',
                    // boundaryGap: false,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            // fontSize : this.getFontSize('3%'),
                        }                        
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: ['#002756'],
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: this.data.yTextColor ? this.data.yTextColor : '#fff',
                            // fontSize : this.getFontSize('3%'),
                        }                        
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: ['#002756'],
                        }
                    }
                },
                color: this.data.lineColor.length ? this.data.lineColor : '#0173a4',
                series: [
                    {
                        type: 'line',
                        data: this.data.series,
                        smooth: true,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: this.data.rangeColors[0] ? this.data.rangeColors[0] : '#0173a4' // 0% 处的颜色
                                }, {
                                    offset: 1, color: this.data.rangeColors[1] ? this.data.rangeColors[1] : '#ffffff' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
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
                    let height = (this.$refs.basicArea as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    .basicArea-wrap {
        width: 100%;
        height: 100%;
    }
</style>

