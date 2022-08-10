import axios from "axios";
import { hostNameUrl } from "../common/config";

const trade = 'api/trade'
export const getTrades = () => {
    return axios.get(`${hostNameUrl}/${trade}`);
};

export const postTrade = (data) => {
    return axios({
        method: "POST",
        url: `${hostNameUrl}/${trade}`,
        data: data,
        // headers: {
        //     "Content-Type" : "application/json",
        // }
    });
};

export const updateTrade = (data) => {
    return axios({
        method: "PUT",
        url: `${hostNameUrl}/${trade}/${data.id}`,
        data: data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};