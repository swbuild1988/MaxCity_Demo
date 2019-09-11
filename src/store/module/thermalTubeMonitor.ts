import { ThermalTubeMonitorState } from '@/types/views/thermalTubeMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ThermalTubeMonitorApi from '@/api/thermalTubeMonitor.ts'

const state: ThermalTubeMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<ThermalTubeMonitorState, any> = {
    author: (state: ThermalTubeMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<ThermalTubeMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: ThermalTubeMonitorState, data: ThermalTubeMonitorState) {
        function isValidKey(key: string, obj: {}): key is keyof typeof obj {
            return key in obj;
        }
        for (const key in data) {
            if(isValidKey(key, data)){
                state[key] = data[key]
            }
        }
        // if (!data.hasOwnProperty(key)) { return }
        // state[key] = data[key]
    }
}

const actions: ActionTree<ThermalTubeMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: ThermalTubeMonitorState }, data: ThermalTubeMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: ThermalTubeMonitorState }) {
        ThermalTubeMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

