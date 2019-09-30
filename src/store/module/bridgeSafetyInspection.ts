import { BridgeSafetyInspectionState } from '@/types/views/bridgeSafetyInspection.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as BridgeSafetyInspectionApi from '@/api/bridgeSafetyInspection.ts'

const state: BridgeSafetyInspectionState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<BridgeSafetyInspectionState, any> = {
    author: (state: BridgeSafetyInspectionState) => state.author
}

// 更改state
const mutations: MutationTree<BridgeSafetyInspectionState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: BridgeSafetyInspectionState, data: BridgeSafetyInspectionState) {
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

const actions: ActionTree<BridgeSafetyInspectionState, any> = {
    UPDATE_STATE_ASYN({ commit, state: BridgeSafetyInspectionState }, data: BridgeSafetyInspectionState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: BridgeSafetyInspectionState }) {
        BridgeSafetyInspectionApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

