const api = import.meta.env.VITE_URL_API;

const fetching = async (url, datos) => {
    const res = await fetch(`${api}/auth/${url}`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {"Content-type": "application/json; charset=UTF-8"}
                        });
    return res;

}

export const login = (email, password) => {
    const datos = {email, password};
    const res = fetching('login', datos);
    return res.data;
}

export const singup = async (user, email, password) => {
    const datos = {user, email, password};
    const res = fetching('singup', datos);
    return res;
}