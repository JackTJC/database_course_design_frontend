import {httpPost} from "@/api/common";


export function CreateOrder(data = {},  respHandle) {
    return httpPost("/order/create/",data,respHandle)
}

export function QueryOrder(data = {},  respHandle) {
    return httpPost("/order/query/",data,respHandle)
}