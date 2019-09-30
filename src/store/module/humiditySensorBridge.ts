import { HumiditySensorBridgeState } from '@/types/views/humiditySensorBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HumiditySensorBridgeApi from '@/api/humiditySensorBridge.ts'

const state: HumiditySensorBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<HumiditySensorBridgeState, any> = {
    author: (state: HumiditySensorBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<HumiditySensorBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: HumiditySensorBridgeState, data: HumiditySensorBridgeState) {
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

const actions: ActionTree<HumiditySensorBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: HumiditySensorBridgeState }, data: HumiditySensorBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: HumiditySensorBridgeState }) {
        HumiditySensorBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

