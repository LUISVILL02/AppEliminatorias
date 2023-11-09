const api = import.meta.env.VITE_URL_API;

const login = async (email, password) => {
    const datos = {email, password};
    const res = await fetch(`${api}/login`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {"Content-type": "application/json; charset=UTF-8"}
                        });
    return res.data;
}

export default login;