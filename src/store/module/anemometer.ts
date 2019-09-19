import { AnemometerState } from '@/types/views/anemometer.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AnemometerApi from '@/api/anemometer.ts'

const state: AnemometerState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<AnemometerState, any> = {
    author: (state: AnemometerState) => state.author
}

// 更改state
const mutations: MutationTree<AnemometerState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: AnemometerState, data: AnemometerState) {
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

const actions: ActionTree<AnemometerState, any> = {
    UPDATE_STATE_ASYN({ commit, state: AnemometerState }, data: AnemometerState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: AnemometerState }) {
        AnemometerApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

