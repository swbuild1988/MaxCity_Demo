import { StrainSensorBridgeState } from '@/types/views/strainSensorBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as StrainSensorBridgeApi from '@/api/strainSensorBridge.ts'

const state: StrainSensorBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<StrainSensorBridgeState, any> = {
    author: (state: StrainSensorBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<StrainSensorBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: StrainSensorBridgeState, data: StrainSensorBridgeState) {
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

const actions: ActionTree<StrainSensorBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: StrainSensorBridgeState }, data: StrainSensorBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: StrainSensorBridgeState }) {
        StrainSensorBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

