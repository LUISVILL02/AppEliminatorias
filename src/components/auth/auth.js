const api = import.meta.env.VITE_URL_API;

const fetching = async (url, datos) => {
    const res = await fetch(`${api}/auth/${url}`, {
                            method: "POST",
                            body: JSON.stringify(datos),
                            headers: {"Content-type": "application/json; charset=UTF-8"}
                        });
    return res;

}

export const login = async (email, password) => {
    const datos = {email, password};
    const res = await fetching('login', datos);
    if(res.status === 200){
        const data = await res.json();
        console.log(data);
        return data;
    }
    throw new Error("Error en la autenticación");
}

export const singup = async (user, email, password) => {
    const datos = {user, email, password};
    const res = fetching('singup', datos);
    return res;
}