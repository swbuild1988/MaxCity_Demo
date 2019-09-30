import { AcceleraSensorState } from '@/types/views/acceleraSensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AcceleraSensorApi from '@/api/acceleraSensor.ts'

const state: AcceleraSensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<AcceleraSensorState, any> = {
    author: (state: AcceleraSensorState) => state.author
}

// 更改state
const mutations: MutationTree<AcceleraSensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: AcceleraSensorState, data: AcceleraSensorState) {
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

const actions: ActionTree<AcceleraSensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: AcceleraSensorState }, data: AcceleraSensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: AcceleraSensorState }) {
        AcceleraSensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

