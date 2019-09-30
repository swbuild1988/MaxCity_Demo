import { TemperatureSensorBridgeState } from '@/types/views/temperatureSensorBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as TemperatureSensorBridgeApi from '@/api/temperatureSensorBridge.ts'

const state: TemperatureSensorBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<TemperatureSensorBridgeState, any> = {
    author: (state: TemperatureSensorBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<TemperatureSensorBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: TemperatureSensorBridgeState, data: TemperatureSensorBridgeState) {
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

const actions: ActionTree<TemperatureSensorBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: TemperatureSensorBridgeState }, data: TemperatureSensorBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: TemperatureSensorBridgeState }) {
        TemperatureSensorBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

