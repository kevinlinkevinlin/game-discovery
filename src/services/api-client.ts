import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6d722d15fa78490dbf9e62ae7dbcc756'
    }
})