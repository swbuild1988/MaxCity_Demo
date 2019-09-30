import { MonitorAlarmState } from '@/types/views/monitorAlarm.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as MonitorAlarmApi from '@/api/monitorAlarm.ts'

const state: MonitorAlarmState = {
    author: '三毛'
}

// 强制使用getter获取state
const getters: GetterTree<MonitorAlarmState, any> = {
    author: (state: MonitorAlarmState) => state.author
}

// 更改state
const mutations: MutationTree<MonitorAlarmState> = {
  // 更新state都用该方法
    UPDATE_STATE(state: MonitorAlarmState, data: MonitorAlarmState) {
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

const actions: ActionTree<MonitorAlarmState, any> = {
    UPDATE_STATE_ASYN({ commit, state: MonitorAlarmState }, data: MonitorAlarmState) {
        commit('UPDATE_STATE', data)
    },
    GET_DATA_ASYN({ commit, state: MonitorAlarmState }) {
        MonitorAlarmApi.getData()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}

