import {httpPost} from "@/api/common";

export function CreateClient(data = {}, params = {}) {
    return httpPost('/client/create/',data,params)
}
export function QueryClient(data = {}, params = {})  {
    return httpPost('/client/query/',data,params)
}