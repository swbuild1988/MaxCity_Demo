import { IndexState } from '@/types/views/index.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as IndexApi from '@/api/index.ts'


const state: IndexState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
    author: (state: IndexState) => state.author
}

// 更改state
const mutations: MutationTree<IndexState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: IndexState, data: IndexState) {
        function isValidKey(key: string, obj: {}): key is keyof typeof obj {
            return key in obj;
        }
        for (const key in data) {
            if (isValidKey(key, data)) {
                state[key] = data[key]
            }
            // if (!data.hasOwnProperty(key)){ 
            //     return 
            // }else{
            //     state[key] = data[key]
            // }
        }
    }
}

const actions: ActionTree<IndexState, any> = {
    UPDATE_STATE_ASYN({ commit, state: IndexState }, data: IndexState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: IndexState }) {
      IndexApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

