import{a as e}from"./axios.91e25212.js";import{b as a}from"./baseRequest.da51274f.js";const t=e.create({timeout:5e3});t.interceptors.request.use((e=>("get"==e.method&&(e.params={lang:navigator.language.split("-")[0],...e.params}),e)),(e=>{Promise.reject(e)})),t.interceptors.response.use((e=>e.data),(e=>Promise.reject(e)));const s=(e={})=>a.get("/api/getWeather",{params:e}),r=(e={})=>t.get("https://devapi.qweather.com/v7/weather/24h?key=f2e14c95cfdc4a1f86ecac13ca85086b",{params:e}),o=(e={})=>t.get("https://geoapi.qweather.com/v2/city/lookup?key=bdd98ec1d87747f3a2e8b1741a5af796",{params:e});export{r as a,o as b,s as g};
