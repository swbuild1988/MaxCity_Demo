<template>
    <div ref="labelRotationBar" class="labelRotationBar-wrap" :id="id">
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
                legend: {
                    data: this.data.legendData,
                    right: '2%',
                    top: '6%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                xAxis: {
                    data: this.data.xData,
                    type: 'category',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            // fontSize : this.getFontSize('3%'),
                        }                        
                    }
                },
                yAxis: {
                    type: 'value',
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
                            color: ['#0f3069'],
                        }
                    }
                },
                color: this.data.barColors.length ? this.data.barColors : ['#5f45ff', '#02cdff' , '#0090ff', '#314976', '#ffa459', '#00736d', '#6a005f'],
                series: this.data.series
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
                    let height = (this.$refs.labelRotationBar as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    .labelRotationBar-wrap {
        width: 100%;
        height: 100%;
    }
</style>

