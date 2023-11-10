let token = null
const api = import.meta.env.VITE_URL_API;
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getMatches = async () => {
    console.log(api)
    const res = await fetch(`${api}/Matches`);
    return res.data;
}

const postMatch = async (match) => {
    const res = await fetch(`${api}/Matches`, {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": token
        }
    });
    return res.data;
}

export default { getMatches, setToken, postMatch }