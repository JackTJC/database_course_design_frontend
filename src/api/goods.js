import {httpPost} from "@/api/common";

export function QueryGoods(data = {},respHandle) {
    httpPost("/goods/query/",data,respHandle)
}
export function CreateGoods(data={},respHandle){
    httpPost("/goods/create/",data,respHandle)
}
export function MCreateGoods(data = {},  respHandle) {
    httpPost("/goods/m_create/",data,respHandle)
}
