<template>
    <div ref="simplePie" class="simplePie-wrap" :id="id">
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
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    right: '2%',
                    top: '20%',
                    data: this.data.legendData,
                    itemHeight: 20,
                    textStyle: {
                        color: '#8ccbe4'
                    }
                },
                color: ['#02afff', '#004be4', '#ae00ff', '#5f45ff'],
                series: [
                    {
                        name: '类型',
                        type: 'pie',
                        radius : '55%',
                        center: ['40%', '50%'],
                        data: this.data.series,
                        label: {
                            normal: {
                                position: 'inner',
                                color: 'black'
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
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
                    let height = (this.$refs.simplePie as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    .simplePie-wrap {
        width: 100%;
        height: 100%;
    }
</style>

