import axios from "axios"


const http=axios.create({
    baseURL:"http://localhost:5001/clone-e646b/us-central1/api"
})

export default http