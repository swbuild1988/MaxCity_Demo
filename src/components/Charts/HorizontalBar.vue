<template>
    <div ref="horizontalBar" class="horizontalBar-wrap" :id="id">
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
                        color: '#32fdff',
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    containLabel: true
                },
                legend: {
                    right: '2%',
                    top: '2%',
                    data: this.data.legendData,
                    textStyle: {
                        color: '#26dfe5'
                    }
                },
                xAxis: {
                    type: 'value',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#26dfe5',
                            // fontSize : this.getFontSize('3%')
                        },                            
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: ['#0f3069'],
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: this.data.yData,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#26dfe5',
                            // fontSize : this.getFontSize('3%')
                        },                            
                    }
                },
                color: ['#8f071e', '#0167e8'],
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
                    let height = (this.$refs.horizontalBar as HTMLDivElement | HTMLCanvasElement).offsetHeight;
                    return Math.round(height * tmp);
                }
            }
			return 0;
		}
    }
</script>

<style lang="less">
    .horizontalBar-wrap {
        width: 100%;
        height: 100%;
    }
</style>

