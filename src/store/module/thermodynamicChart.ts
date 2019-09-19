import { ThermodynamicChartState } from '@/types/views/thermodynamicChart.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as ThermodynamicChartApi from '@/api/thermodynamicChart.ts'

const state: ThermodynamicChartState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<ThermodynamicChartState, any> = {
    author: (state: ThermodynamicChartState) => state.author
}

// 更改state
const mutations: MutationTree<ThermodynamicChartState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: ThermodynamicChartState, data: ThermodynamicChartState) {
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

const actions: ActionTree<ThermodynamicChartState, any> = {
    UPDATE_STATE_ASYN({ commit, state: ThermodynamicChartState }, data: ThermodynamicChartState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: ThermodynamicChartState }) {
        ThermodynamicChartApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

