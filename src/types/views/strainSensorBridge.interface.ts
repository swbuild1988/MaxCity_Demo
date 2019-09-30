// strainSensorBridge.Data 参数类型
export interface StrainSensorBridgeData {
    toPointData: any[],
    current: number
}

export interface AssetManageData {
    series: any[],
    xData: any[],
    isShow: boolean
}


// VUEX strainSensorBridge.State 参数类型
export interface StrainSensorBridgeState {
    author?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

