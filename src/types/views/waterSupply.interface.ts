// waterSupply.Data 参数类型
export interface WaterSupplyData {
    pageName: string,
    toPointData: any[],
    current: number
}

// VUEX waterSupply.State 参数类型
export interface WaterSupplyState {
    author?: string
}

export interface AssetManageData {
    xData: any[]
    series: any[],
    isShow: boolean,
    title: string
}


// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

