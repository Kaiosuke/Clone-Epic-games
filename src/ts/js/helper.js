import { getData } from "../js/apiRequest.js";
const url = "http://localhost:3000";
let dataList = [];
const getUsers = async () => {
    const data = await getData(url, "users");
    dataList = data;
    getUser();
};
getUsers();
const getUser = () => {
    const userData = localStorage.getItem("user");
    let user = null;
    if (userData && userData !== "undefined") {
        user = JSON.parse(userData);
    }
    let findUser = null;
    if (dataList && user) {
        findUser = dataList.find((data) => data.email === user.email);
    }
    return findUser;
};
export { getUser };
