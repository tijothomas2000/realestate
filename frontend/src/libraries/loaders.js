import apiRequest from "./apiRequest.js";
import { defer } from "react-router-dom";


export const singlePageLoader = async ({ request, params }) => {
    const res = await apiRequest("/api/post/" + params.id);
    console.log(res.data);
    return res.data;
}
export const listPageLoader = async ({ request, params }) => {
    console.log(request);
    const query = request.url.split("?")[1];
    console.log(query);
    const postPromise = apiRequest("/api/post?" + query);
    return defer({
        postResponse: postPromise
    });
}
export const profilePageLoader = async () => {
    const postPromise = apiRequest("/api/user/profilePosts");
    return defer({
        postResponse: postPromise
    });
}