import { CableStayedBridgeState } from '@/types/views/cableStayedBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as CableStayedBridgeApi from '@/api/cableStayedBridge.ts'

const state: CableStayedBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<CableStayedBridgeState, any> = {
    author: (state: CableStayedBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<CableStayedBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: CableStayedBridgeState, data: CableStayedBridgeState) {
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

const actions: ActionTree<CableStayedBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: CableStayedBridgeState }, data: CableStayedBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: CableStayedBridgeState }) {
        CableStayedBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

