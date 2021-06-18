import axios from "axios";
import {errHandle} from "@/util/err";
axios.defaults.baseURL='http://localhost:8888'
axios.defaults.timeout=1000
axios.defaults.headers['Content-Type']='application/octet-stream'

export function httpGet(url, params={},respHandle) {
    axios.get(url,params).then(respHandle).catch(errHandle)
}

// export function httpPost(url,data={},params={},respHandle) {
//     axios.post(url,data,params).then(respHandle).catch(errHandle)
// }

//二进制post请求数据
export function httpPost(url, data = {}, respHandle) {
    axios({
        method:"post",
        url:url,
        data:data,
        responseType:'blob',
    }).then(respHandle).catch(errHandle)
}

export function blobPost(url, data = {} , respHandle) {
    axios({
        method:"post",
        url:url,
        data:data,
        responseType:'blob',
    }).then(respHandle).catch(errHandle)
}
