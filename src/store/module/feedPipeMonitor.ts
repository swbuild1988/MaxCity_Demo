import { FeedPipeMonitorState } from '@/types/views/feedPipeMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as FeedPipeMonitorApi from '@/api/feedPipeMonitor.ts'

const state: FeedPipeMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<FeedPipeMonitorState, any> = {
    author: (state: FeedPipeMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<FeedPipeMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: FeedPipeMonitorState, data: FeedPipeMonitorState) {
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

const actions: ActionTree<FeedPipeMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: FeedPipeMonitorState }, data: FeedPipeMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: FeedPipeMonitorState }) {
        FeedPipeMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

