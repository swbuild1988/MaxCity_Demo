import { WaterSupplyState } from '@/types/views/waterSupply.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as WaterSupplyApi from '@/api/waterSupply.ts'

const state: WaterSupplyState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<WaterSupplyState, any> = {
    author: (state: WaterSupplyState) => state.author
}

// 更改state
const mutations: MutationTree<WaterSupplyState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: WaterSupplyState, data: WaterSupplyState) {
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

const actions: ActionTree<WaterSupplyState, any> = {
    UPDATE_STATE_ASYN({ commit, state: WaterSupplyState }, data: WaterSupplyState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: WaterSupplyState }) {
        WaterSupplyApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

