import axios from "axios";
import { hostNameUrl } from "../common/config";

const security = 'api/book'
export const getbooks = () => {
    return axios.get(`${hostNameUrl}/${security}`);
};

export const postBook = (data) => {
    return axios({
        method: "POST",
        url: `${hostNameUrl}/${security}`,
        data: data,
        // headers: {
        //     "Content-Type" : "application/json",
        // }
    });
};

export const updateSecurity = (data) => {
    return axios({
        method: "PUT",
        url: `${hostNameUrl}/${security}/${data.id}`,
        data: data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};

