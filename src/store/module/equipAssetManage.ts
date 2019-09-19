import { EquipAssetManageState } from '@/types/views/equipAssetManage.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as EquipAssetManageApi from '@/api/equipAssetManage.ts'

const state: EquipAssetManageState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<EquipAssetManageState, any> = {
    author: (state: EquipAssetManageState) => state.author
}

// 更改state
const mutations: MutationTree<EquipAssetManageState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: EquipAssetManageState, data: EquipAssetManageState) {
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

const actions: ActionTree<EquipAssetManageState, any> = {
    UPDATE_STATE_ASYN({ commit, state: EquipAssetManageState }, data: EquipAssetManageState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: EquipAssetManageState }) {
        EquipAssetManageApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

