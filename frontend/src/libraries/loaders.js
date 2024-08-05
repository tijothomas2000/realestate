import apiRequest from "./apiRequest.js";
import { defer } from "react-router-dom";


export const singlePageLoader = async ({ request, params }) => {
    const res = await apiRequest("/post/" + params.id);
    return res.data;
}
export const listPageLoader = async ({ request, params }) => {
    console.log(request);
    const query = request.url.split("?")[1];
    console.log(query);
    const postPromise = apiRequest("/post?" + query);
    return defer({
        postResponse: postPromise
    });
}