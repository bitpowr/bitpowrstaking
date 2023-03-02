import axios from "axios";


const agent = axios.create({
    baseURL: process.env.SITE || process.env.VERCEL_URL,
    headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "authorizer": "allow"
    }
});
agent.interceptors.response.use(function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const { status, statusText, data } = response;
    console.log(`Reponse |- Time: ${new Date().toString()} |- statusCode: ${status} |- statusText: ${statusText} `);
    return response;
}, function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response) {
        console.log(` statusCode::: ${error.response.status} statusText::: ${error.response.statusText} `)
    }
    return Promise.reject(error);
});


export default agent;