import axios from "axios";

axios.defaults.baseURL='http://localhost:8888'
axios.defaults.timeout=1000
axios.defaults.headers['Content-Type']='application/json'



export function httpGet({url, params={}}) {
    axios.get(url,params).then(
        response=>{

            return Object(response.data)
        }
    ).catch(err=>{
        window.alert(err)
    })
}

export function httpPost(url,data={},params={}) {
    axios.post(url,JSON.stringify(data),params).then(
        response=>{
            console.log(Object(response.data))
            return Object(response.data)
        }
    ).catch(err=>{
        window.alert(err)
    })
}
