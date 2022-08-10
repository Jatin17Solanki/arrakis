import axios from "axios";
import { hostNameUrl } from "../common/config";

const security = 'api/securities'
export const getSecurities = () => {
    return axios.get(`${hostNameUrl}/${security}`);
};

export const postSecurity = (data) => {
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

export const deleteSecurity = (data) => {
    return axios({
        method: "DELETE",
        url: `${hostNameUrl}/${security}/${data.id}`,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};

