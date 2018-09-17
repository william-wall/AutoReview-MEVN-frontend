import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://project-testing-backend.herokuapp.com/`
  })
}
