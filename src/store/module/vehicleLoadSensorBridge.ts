import { VehicleLoadSensorBridgeState } from '@/types/views/vehicleLoadSensorBridge.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as VehicleLoadSensorBridgeApi from '@/api/vehicleLoadSensorBridge.ts'

const state: VehicleLoadSensorBridgeState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<VehicleLoadSensorBridgeState, any> = {
    author: (state: VehicleLoadSensorBridgeState) => state.author
}

// 更改state
const mutations: MutationTree<VehicleLoadSensorBridgeState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: VehicleLoadSensorBridgeState, data: VehicleLoadSensorBridgeState) {
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

const actions: ActionTree<VehicleLoadSensorBridgeState, any> = {
    UPDATE_STATE_ASYN({ commit, state: VehicleLoadSensorBridgeState }, data: VehicleLoadSensorBridgeState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: VehicleLoadSensorBridgeState }) {
        VehicleLoadSensorBridgeApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

