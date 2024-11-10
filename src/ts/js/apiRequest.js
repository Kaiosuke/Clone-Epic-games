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
const addData = async (url, path, user) => {
    try {
        const headersList = {
            Accept: "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Content-Type": "application/json",
        };
        let bodyContent = JSON.stringify(user);
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
export { getData, addData };
