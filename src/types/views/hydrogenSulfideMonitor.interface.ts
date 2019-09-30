// hydrogenSulfideMonitor.Data 参数类型
export interface HydrogenSulfideMonitorData {
    toPointData: any[],
    unnormalNum: number,
    normalNum: number,
    current: number
}

// VUEX hydrogenSulfideMonitor.State 参数类型
export interface HydrogenSulfideMonitorState {
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

