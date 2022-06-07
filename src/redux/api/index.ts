import axios from 'axios';

const baseUrlSpaceX: string | undefined = process.env.REACT_APP_BASE_URL_SPACEX;

export const apiCall = (url: string, data: any, headers: any, method: any) => axios({
    method,
    url: baseUrlSpaceX + url,
    data,
    headers
});


