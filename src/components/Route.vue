<script>
import Login from "@/components/Login";
import Register from "@/components/Register";
import Admin from "@/components/Admin";
import GoodsList from "@/components/GoodsList";
import User from "@/components/User";
import AddGoods from "@/components/AddGoods";
import UserOrder from "@/components/UserOrder";
import UserProfile from "@/components/UserProfile";
import AdminUserList from "@/components/AdminUserList";
import AdminOrder from "@/components/AdminOrder";
import NotFound from "@/components/NotFound";
const routes={
  '/':Login,
  '/login':Login,
  '/register':Register,
  '/admin':Admin,
  '/user':User,
  '/user/goods':GoodsList,
  '/admin/goods':AddGoods,
  '/user/order':UserOrder,
  '/user/profile':UserProfile,
  '/admin/user':AdminUserList,
  '/admin/order':AdminOrder,
}

export default {
  name:'Router',
  data:function () {
    return {
      currentRoute:window.location.pathname
    }
  },
  computed:{
    ViewComponent(){
      return routes[this.currentRoute]||NotFound
    }
  },
  render(h){return h(this.ViewComponent)}
}
</script>