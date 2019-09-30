import { EquipBridgeMainState } from '@/types/views/equipBridgeMain.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as EquipBridgeMainApi from '@/api/equipBridgeMain.ts'

const state: EquipBridgeMainState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<EquipBridgeMainState, any> = {
    author: (state: EquipBridgeMainState) => state.author
}

// 更改state
const mutations: MutationTree<EquipBridgeMainState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: EquipBridgeMainState, data: EquipBridgeMainState) {
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

const actions: ActionTree<EquipBridgeMainState, any> = {
    UPDATE_STATE_ASYN({ commit, state: EquipBridgeMainState }, data: EquipBridgeMainState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: EquipBridgeMainState }) {
        EquipBridgeMainApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

