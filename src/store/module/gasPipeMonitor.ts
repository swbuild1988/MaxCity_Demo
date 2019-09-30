import { GasPipeMonitorState } from '@/types/views/gasPipeMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as GasPipeMonitorApi from '@/api/gasPipeMonitor.ts'

const state: GasPipeMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<GasPipeMonitorState, any> = {
    author: (state: GasPipeMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<GasPipeMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: GasPipeMonitorState, data: GasPipeMonitorState) {
        function isValidKey(key: string, obj: {}): key is keyof typeof obj {
            return key in obj;
        }
        for (const key in data) {
            if (isValidKey(key, data)) {
                state[key] = data[key]
            }
        }
        // if (!data.hasOwnProperty(key)) { return }
        // state[key] = data[key]
    }
}

const actions: ActionTree<GasPipeMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: GasPipeMonitorState }, data: GasPipeMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: GasPipeMonitorState }) {
        GasPipeMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

