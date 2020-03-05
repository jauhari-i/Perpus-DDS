import axios from "axios"

const instance = axios.create({
  baseURL: "https://perpus-dds.firebaseio.com/"
})

export default instance
