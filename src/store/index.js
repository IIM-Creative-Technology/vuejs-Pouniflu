
import { createStore } from 'vuex'

export default createStore({
  state: {
    img: "https://journalmetro.com/wp-content/uploads/2017/04/default_profile_400x400.png?w=860",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis exercitationem, esse cum cupiditate voluptatem ut, unde omnis nihil, ea id facilis molestiae ipsam? Perferendis explicabo unde voluptate! Voluptatibus, rem iure.",
    articles: []
  },
  mutations: {
    CREATE_ARTICLE(state, payload) {
      state.articles.push(payload)
    },

    // UPDATE_ARTICLE(state, payload){
    //   state.articles.push(payload)
    // }

    DELETE_ARTICLE(state, payload) {
      state.articles.splice(payload, 1)
    }
  },
  actions: {
    addArticle(context, payload) {
      context.commit('CREATE_ARTICLE', payload)
    },

    deleteArticle(context, payload) {
      context.commit('DELETE_ARTICLE', payload)
    }

    // updateArticle(context, payload) {
    //   context.commit('UPDATE_ARTICLE', payload)
    // }
  },
  modules: {
  }
})
