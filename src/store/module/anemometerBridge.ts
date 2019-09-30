import { AnemometerBridgeState } from '@/types/views/anemometerBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AnemometerBridgeApi from '@/api/anemometerBridge.ts'

const state: AnemometerBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<AnemometerBridgeState, any> = {
    author: (state: AnemometerBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<AnemometerBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: AnemometerBridgeState, data: AnemometerBridgeState) {
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

const actions: ActionTree<AnemometerBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: AnemometerBridgeState }, data: AnemometerBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: AnemometerBridgeState }) {
        AnemometerBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

