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

export default { getMatches, setToken }