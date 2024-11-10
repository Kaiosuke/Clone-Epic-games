const getData = async (url, path) => {
    try {
        const res = await fetch(`${url}/${path}`);
        if (!res.ok) {
            throw Error(`Fetch error ${res.status}`);
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
};
const addData = async (url, path, data) => {
    try {
        const headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify(data);
        const res = await fetch(`${url}/${path}`, {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });
        if (!res.ok) {
            throw Error(`Fetch error ${res.status}`);
        }
    }
    catch (error) {
        console.log(error);
    }
};
const updateData = async (url, path, data, id) => {
    try {
        const headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify(data);
        const res = await fetch(`${url}/${path}/${id}`, {
            method: "PATCH",
            body: bodyContent,
            headers: headersList,
        });
        console.log(res);
        if (!res.ok) {
            throw Error(`Fetch error ${res.status}`);
        }
    }
    catch (error) {
        console.log(error);
    }
};
export { getData, addData, updateData };
