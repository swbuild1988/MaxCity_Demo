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
            this.myChart = (this as any).$echarts.init(document.getElementById(this.id) as HTMLCanvasElement),
            this.options = {
                title: {
                    text: this.data.title,
                    right: '2%',
                    textStyle: {
                        color: '#32fdff'
                    }
                },
                tooltip : {
                    trigger: 'axis'
                },
                xAxis: {
                    data: this.data.xData,
                    type: 'category',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#0030ff'
                        }                        
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#002756'],
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: this.data.yTextColor ? this.data.yTextColor : '#fff'
                        }                        
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#002756'],
                        }
                    }
                },
                color: this.data.lineColor.length ? this.data.lineColor : '#0173a4',
                series: [
                    {
                        type: 'line',
                        data: this.data.series,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0, color: this.data.rangeColors[0] ? this.data.rangeColors[0] : '#0173a4' // 0% 处的颜色
                                    }, 
                                    {
                                        offset: 1, color: this.data.rangeColors[1] ? this.data.rangeColors[1] : '#ffffff' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        },
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'}
                            ]
                        },
                    }
                ]
            },
            // 加载默认参数
            (this as any).myChart.setOption(this.options),
            // 加载新的参数
            // if (this.parameters.option) {
            //     this.myChart.setOption(this.parameters.option);
            // }
            window.addEventListener("resize", (this as any).myChart.resize);
        }

        getFontSize(val: string|number) {
            if ( val as number ) {
                return val
            } else {
                if (( val as string ).indexOf('%') > 0) {
                    let tmp = parseFloat(( val as string ).replace('%', '')) / 100;
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
        width: 24vw;
        height: 30vh;
    }
</style>

