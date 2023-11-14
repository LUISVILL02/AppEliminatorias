
const api = import.meta.env.VITE_URL_API_MATCHES;

const token = window.localStorage.getItem("user");

export const postResult = async (result) => {
    console.log("desde el result",result)
    const res = await fetch(`${api}/results`, {
        method: "POST",
        body: JSON.stringify(result),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`
        }
    });
    if(res.status === 201){
        console.log(res);
        const data = await res.json();
        return data;
    }
    return res;
}

export default { postResult }