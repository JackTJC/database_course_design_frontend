import {httpPost} from "@/api/common";

export function CreateClient(data = {},respHandle) {
     httpPost('/client/create/',data,respHandle)
}
export function QueryClient(data = {},respHandle)  {
     httpPost('/client/query/',data,respHandle)
}
