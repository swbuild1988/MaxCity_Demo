<template>
    <div class="markPoint-wrap">
        <img :src="pointData.picUrl" class="markPoint" :style="{left: pointData.leftLen, top: pointData.TopLen}">
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"
    import { Getter, Action } from 'vuex-class'
    import { MarkPointData } from '@/types/components/markPoint.interface'
    // import {  } from "@/components" // 组件

    @Component({})
    export default class About extends Vue {
        // prop

        @Prop({
            required: true,
        })pointData: any

        // data
        data: MarkPointData = {
            componentName: 'markPoint'
        }
    }
</script>

<style lang="less">

    .markPoint-wrap {
        width: 100%;
        .markPoint{
            position: absolute;
        }
    }
</style>

