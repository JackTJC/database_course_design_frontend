import {toLogin,toAdmin} from "@/util/skip";

export function identifyAdmin(cookies,fire) {
    if(cookies.get('user-name')!=="admin"){
        fire({
            title:"You are not Admin",
            type:"error"
        })
        toLogin()
    }
}

export function identifyCommonUser(cookies,fire){
    if(cookies.get('user-name')==="admin"){
        fire({
            title:"You are admin",
            type:"error",
        })
        toAdmin()
    }
}

export function setCookie(cookie, id, name, tel) {
    cookie.set('user-name',name)
    cookie.set('user-id',id)
    cookie.set('user-tel',tel)
}

export function delCookie(cookie) {
    cookie.remove('user-name')
    cookie.remove('user-id')
    cookie.remove('user-tel')
}