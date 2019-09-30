import { BridgeAcceleraState } from '@/types/views/bridgeAccelera.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as BridgeAcceleraApi from '@/api/bridgeAccelera.ts'

const state: BridgeAcceleraState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<BridgeAcceleraState, any> = {
    author: (state: BridgeAcceleraState) => state.author
}

// 更改state
const mutations: MutationTree<BridgeAcceleraState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: BridgeAcceleraState, data: BridgeAcceleraState) {
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

const actions: ActionTree<BridgeAcceleraState, any> = {
    UPDATE_STATE_ASYN({ commit, state: BridgeAcceleraState }, data: BridgeAcceleraState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: BridgeAcceleraState }) {
        BridgeAcceleraApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

