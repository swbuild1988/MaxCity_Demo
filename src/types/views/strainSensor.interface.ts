// strainSensor.Data 参数类型
export interface StrainSensorData {
    src ?: string,
    describe ?: string,
    value ?: string,
    toPointData ?: any[],
    current ?: number
}

// VUEX strainSensor.State 参数类型
export interface StrainSensorState {
    author?: string
}

export interface assetManageData {
    xData: any[]
    series: any[],
    isShow: boolean
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

