const    LOGIN = '/login'
const    REGISTER = '/register'
 const   ADMIN = '/admin'
 const   USER_GOOD_LIST = '/user/goods'
 const    USER = '/user'
const USER_ORDER='/user/order'
const USER_PROFILE = '/user/profile'
const ADMIN_GOODS = '/admin/goods'
const ADMIN_USER_LIST = '/admin/user'

export function toLogin() {
    self.location=LOGIN
}
export function toRegister() {
    self.location=REGISTER
}
export function toAdmin() {
    self.location=ADMIN
}

export function toUserGoodsList() {
    self.location=USER_GOOD_LIST
}

export function toUser(){
    self.location=USER
}
export function toUserOrder() {
    self.location=USER_ORDER
}
export function toUserProfile() {
    self.location=USER_PROFILE
}

export function toAdminGoods() {
    self.location=ADMIN_GOODS
}

export function toAdminUserList(){
    self.location=ADMIN_USER_LIST
}
