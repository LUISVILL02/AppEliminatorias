
const api = import.meta.env.VITE_URL_API_MATCHES;

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

export const postResult = async (result) => {
    const res = await fetch(`${api}/results`, {
        method: "POST",
        body: JSON.stringify(result),
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

export const updateResult = async (match, score) => {
    const res = await fetch(`${api}/results/${match.score.id}`, {
        method: "PUT",
        body: JSON.stringify(score),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${user.token}`
        }
    })
    if(res.status === 200){
        const data = await res.json();
        return data;
    }
    return res;
}

export default { postResult, updateResult }