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
export { getData };
