import { DeflectionSensorBridgeState } from '@/types/views/deflectionSensorBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as DeflectionSensorBridgeApi from '@/api/deflectionSensorBridge.ts'

const state: DeflectionSensorBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<DeflectionSensorBridgeState, any> = {
    author: (state: DeflectionSensorBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<DeflectionSensorBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: DeflectionSensorBridgeState, data: DeflectionSensorBridgeState) {
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

const actions: ActionTree<DeflectionSensorBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: DeflectionSensorBridgeState }, data: DeflectionSensorBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: DeflectionSensorBridgeState }) {
        DeflectionSensorBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

