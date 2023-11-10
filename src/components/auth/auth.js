const api = import.meta.env.VITE_URL_API;

const fetching = async (url, datos) => {
    const res = await fetch(`${api}/${url}`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {"Content-type": "application/json; charset=UTF-8"}
                        });
    return res;

}

const login = async (email, password) => {
    const datos = {email, password};
    const res = fetching('login', datos);
    return res.data;
}

const singup = async (user, email, password) => {
    const datos = {user, email, password};
    const res = fetching('singup', datos);
    return res;
}

export default { login, singup };