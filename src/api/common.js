import axios from "axios";
axios.defaults.baseURL='http://localhost:8888'
axios.defaults.timeout=1000
axios.defaults.headers['Content-Type']='application/octet-stream'

//处理错误的函数
function errHandle(err = {}) {
    window.alert(err)
}

export function httpGet(url, params={},respHandle) {
    axios.get(url,params).then(respHandle).catch(errHandle)
}

export function httpPost(url,data={},params={},respHandle) {
    axios.post(url,data,params).then(respHandle).catch(errHandle)
}
