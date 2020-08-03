import * as types from './mutations_type.js'

export const state = {
    count: 0
}

export const mutations = {
    [types.INCREASE](state, num) {
        state.count += num;
    },
    [types.DECREASE](state, num) {
        state.count -= num;
    },
    [types.MULTIPLY](state, num) {
        state.count *= num;
    },
    [types.DIVIDED](state, num) {
        state.count /= num;
    },
    [types.COUNT_RESET](state) {
        state.count = 0;
    }
}