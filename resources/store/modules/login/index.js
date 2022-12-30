const state = () => ({
    user: {},
})

const mutations = {
    setUser(state, payload){
        //console.log(payload);
    } 
}

const actions = {
    requestLoginAsync({ commit }, payload){
        console.log(payload);

        commit('setUser', { 
            nome: 'Jeferson',
            idade: '22'
        })
    }
} 

export default {
    state,
    mutations,
    actions
}
