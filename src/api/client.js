import {httpPost} from "@/api/common";

export function CreateClient(data = {}, params = {},respHandle) {
     httpPost('/client/create/',data,params,respHandle)
}
export function QueryClient(data = {}, params = {},respHandle)  {
     httpPost('/client/query/',data,params,respHandle)
}