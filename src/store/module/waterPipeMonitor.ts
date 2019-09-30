import { WaterPipeMonitorState } from '@/types/views/waterPipeMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as WaterPipeMonitorApi from '@/api/waterPipeMonitor.ts'

const state: WaterPipeMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<WaterPipeMonitorState, any> = {
    author: (state: WaterPipeMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<WaterPipeMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: WaterPipeMonitorState, data: WaterPipeMonitorState) {
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

const actions: ActionTree<WaterPipeMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: WaterPipeMonitorState }, data: WaterPipeMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: WaterPipeMonitorState }) {
        WaterPipeMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

