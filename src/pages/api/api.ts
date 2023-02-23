import Axios from "axios";

let urls = {
    development: "http://bes.xenitsoft.com/",
    production: "http://bes.xenitsoft.com/"
}
const api = Axios.create({
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export default api