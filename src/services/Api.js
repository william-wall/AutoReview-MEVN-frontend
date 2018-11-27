import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://autoreview-backend.herokuapp.com/`
    // https://frozen-earth-21625.herokuapp.com/ http://autoreview.herokuapp.com/
    //
  })
}
