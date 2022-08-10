import axios from "axios";
import { hostNameUrl } from "../common/config";

const party = 'api/counterparty'
export const getParties = () => {
    return axios.get(`${hostNameUrl}/${party}`);
};

export const postParty = (data) => {
    return axios({
        method: "POST",
        url: `${hostNameUrl}/api/createCounterparty`,
        data: data,
        // headers: {
        //     "Content-Type" : "application/json",
        // }
    });
};

export const updateparty = (data) => {
    return axios({
        method: "PUT",
        url: `${hostNameUrl}/${party}/${data.id}`,
        data: data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};

