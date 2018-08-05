import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import JwtDecode from 'jwt-decode'

//export const API_URI = 'https://virtserver.swaggerhub.com/liqtrade/main/1.0.6'
export const API_URI = 'http://193.124.57.156'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    private_api: axios.create({
        baseURL: API_URI,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ localStorage.getItem('token')
        }
    }),
    jwt: localStorage.getItem('token'),
    user_type: localStorage.getItem('user_type') === null ? null : parseInt(localStorage.getItem('user_type')),
    endpoints: {
      obtainJWT: API_URI + 'auth/obtain_token',
      refreshJWT: API_URI + 'auth/refresh_token'
    }
  },
  mutations: {
    updateToken (state, newToken) {
      localStorage.setItem('token', newToken)
      state.jwt = newToken
      state.private_api = axios.create({
        baseURL: API_URI,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ newToken
        }
      })
    },
    removeToken (state) {
      localStorage.removeItem('token')
      state.jwt = null;
      state.user_type = null;
      localStorage.removeItem('user_type');
      state.private_api = axios.create({
        baseURL: API_URI,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
    },
    setUserType(state, newUserType){
      localStorage.setItem('user_type', newUserType)
      state.user_type = newUserType
    },
  },
  actions: {
    setUserType(ignore, newUserType){
      this.commit('setUserType', newUserType)
    },
    obtainToken (ignore, token) {
      this.commit('updateToken', token)
    },
    logout(){
      this.commit('removeToken')
    },
    refreshToken () {
      const payload = {
        token: this.state.jwt
      }
      axios.post(this.state.endpoints.refreshJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    inspectToken () {
      const token = this.state.jwt
      if (token) {
        const decoded = JwtDecode(token)
        const exp = decoded.exp
        const origIat = decoded.origIat
        if (exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - origIat < 628200) {
          this.dispatch('refreshToken')
        } else if (exp - (Date.now() / 1000) < 1800) {
          // DO NOTHING, DO NOT REFRESH
        } else {
          // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        }
      }
    }
  },
  getters: {
    getUserType(state) {
      return state.user_type
    },
    getToken(state) {
      return state.jwt
    },
    getAuth(state){
      return state.private_api
    }
  }
})
