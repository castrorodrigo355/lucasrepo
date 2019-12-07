const url = `https://jsonplaceholder.typicode.com/users/`;

export default {
    getUsers
}

async function getUsers() {
    const request = await fetch(`${url}`);
    const data = await request.json();
    return data;
}