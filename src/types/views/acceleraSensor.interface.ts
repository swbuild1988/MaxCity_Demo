// acceleraSensor.Data 参数类型
export interface AcceleraSensorData {
    toPointData: any[],
    unnormalNum: number,
    normalNum: number,
    current: number,
    isShow: boolean
}

// VUEX acceleraSensor.State 参数类型
export interface AcceleraSensorState {
    author?: string
}

export interface AssetLength {
    assetTopLen?: string,
    assetLeftLen?: string
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

