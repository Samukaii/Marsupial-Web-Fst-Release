import axios from "axios";
require("dotenv/config");

export const Api = axios.create({
    baseURL: "https://marsupialapi.herokuapp.com",

    headers: {
        "x-access-token": isAuth()
    }
});

export const reloadApi = () => {
    Api({ headers: { "x-access-token": isAuth() } })
}


export const login = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
        const login = await Api.post(
            "/auth/login",
            { email, password },
            { validateStatus: false }
        );
        if (login.data.error)
            reject({ success: false, error: login.data.error });

        saveToken(login.data.token);
        resolve();
    });
};

function saveToken(token) {
    const actualDate = new Date();
    actualDate.setDate(actualDate.getDate() + 1);

    const tokenInfo = {
        token: token,
        expires: actualDate
    };
    localStorage.setItem("authToken", JSON.stringify(tokenInfo));
}

function deleteToken() {
    localStorage.removeItem("authToken");
}

export function isAuth() {
    const tokenInfo = JSON.parse(localStorage.getItem("authToken"));
    if (!tokenInfo) return false;

    if (!tokenInfo.token) return false;

    if (isExpiredDate(tokenInfo.expires)) {
        deleteToken();
        return false;
    }

    return tokenInfo.token;
}

function isExpiredDate(date) {
    date = Date.parse(date);
    return date <= new Date();
}

export const register = ({ email, name, password }) =>
    new Promise(async (resolve, reject) => {
        const { data } = await Api.post(
            "/auth/register",
            {
                email,
                name,
                password
            },
            { validateStatus: false }
        );
        if (data.error) reject(new Error(data.error.message));
        login({ email: email, password: password });
        resolve();
    });

export const logout = () => {
    deleteToken();
    window.location.href = "/login";
};
