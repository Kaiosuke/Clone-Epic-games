import { getData } from "../js/apiRequest.js";

interface UserItems {
  id: number | string;
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  disPlayName: string;
  password: string;
  games: any[];
  wishlist: any[];
}

const url = "http://localhost:3000";

let dataList: UserItems[] = [];

const getUsers = async (): Promise<any> => {
  const data = await getData(url, "users");
  dataList = data;
  getUser();
};
getUsers();

const getUser = (): {} | null | undefined => {
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

const isValidator = (): any => {
  const elements = document.querySelectorAll(".wrapper-input div");
  return Array.from(elements).every(
    (element) => !element.classList.contains("active")
  );
};

export { getUser, isValidator };
