
const myHeaders = new Headers();
myHeaders.append("X-Access-Token", "5cf9dfd5-3449-485e-b5ae-70a60e997864");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

export const covidService = {
    getGlobalResult
};

async function getGlobalResult() {
    return await fetch("https://api.covid19api.com/summary", requestOptions).then(handleResponse);
}
function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
    return response.json();
}

