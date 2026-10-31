import { ofetch } from "ofetch";

const apiClient = ofetch.create({
    baseURL: "/api",
    credentials: "include",
});

export default apiClient;