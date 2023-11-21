
let userLocal = window.localStorage.getItem('user') ?? {
    token: " ",
    type: "",
    id: 0,
    username: "",
    email: "",
    roles: []
};
let user;
userLocal.token !== " " ? user = JSON.parse(userLocal) : user = userLocal;
const api = import.meta.env.VITE_URL_API_MATCHES;

const getMatches = async () => {
    const res = await fetch(`${api}/Matches`,{
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}


const getMatchesByName = async (teamName) => {
    const res = await fetch(`${api}/Matches/byName?name=${teamName}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
};

export const getMatchByName = async (matchName) => {
    const res = await fetch(`${api}/Matches/byName?name=${matchName}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}

export const postMatch = async (match) => {
    const date = match.date;
    const fecha = new Date(date);
    const dateFormater = fecha.toLocaleString("es-CO", {
        pattern: "dd/MM/yyyy",
    });
    const dateForm = dateFormater.substring(0, dateFormater.indexOf(","));
    match.date = dateForm;
    const res = await fetch(`${api}/Matches`, {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${user.token}`
        }
    });
    if(res.status === 201){
        const data = await res.json();
        return data;
    }
    return res;
}

export default { getMatches, postMatch, getMatchesByName}