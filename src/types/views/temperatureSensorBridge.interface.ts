// temperatureSensorBridge.Data 参数类型
export interface TemperatureSensorBridgeData {
    toPointData: any[],
    current: number
}

// VUEX temperatureSensorBridge.State 参数类型
export interface TemperatureSensorBridgeState {
    author?: string
}

export interface AssetManageData {
    series: any[],
    xData: any[],
    isShow: boolean,
    title: string
}


// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

