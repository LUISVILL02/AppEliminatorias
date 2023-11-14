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
    const date = match.date;
    const fecha = new Date(date);
    const dateFormater = fecha.toLocaleString("es-CO", {
        pattern: "dd/MM/yyyy",
    });
    const dateForm = dateFormater.substring(0, dateFormater.indexOf(","));
    console.log("dateFormater:", dateForm);
    match.date = dateForm;
    console.log("add:", token);
    const res = await fetch(`${api}/Matches`, {
        method: "POST",
        body: JSON.stringify(match),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: token
        }
    });
    if(res.status === 201){
        const data = await res.json();
        return data;
    }
    return res;
}

export default { getMatches, setToken, postMatch }