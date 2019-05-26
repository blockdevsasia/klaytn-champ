import axios from 'axios'

const baseURL = 'http://localhost:3000'
const BEARER = ''

export const axiosHTTP = axios.create({
  Authorization: BEARER,
  baseURL
})

export default ({ Vue }) => {
  Vue.prototype.$axios = axiosHTTP
}
