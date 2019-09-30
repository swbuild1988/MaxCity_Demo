import { VehicleLoadSensorState } from '@/types/views/vehicleLoadSensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as VehicleLoadSensorApi from '@/api/vehicleLoadSensor.ts'

const state: VehicleLoadSensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<VehicleLoadSensorState, any> = {
    author: (state: VehicleLoadSensorState) => state.author
}

// 更改state
const mutations: MutationTree<VehicleLoadSensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: VehicleLoadSensorState, data: VehicleLoadSensorState) {
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

const actions: ActionTree<VehicleLoadSensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: VehicleLoadSensorState }, data: VehicleLoadSensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: VehicleLoadSensorState }) {
        VehicleLoadSensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

