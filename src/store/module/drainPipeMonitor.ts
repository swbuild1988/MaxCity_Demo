import { DrainPipeMonitorState } from '@/types/views/drainPipeMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as DrainPipeMonitorApi from '@/api/drainPipeMonitor.ts'

const state: DrainPipeMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<DrainPipeMonitorState, any> = {
    author: (state: DrainPipeMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<DrainPipeMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: DrainPipeMonitorState, data: DrainPipeMonitorState) {
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

const actions: ActionTree<DrainPipeMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: DrainPipeMonitorState }, data: DrainPipeMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: DrainPipeMonitorState }) {
        DrainPipeMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

