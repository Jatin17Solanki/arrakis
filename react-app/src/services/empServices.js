import axios from "axios";
import { hostNameUrl } from "../common/config";

const party = 'api/counterparty'
export const getEmp = () => {
    return axios.get(`${hostNameUrl}/api/user`);
};

export const postEmp = (data) => {
    return axios({
        method: "POST",
        url: `${hostNameUrl}/api/createUser`,
        data: data,
        // headers: {
        //     "Content-Type" : "application/json",
        // }
    });
};

export const updateEmp = (data) => {
    return axios({
        method: "PUT",
        url: `${hostNameUrl}/api/user/${data.id}`,
        data: data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};

