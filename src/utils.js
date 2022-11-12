import axios from "axios";
    const recipee = axios.create({
        baseURL:'https://api.edamam.com/search',
        timeout: 5000
    })

export default recipee;