// anemometerBridge.Data 参数类型
export interface AnemometerBridgeData {
    toPointData: any[],
    current: number
}

export interface AssetManageData {
    series: any[],
    xData: any[],
    isShow: boolean,
    title: string
}

// VUEX anemometerBridge.State 参数类型
export interface AnemometerBridgeState {
    author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

