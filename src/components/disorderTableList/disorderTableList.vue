<template>
    <div class="disorderTableList-wrap">
        <ul>
            <li v-for="(item, index) in disorderTableData" :key="index">
                <div>{{item.name}}</div>
                <div v-for="(valItem, valIndex) in item.properties" :key="valIndex">
                    {{valItem}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { DisorderTableListData } from '@/types/components/disorderTableList.interface'

    @Component({})
    export default class About extends Vue {
        // prop
        @Prop({
        required: false,
            default: ''
        }) name!: string

        @Prop({
            required: true,
            default: []
        })disorderTableData!: any[]

        data: DisorderTableListData = {
            componentName: 'disorderTableList'
        }
    }
</script>

<style lang="less">
    .disorderTableList-wrap {
        width: 100%;
        .setFlex(@a)  when ( @a = 5 ){
            flex: 0 0 20%;
        }
        .setFlex(@a) when ( @a = 2 ){
            flex: 0 0 50%;
        }
        ul li{
            display: flex;
            line-height: 5.2vmin;
            font-size: 1.6vmin;
            border-bottom: 0.1vmin solid #152f5b;
            div{
                .setFlex(5);
                color: @disorder-table-color;
                text-align: center;
            }
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

