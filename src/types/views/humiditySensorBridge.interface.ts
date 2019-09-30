// humiditySensorBridge.Data 参数类型
export interface HumiditySensorBridgeData {
    toPointData: any[],
    current: number
}

export interface AssetManageData {
    series: any[],
    xData: any[],
    isShow: boolean,
    title: string
}

// VUEX humiditySensorBridge.State 参数类型
export interface HumiditySensorBridgeState {
    author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

