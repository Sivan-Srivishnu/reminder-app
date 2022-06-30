import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    reminderList: [],
  },
  getters: {},
  mutations: {
    addReminder: (state, payload) => {
      state.reminderList.push(payload)
      
    }
  },
  actions: {
    async addReminder(context, payload) {
      await axios.post("http://localhost:5000/reminder", payload);
      context.commit("addReminder", payload);
      
    },
    async deletePost(context, id) {
      console.log(id);
      await axios.delete(`http://localhost:5000/reminder/${id}`);

    }
  },
  modules: {},
});
