export const state = () => ({
    user:null,
    conversations:[]
})

export const mutations = {
    setUser(state,user){
        state.user = user
    },
    clearUser(state) {
        state.user = null
    },
    setConversations(state,conversations){
        state.conversations = conversations
    },
}