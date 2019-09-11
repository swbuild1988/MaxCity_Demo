<template>
    <div class="tableList-wrap">
        <div class="table-header" v-for="(item, index) in tableHeader" :key="index">
            <div class="number">#</div>
            <div class="pipe-range">{{item.headerRange}}</div>
            <div class="pipe-length" v-show="item.headerLength">{{item.headerLength}}</div>
        </div>
        <ul class="table-body">
            <li v-for="(item, index) in tableBody" :key="index" :class="index==data.idx?'activited-li': ''" @click="choosedLi(index)">
                <div class="number">{{index+1}}</div>
                <div class="pipe-range">{{item.range}}</div>
                <div class="pipe-length" v-show="item.pipeLength">{{item.pipeLength}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { TableListData } from '@/types/components/tableList.interface'

    @Component({})
    export default class About extends Vue {
        // prop
        @Prop({
            required: true,
            default: []
        }) tableHeader!: any[]

        @Prop({
            required: true,
            default: []
        })tableBody!: any[]


        // data
        data: TableListData = {
            componentName: 'tableList',
            idx: null
        }

        choosedLi(index: number){
            this.data.idx = index
        }

    }
</script>

<style lang="less">

    .tableList-wrap {
        width: 98%;
        height: 40vh;
        overflow-y: auto;
        .table-header,.table-body li{
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            color: @table-color;
            text-align: center;
            .pipe-length{
                flex: 0 0 25%;
            }
        }
        .pipe-range{
            flex: 0 0 65%;
        }
        .table-header{
            line-height: 5vh;
            font-size: 2vmin;
        }
        .table-body{
            li{
                list-style: none;
                line-height: 4.5vh;
                border-bottom: 0.1vmin solid #043F7B;
                font-size: 1.8vmin;
            }
            .activited-li{
                background: #152f5b;
            }
        }

        .number{
            color: @title-color;
            flex: 0 0 10%;
        }
    }
    ::-webkit-scrollbar {
        width: 0.4vmin;
        height: 0.4vmin;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 1vmin;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #83a6ed;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 1vmin;
        background: #ededed;
    }
</style>

