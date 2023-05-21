import axios from 'axios'

const base1 = 'http://localhost:8601'
const base2 = 'http://localhost:8602'

export default {
  get: (url, ...params) => axios.get(base1 + url, ...params),
  get2: (url, ...params) => axios.get(base2 + url, ...params),
  post: (url, ...params) => axios.post(base1 + url, ...params),
  post2: (url, ...params) => axios.post(base2 + url, ...params),
}