import fetch from "cross-fetch";

class HttpService {
    static APIBase = "/api";

    static get(url) {
        return fetch(HttpService.APIBase + url, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json();
        });
    }

    static post(url, data) {
        return fetch(HttpService.APIBase + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json();
        });
    }
}

export default HttpService;