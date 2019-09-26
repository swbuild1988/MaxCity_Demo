// anemometer.Data 参数类型
export interface AnemometerData {
    toPointData: any[],
    current: number
}

// VUEX anemometer.State 参数类型
export interface AnemometerState {
    author?: string
}

export interface assetManageData {
    xData: any[]
    series: any[],
    isShow: boolean,
    title: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

