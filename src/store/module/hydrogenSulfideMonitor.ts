import { HydrogenSulfideMonitorState } from '@/types/views/hydrogenSulfideMonitor.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as HydrogenSulfideMonitorApi from '@/api/hydrogenSulfideMonitor.ts'

const state: HydrogenSulfideMonitorState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<HydrogenSulfideMonitorState, any> = {
    author: (state: HydrogenSulfideMonitorState) => state.author
}

// 更改state
const mutations: MutationTree<HydrogenSulfideMonitorState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: HydrogenSulfideMonitorState, data: HydrogenSulfideMonitorState) {
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

const actions: ActionTree<HydrogenSulfideMonitorState, any> = {
    UPDATE_STATE_ASYN({ commit, state: HydrogenSulfideMonitorState }, data: HydrogenSulfideMonitorState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: HydrogenSulfideMonitorState }) {
        HydrogenSulfideMonitorApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

