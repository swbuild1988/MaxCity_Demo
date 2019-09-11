import { GirderBridgeState } from '@/types/views/girderBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as GirderBridgeApi from '@/api/girderBridge.ts'

const state: GirderBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<GirderBridgeState, any> = {
    author: (state: GirderBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<GirderBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: GirderBridgeState, data: GirderBridgeState) {
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

const actions: ActionTree<GirderBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: GirderBridgeState }, data: GirderBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: GirderBridgeState }) {
        GirderBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

