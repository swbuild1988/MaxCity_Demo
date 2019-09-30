import { TopPageState } from '@/types/views/topPage.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as TopPageApi from '@/api/topPage.ts'

const state: TopPageState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<TopPageState, any> = {
    author: (state: TopPageState) => state.author
}

// 更改state
const mutations: MutationTree<TopPageState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: TopPageState, data: TopPageState) {
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

const actions: ActionTree<TopPageState, any> = {
    UPDATE_STATE_ASYN({ commit, state: TopPageState }, data: TopPageState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: TopPageState }) {
        TopPageApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

