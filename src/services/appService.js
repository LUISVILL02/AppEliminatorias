let token = null
const api = import.meta.env.VITE_URL_API_MATCHES;

export const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getMatches = async () => {
    console.log(token);
    const res = await fetch(`${api}/Matches`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: token
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}

export const postMatch = async (match) => {
    const res = await fetch(`${api}/Matches`, {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}

export default { getMatches, setToken, postMatch }