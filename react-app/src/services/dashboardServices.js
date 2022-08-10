import axios from "axios";
import { hostNameUrl } from "../common/config";

const dashboard = 'api/book'

export const getBookList = (empId) => {
    return axios.get(`${hostNameUrl}/api/bookUser/userId?userId=${empId}`);
}

export const getTradesById = (id) => {
    return axios.get(`${hostNameUrl}/api/trade/bookId?bookId=${id}`);
};

export const postBook = (data) => {
    return axios({
        method: "POST",
        url: `${hostNameUrl}/${dashboard}`,
        data: data,
        // headers: {
        //     "Content-Type" : "application/json",
        // }
    });
};

export const updatedashboard = (data) => {
    return axios({
        method: "PUT",
        url: `${hostNameUrl}/${dashboard}/${data.id}`,
        data: data,
        headers: {
            "Content-Type" : "application/json",
        }
    });
};

