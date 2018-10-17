import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
    // https://frozen-earth-21625.herokuapp.com/
    //
  })
}
