import axios from "axios";

export default { getUsersService }

async function getUsersService() {
    await axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => { return res.data })
        .catch(err => { return {Message: "No Response"} })
}