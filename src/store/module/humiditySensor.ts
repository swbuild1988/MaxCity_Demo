import { HumiditySensorState } from '@/types/views/humiditySensor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HumiditySensorApi from '@/api/humiditySensor.ts'

const state: HumiditySensorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<HumiditySensorState, any> = {
    author: (state: HumiditySensorState) => state.author
}

// 更改state
const mutations: MutationTree<HumiditySensorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: HumiditySensorState, data: HumiditySensorState) {
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

const actions: ActionTree<HumiditySensorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: HumiditySensorState }, data: HumiditySensorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: HumiditySensorState }) {
        HumiditySensorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

