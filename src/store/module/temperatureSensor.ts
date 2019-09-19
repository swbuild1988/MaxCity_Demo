import { TemperatureSensorState } from '@/types/views/temperatureSensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as TemperatureSensorApi from '@/api/temperatureSensor.ts'

const state: TemperatureSensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<TemperatureSensorState, any> = {
    author: (state: TemperatureSensorState) => state.author
}

// 更改state
const mutations: MutationTree<TemperatureSensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: TemperatureSensorState, data: TemperatureSensorState) {
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

const actions: ActionTree<TemperatureSensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: TemperatureSensorState }, data: TemperatureSensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: TemperatureSensorState }) {
        TemperatureSensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

