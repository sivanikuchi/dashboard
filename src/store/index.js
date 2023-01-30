import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

const state = {
  jwt: {},
  username: '',
  firstname:'',
  lastname:'',
  userRole:'',
  tokenExpiryDate: new Date(),
};
 
const getters = {
  isTokenExpired: state => (new Date(state.tokenExpiryDate) < new Date()),
  isTokenPresent: (state, getters) => (key) => {
    return !getters.isTokenExpired && state.jwt[key] != null;
  },
  getToken: (state) => (key) => {
    return state.jwt[key];
  },
  getUserName: (state) => {
    return state.username;
  },
  getFirstName: (state) => {
    return state.firstname;
  },
  getLastName: (state) =>{
    return state.lastname;
  },
  getUserRole: (state) => {
    return state.userRole;
  },
  
};
 
const actions = {

  destroyState (context, expireSeconds) {
    setTimeout(() => {
      context.commit('destroyState')
    }, expireSeconds);
  }
  
};
 
const mutations = {
  destroyState: (state) => {
    state.username = '';
    state.jwt = {};
    state.userDetails = {};
    state.otherUserDetails = {};
    state.userRole='';
  },
  setExpiryDate: (state, expireSeconds) => {
    // Create a date
    const date = new Date();
    // Add your delta for expiry. I am expiring in one day.
    date.setSeconds(date.getSeconds() + expireSeconds);
    // Set the state
    state.tokenExpiryDate = date;
  },
  addJWT(state, token) {
    state.jwt[token.key] = token.value;
  },
  setUserName(state, username) {
    state.username = username;
  },
  setFirstName(state, firstname) {
    state.firstname = firstname;
  },
  setLastName(state, lastname) {
    state.lastname = lastname;
  },

  setUserRole(state, userRole){
    state.userRole = userRole;
  },

  logout() {
    sessionStorage.clear();
  }
};
Vue.use(Vuex) 
const store = new Vuex.Store({
 state,
 mutations,
 actions,
 getters,
 plugins: [createPersistedState({
        storage: window.sessionStorage,
      })]
});
export default store;



// const store = new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// });
// export default store;
