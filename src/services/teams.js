
const api = import.meta.env.VITE_URL_API_MATCHES;

const token = window.localStorage.getItem("user");

export const postTeams = async (teams) => {
    console.log("teams ",teams)
    const res = await fetch(`${api}/Teams`, {
        method: "POST",
        body: JSON.stringify(teams),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
        }
    });
    if(res.status === 201){
        const data = await res.json();
        return data;
    }
    return res;
}

export const getById = async (id) => {
    const res = await fetch(`${api}/Teams/${id}`, {
        method: "GET",
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

export const getTeams = async () => {
    const res = await fetch(`${api}/Teams`, {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
        }
    });
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}
export default { postTeams, getById, getTeams }