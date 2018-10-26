import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://autoreview.herokuapp.com/`
    // https://frozen-earth-21625.herokuapp.com/
    //
  })
}
