import { DeflectionSensorState } from '@/types/views/deflectionSensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as DeflectionSensorApi from '@/api/deflectionSensor.ts'

const state: DeflectionSensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<DeflectionSensorState, any> = {
    author: (state: DeflectionSensorState) => state.author
}

// 更改state
const mutations: MutationTree<DeflectionSensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: DeflectionSensorState, data: DeflectionSensorState) {
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

const actions: ActionTree<DeflectionSensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: DeflectionSensorState }, data: DeflectionSensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: DeflectionSensorState }) {
        DeflectionSensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

