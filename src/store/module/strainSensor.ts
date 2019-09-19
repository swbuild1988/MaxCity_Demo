import { StrainSensorState } from '@/types/views/strainSensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as StrainSensorApi from '@/api/strainSensor.ts'

const state: StrainSensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<StrainSensorState, any> = {
    author: (state: StrainSensorState) => state.author
}

// 更改state
const mutations: MutationTree<StrainSensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: StrainSensorState, data: StrainSensorState) {
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

const actions: ActionTree<StrainSensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: StrainSensorState }, data: StrainSensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: StrainSensorState }) {
        StrainSensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

