import axios from 'axios'

let config = {
    baseURL: 'http://www.kao996.com:3030/api',
    changeOrigin:true,
    pathRewrite:{
        '^/api':''
    },
    transformRequest: [
        function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }
    ],
    transformResponse: [
        function (data) {
            return data
        }
    ],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    timeout: 10000,
    responseType: 'json'
};

axios.interceptors.response.use(function(res){
    //相应拦截器
    return res.data;
});


export function lbGetFetch(url) {
    return axios.get(url, config)
}

export function lbPostFetch(url, data) {
    return axios.post(url, data, config)
}