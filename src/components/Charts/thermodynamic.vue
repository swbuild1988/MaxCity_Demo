<template>
    <div ref="thermodynamic" class="thermodynamic" :id="id">
    </div>
</template>
<script lang="ts">
    import { Component, Vue, Prop, Watch } from "vue-property-decorator"
    import 'echarts/extension/bmap/bmap.js'


    declare const BMap: any;

    @Component({})
    export default class About extends Vue {
        // prop
        @Prop({ required: true, default: '1'}) id!: string
        @Prop({ required: true, default: [] }) points!: any[]

        options: any = {}
        myChart: any = {}

        @Watch('points', {deep: true})
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
                animation: false,
                bmap: {
                    center: [120.13066322374, 30.240018034923],
                    zoom: 14,
                    roam: true
                },
                visualMap: {
                    show: false,
                    top: 'top',
                    min: 0,
                    max: 5,
                    seriesIndex: 0,
                    calculable: true,
                    inRange: {
                        color: ['blue', 'blue', 'green', 'yellow', 'red']
                    }
                },
                series: [{
                    type: 'heatmap',
                    coordinateSystem: 'bmap',
                    data: this.points,
                    pointSize: 5,
                    blurSize: 6
                }]
            };



            // 加载默认参数
            (this as any).myChart.setOption(this.options);
            window.addEventListener("resize", (this as any).myChart.resize);

            // 添加百度地图插件
            let bmap = (this as any).myChart.getModel().getComponent('bmap').getBMap();
            bmap.addControl(new BMap.MapTypeControl());
            
        }
    }
</script>

<style lang="less">
    .thermodynamic {
        width: 100%;
        height: 100%;
    }
</style>

